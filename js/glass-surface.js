(function () {
    'use strict';

    const SVG_NS = 'http://www.w3.org/2000/svg';
    const SURFACE_SELECTOR = [
        '.search-form',
        '.settings-menu',
        '.background-picker',
        '.shortcut-inline-editor',
        '.suggestions-container',
        '.icon-bag',
        'button:not(.search-button)',
        'input:not([type="range"]):not(.search-box)',
        'a.page-switch'
    ].join(', ');
    const instances = new WeakMap();
    let surfaceCount = 0;

    const defaults = {
        referenceHeight: 100,
        borderWidth: 0.07,
        brightness: 47,
        opacity: 0.8,
        blur: 12,
        displace: 0.8,
        backgroundOpacity: 0.06,
        saturation: 0.8,
        distortionScale: -150,
        redOffset: 5,
        greenOffset: 15,
        blueOffset: 25,
        xChannel: 'R',
        yChannel: 'G',
        mixBlendMode: 'screen'
    };

    const registry = document.createElementNS(SVG_NS, 'svg');
    registry.classList.add('glass-surface-registry');
    registry.setAttribute('aria-hidden', 'true');
    const defs = document.createElementNS(SVG_NS, 'defs');
    registry.appendChild(defs);

    function svgElement(name, attributes) {
        const element = document.createElementNS(SVG_NS, name);
        Object.entries(attributes || {}).forEach(([key, value]) => element.setAttribute(key, value));
        return element;
    }

    function supportsSvgFilters(filterId) {
        const userAgent = navigator.userAgent;
        const isSafari = /Safari/.test(userAgent) && !/Chrome|Chromium|Edg/.test(userAgent);
        const isFirefox = /Firefox/.test(userAgent);
        if (isSafari || isFirefox) return false;

        const probe = document.createElement('div');
        probe.style.backdropFilter = `url(#${filterId})`;
        return probe.style.backdropFilter !== '';
    }

    function readOptions(element, overrides) {
        const options = { ...defaults, ...overrides };
        Object.keys(defaults).forEach((key) => {
            const value = element.dataset[`glass${key.charAt(0).toUpperCase()}${key.slice(1)}`];
            if (value === undefined) return;
            options[key] = typeof defaults[key] === 'number' ? Number(value) : value;
        });
        return options;
    }

    function createChannel(filter, color, result) {
        const displacement = svgElement('feDisplacementMap', {
            in: 'SourceGraphic',
            in2: 'map',
            result: `disp-${result}`
        });
        const matrices = {
            red: '1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0',
            green: '0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0',
            blue: '0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0'
        };
        const matrix = svgElement('feColorMatrix', {
            in: `disp-${result}`,
            type: 'matrix',
            values: matrices[color],
            result
        });
        filter.append(displacement, matrix);
        return displacement;
    }

    function enhance(element, overrides) {
        if (!(element instanceof HTMLElement) || instances.has(element) || element.disabled) return;

        const options = readOptions(element, overrides);
        const id = `glass-filter-${++surfaceCount}`;
        const filter = svgElement('filter', {
            id,
            colorInterpolationFilters: 'sRGB',
            x: '0%',
            y: '0%',
            width: '100%',
            height: '100%'
        });
        const image = svgElement('feImage', {
            x: '0',
            y: '0',
            width: '100%',
            height: '100%',
            preserveAspectRatio: 'none',
            result: 'map'
        });
        filter.appendChild(image);

        const red = createChannel(filter, 'red', 'red');
        const green = createChannel(filter, 'green', 'green');
        const blue = createChannel(filter, 'blue', 'blue');
        const gaussianBlur = svgElement('feGaussianBlur', { in: 'output' });
        filter.append(
            svgElement('feBlend', { in: 'red', in2: 'green', mode: 'screen', result: 'rg' }),
            svgElement('feBlend', { in: 'rg', in2: 'blue', mode: 'screen', result: 'output' }),
            gaussianBlur
        );
        defs.appendChild(filter);

        const update = () => {
            if (!element.isConnected) return;
            const rect = element.getBoundingClientRect();
            if (!rect.width || !rect.height) return;

            const sizeRatio = Math.min(1, rect.height / options.referenceHeight);
            const displacementScale = Math.pow(sizeRatio, 3);
            const radius = Math.min(parseFloat(getComputedStyle(element).borderRadius) || 0, rect.height / 2);
            const edge = Math.min(rect.width, rect.height) * (options.borderWidth * 0.5);
            const scaledBlur = options.blur * sizeRatio;
            const redGradient = `red-grad-${id}`;
            const blueGradient = `blue-grad-${id}`;
            const source = `
                <svg viewBox="0 0 ${rect.width} ${rect.height}" xmlns="${SVG_NS}">
                    <defs>
                        <linearGradient id="${redGradient}" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stop-color="#0000"/>
                            <stop offset="100%" stop-color="red"/>
                        </linearGradient>
                        <linearGradient id="${blueGradient}" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#0000"/>
                            <stop offset="100%" stop-color="blue"/>
                        </linearGradient>
                    </defs>
                    <rect width="${rect.width}" height="${rect.height}" fill="black"/>
                    <rect width="${rect.width}" height="${rect.height}" rx="${radius}" fill="url(#${redGradient})"/>
                    <rect width="${rect.width}" height="${rect.height}" rx="${radius}" fill="url(#${blueGradient})" style="mix-blend-mode:${options.mixBlendMode}"/>
                    <rect x="${edge}" y="${edge}" width="${Math.max(0, rect.width - edge * 2)}" height="${Math.max(0, rect.height - edge * 2)}" rx="${radius}" fill="hsl(0 0% ${options.brightness}% / ${options.opacity})" style="filter:blur(${scaledBlur}px)"/>
                </svg>`;
            image.setAttribute('href', `data:image/svg+xml,${encodeURIComponent(source)}`);
            [
                [red, options.redOffset],
                [green, options.greenOffset],
                [blue, options.blueOffset]
            ].forEach(([channel, offset]) => {
                channel.setAttribute('scale', String((options.distortionScale + offset) * displacementScale));
                channel.setAttribute('xChannelSelector', options.xChannel);
                channel.setAttribute('yChannelSelector', options.yChannel);
            });
            gaussianBlur.setAttribute('stdDeviation', String(options.displace * sizeRatio));
        };

        const svgSupported = supportsSvgFilters(id);
        const nestedSurface = Boolean(element.parentElement?.closest('.glass-surface'));
        element.classList.add('glass-surface', svgSupported && !nestedSurface ? 'glass-surface--svg' : 'glass-surface--fallback');
        element.style.setProperty('--glass-frost', options.backgroundOpacity);
        element.style.setProperty('--glass-saturation', options.saturation);
        element.style.setProperty('--glass-filter', `url(#${id})`);
        element.dataset.glassSurface = 'true';

        const resizeObserver = new ResizeObserver(() => requestAnimationFrame(update));
        resizeObserver.observe(element);
        instances.set(element, { filter, resizeObserver, update });
        requestAnimationFrame(update);
    }

    function enhanceTree(root) {
        if (root instanceof Element && root.matches(SURFACE_SELECTOR)) enhance(root);
        if (root.querySelectorAll) root.querySelectorAll(SURFACE_SELECTOR).forEach((element) => enhance(element));
    }

    function destroyTree(root) {
        if (!(root instanceof Element)) return;
        [root, ...root.querySelectorAll(SURFACE_SELECTOR)].forEach((element) => {
            const instance = instances.get(element);
            if (!instance || element.isConnected) return;
            instance.resizeObserver.disconnect();
            instance.filter.remove();
            instances.delete(element);
        });
    }

    function init() {
        document.body.appendChild(registry);
        enhanceTree(document);

        const observer = new MutationObserver((records) => {
            records.forEach((record) => {
                record.addedNodes.forEach(enhanceTree);
                record.removedNodes.forEach((node) => requestAnimationFrame(() => destroyTree(node)));
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });
    }

    window.GlassSurface = { enhance, enhanceTree };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
}());
