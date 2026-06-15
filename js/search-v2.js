(function () {
    const ENGINES = {
        Baidu: {
            action: 'https://www.baidu.com/s',
            name: 'wd',
            placeholder: 'Use Baidu Engine...'
        },
        Bing: {
            action: 'https://www.bing.com/search',
            name: 'q',
            placeholder: 'Use Bing Engine...'
        },
        Google: {
            action: 'https://www.google.com/search',
            name: 'q',
            placeholder: 'Use Google Engine...'
        }
    };

    const DEFAULT_BACKGROUND = {
        type: 'ring',
        bandSize: 0.026,
        xScale: 0.75,
        yScale: 0.5,
        distortion: 0.026,
        speed: 0.17,
        glow: 1.14,
        darkness: 0
    };
    const DEFAULT_RING_BACKGROUND = { ...DEFAULT_BACKGROUND };
    const BACKGROUND_TYPES = ['wave', 'ring'];
    const BACKGROUND_PRESET_VERSION = 'ring-default-20260615';

    const DEFAULT_SHORTCUTS = [
        { title: '百度地图', url: 'https://map.baidu.com', icon: 'fas fa-map' },
        { title: '豆包AI', url: 'https://www.doubao.com', icon: 'fas fa-robot' },
        { title: '百度翻译', url: 'https://fanyi.baidu.com', icon: 'fas fa-language' },
        { title: '微软天气', url: 'https://www.msn.com/weather', icon: 'fas fa-cloud-sun' }
    ];

    const ICON_OPTIONS = [
        { label: '地图', icon: 'fas fa-map' },
        { label: '机器人', icon: 'fas fa-robot' },
        { label: '翻译', icon: 'fas fa-language' },
        { label: '天气', icon: 'fas fa-cloud-sun' },
        { label: '搜索', icon: 'fas fa-search' },
        { label: '星标', icon: 'fas fa-star' },
        { label: '首页', icon: 'fas fa-home' },
        { label: '书签', icon: 'fas fa-bookmark' },
        { label: '代码', icon: 'fas fa-code' },
        { label: '音乐', icon: 'fas fa-music' },
        { label: '视频', icon: 'fas fa-video' },
        { label: '图片', icon: 'fas fa-image' },
        { label: '邮箱', icon: 'fas fa-envelope' },
        { label: '日历', icon: 'fas fa-calendar-day' },
        { label: '云端', icon: 'fas fa-cloud' },
        { label: '链接', icon: 'fas fa-link' }
    ];

    const STORAGE = {
        engine: 'hycSearchV2Engine',
        dateVisible: 'hycSearchV2DateVisible',
        dateFormat: 'hycSearchV2DateFormat',
        background: 'hycSearchV2Background',
        backgroundPresetVersion: 'hycSearchV2BackgroundPresetVersion',
        shortcuts: 'hycSearchV2Shortcuts',
        pageVersion: 'hycSearchPageVersion'
    };

    const canvas = document.getElementById('shaderCanvas');
    const searchInput = document.getElementById('searchInput');
    const searchLogo = document.getElementById('searchLogo');
    const searchForm = document.getElementById('searchForm');
    const searchButton = document.getElementById('searchButton');
    const searchContainer = document.querySelector('.search-container');
    const suggestionsContainer = document.getElementById('suggestionsContainer');
    const dateInfo = document.getElementById('dateInfo');
    const shortcutButtons = document.getElementById('shortcutButtons');
    const settingsButton = document.getElementById('settingsButton');
    const settingsMenu = document.getElementById('settingsMenu');
    const shortcutInlineEditor = document.getElementById('shortcutInlineEditor');
    const shortcutTitleInput = document.getElementById('shortcutTitleInput');
    const shortcutUrlInput = document.getElementById('shortcutUrlInput');
    const shortcutIconTrigger = document.getElementById('shortcutIconTrigger');
    const shortcutIconBag = document.getElementById('shortcutIconBag');
    const shortcutIconPreview = document.getElementById('shortcutIconPreview');
    const shortcutIconLabel = document.getElementById('shortcutIconLabel');
    const shortcutEditorTitle = document.getElementById('shortcutEditorTitle');
    const toggleBandTypeButton = document.getElementById('toggleBandTypeBtn');
    const bandTypeLabel = document.getElementById('bandTypeLabel');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const backgroundInputs = {
        bandSize: document.getElementById('bandSizePicker'),
        xScale: document.getElementById('xScalePicker'),
        yScale: document.getElementById('yScalePicker'),
        distortion: document.getElementById('distortionPicker'),
        speed: document.getElementById('speedPicker'),
        glow: document.getElementById('glowPicker'),
        darkness: document.getElementById('darknessPicker')
    };

    let currentEngine = localStorage.getItem(STORAGE.engine) || 'Baidu';
    let dateFormatIndex = Number(localStorage.getItem(STORAGE.dateFormat) || '0');
    let suggestionIndex = -1;
    let suggestionTimer = 0;
    let pendingSuggestionScript = null;
    let pendingCallbackName = null;
    let backgroundSettings = readBackgroundSettings();
    let shaderRefs = null;
    let shortcutEditMode = false;
    let shortcutEditList = [];
    let selectedShortcutIndex = -1;
    let draggedShortcutIndex = -1;
    let placeholderTimer = 0;
    let placeholderPhraseIndex = 0;
    let placeholderText = '';
    let placeholderDeleting = true;
    let tiltFrame = 0;
    let lastMouseEvent = null;
    const waveSurfaceSelector = [
        '.search-form',
        '.liquid-button',
        '.settings-menu',
        '.shortcut-inline-editor',
        '.suggestions-container',
        '.icon-bag',
        '.settings-item:not(.range-setting)',
        '.icon-picker-trigger'
    ].join(', ');

    function initShader() {
        const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
        if (!gl) {
            canvas.classList.add('webgl-fallback');
            return;
        }

        const vertexShaderSource = `
            attribute vec2 position;

            void main() {
                gl_Position = vec4(position, 0.0, 1.0);
            }
        `;

        const fragmentShaderSource = `
            precision highp float;

            uniform vec2 resolution;
            uniform float time;
            uniform float xScale;
            uniform float yScale;
            uniform float distortion;
            uniform float bandSize;
            uniform float glow;
            uniform float darkness;
            uniform float bandType;

            vec3 renderWave(vec2 p) {
                float d = length(p) * distortion;

                float rx = p.x * (1.0 + d);
                float gx = p.x;
                float bx = p.x * (1.0 - d);

                float r = bandSize / max(abs(p.y + sin((rx + time) * xScale) * yScale), 0.002);
                float g = bandSize / max(abs(p.y + sin((gx + time) * xScale) * yScale), 0.002);
                float b = bandSize / max(abs(p.y + sin((bx + time) * xScale) * yScale), 0.002);

                return vec3(r, g, b);
            }

            vec3 renderRing(vec2 p) {
                float orbitTime = time * 0.72;
                vec2 center = vec2(cos(orbitTime) * 2.25, sin(orbitTime) * 1.55);
                float radius = 2.95 + sin(time * 0.37) * 0.2;
                float width = max(bandSize * 1.15, 0.006);
                float chroma = distortion * 0.42;

                float r = width / max(abs(length(p - center * (1.0 + chroma)) - radius), 0.003);
                float g = width / max(abs(length(p - center) - radius), 0.003);
                float b = width / max(abs(length(p - center * (1.0 - chroma)) - radius), 0.003);

                return vec3(r, g, b);
            }

            void main() {
                vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
                vec3 color = (bandType < 0.5 ? renderWave(p) : renderRing(p)) * glow;
                float vignette = 1.0 - smoothstep(0.68, 1.9, length(p)) * 0.38;
                color *= vignette;
                color += vec3(darkness * 0.28, darkness * 0.36, darkness * 0.5);
                gl_FragColor = vec4(color, 1.0);
            }
        `;

        const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) {
            canvas.classList.add('webgl-fallback');
            return;
        }

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            canvas.classList.add('webgl-fallback');
            return;
        }

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, -1, 1, 1, 1]),
            gl.STATIC_DRAW
        );

        shaderRefs = {
            gl,
            program,
            positionBuffer,
            positionLocation: gl.getAttribLocation(program, 'position'),
            uniforms: {
                resolution: gl.getUniformLocation(program, 'resolution'),
                time: gl.getUniformLocation(program, 'time'),
                xScale: gl.getUniformLocation(program, 'xScale'),
                yScale: gl.getUniformLocation(program, 'yScale'),
                distortion: gl.getUniformLocation(program, 'distortion'),
                bandSize: gl.getUniformLocation(program, 'bandSize'),
                glow: gl.getUniformLocation(program, 'glow'),
                darkness: gl.getUniformLocation(program, 'darkness'),
                bandType: gl.getUniformLocation(program, 'bandType')
            }
        };

        window.addEventListener('resize', resizeShader);
        requestAnimationFrame(renderShader);
    }

    function compileShader(gl, type, source) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    function resizeShader() {
        if (!shaderRefs) return;

        const gl = shaderRefs.gl;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const width = Math.floor(canvas.clientWidth * dpr);
        const height = Math.floor(canvas.clientHeight * dpr);
        let resized = false;

        if (canvas.width !== width || canvas.height !== height) {
            canvas.width = width;
            canvas.height = height;
            gl.viewport(0, 0, width, height);
            resized = true;
        }

        if (resized) {
            updateSearchFormHighlights();
        }
    }

    function normalizedWavePointToViewport(point, viewportWidth, viewportHeight) {
        const minSide = Math.min(viewportWidth, viewportHeight);
        return {
            x: (point.x * minSide + viewportWidth) / 2,
            y: (point.y * minSide + viewportHeight) / 2
        };
    }

    function normalizedShaderPointToViewport(point, viewportWidth, viewportHeight) {
        const minSide = Math.min(viewportWidth, viewportHeight);
        return {
            x: (point.x * minSide + viewportWidth) / 2,
            y: (viewportHeight - point.y * minSide) / 2
        };
    }

    function viewportPointToNormalizedShader(point, viewportWidth, viewportHeight) {
        const minSide = Math.min(viewportWidth, viewportHeight);
        return {
            x: (point.x * 2 - viewportWidth) / minSide,
            y: (viewportHeight - point.y * 2) / minSide
        };
    }

    function getWaveExtrema(kind, time, viewportWidth, viewportHeight, fadeMargin) {
        const phaseOffset = kind === 'peak' ? Math.PI / 2 : Math.PI * 1.5;
        const cycle = Math.PI * 2;
        const xScale = Math.max(0.0001, backgroundSettings.xScale || DEFAULT_BACKGROUND.xScale);
        const yScale = backgroundSettings.yScale || DEFAULT_BACKGROUND.yScale;
        const minSide = Math.min(viewportWidth, viewportHeight);
        const minNormX = ((-fadeMargin * 2) - viewportWidth) / minSide;
        const maxNormX = (((viewportWidth + fadeMargin * 2) * 2) - viewportWidth) / minSide;
        const startIndex = Math.floor((((minNormX + time) * xScale) - phaseOffset) / cycle) - 1;
        const endIndex = Math.ceil((((maxNormX + time) * xScale) - phaseOffset) / cycle) + 1;
        const points = [];

        for (let index = startIndex; index <= endIndex; index += 1) {
            points.push({
                x: (phaseOffset + index * cycle) / xScale - time,
                y: kind === 'peak' ? -yScale : yScale
            });
        }

        return points;
    }

    function smoothstep(edge0, edge1, value) {
        if (edge0 === edge1) {
            return value < edge0 ? 0 : 1;
        }

        const t = clamp((value - edge0) / (edge1 - edge0), 0, 1);
        return t * t * (3 - 2 * t);
    }

    function computeWaveVisibility(point, viewportWidth, viewportHeight) {
        const fadeMargin = Math.max(110, Math.min(viewportWidth, viewportHeight) * 0.18);
        const innerFade = fadeMargin * 1.25;
        const outerFade = fadeMargin * 0.25;
        const left = smoothstep(-outerFade, innerFade, point.x);
        const right = 1 - smoothstep(viewportWidth - innerFade, viewportWidth + outerFade, point.x);
        const top = smoothstep(-outerFade, innerFade, point.y);
        const bottom = 1 - smoothstep(viewportHeight - innerFade, viewportHeight + outerFade, point.y);
        return clamp(left * right * top * bottom, 0, 1);
    }

    function projectGlintPoint(point, rect, viewportWidth, viewportHeight) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const influenceX = Math.max(rect.width * 0.9, viewportWidth * 0.22);
        const influenceY = Math.max(rect.height * 1.8, viewportHeight * 0.24);
        const offsetX = clamp((point.x - centerX) / influenceX, -1, 1);
        const offsetY = clamp((point.y - centerY) / influenceY, -1, 1);
        const xPadding = Math.max(12, rect.width * 0.05);
        const yPadding = Math.max(7, rect.height * 0.14);

        return {
            x: clamp(rect.width / 2 + offsetX * (rect.width / 2 - xPadding), xPadding, rect.width - xPadding),
            y: clamp(rect.height / 2 + offsetY * (rect.height / 2 - yPadding), yPadding, rect.height - yPadding)
        };
    }

    function getWeightedGlint(kind, rect, now, viewportWidth, viewportHeight) {
        const fadeMargin = Math.max(110, Math.min(viewportWidth, viewportHeight) * 0.18);
        const time = now * 0.001 * backgroundSettings.speed;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const extrema = getWaveExtrema(kind, time, viewportWidth, viewportHeight, fadeMargin);
        let totalWeight = 0;
        let weightedX = 0;
        let weightedY = 0;

        extrema.forEach((extremum) => {
            const point = normalizedWavePointToViewport(extremum, viewportWidth, viewportHeight);
            const visibility = computeWaveVisibility(point, viewportWidth, viewportHeight);
            if (visibility <= 0.001) return;

            const distanceX = Math.abs(point.x - centerX) / Math.max(viewportWidth * 0.48, rect.width);
            const distanceY = Math.abs(point.y - centerY) / Math.max(viewportHeight * 0.42, rect.height * 4);
            const proximity = Math.max(0.12, 1 - clamp(distanceX * 0.65 + distanceY * 0.35, 0, 1));
            const weight = visibility * proximity;
            const spot = projectGlintPoint(point, rect, viewportWidth, viewportHeight);

            totalWeight += weight;
            weightedX += spot.x * weight;
            weightedY += spot.y * weight;
        });

        if (totalWeight <= 0.001) {
            return {
                x: rect.width / 2,
                y: rect.height / 2,
                glow: 0
            };
        }

        return {
            x: weightedX / totalWeight,
            y: weightedY / totalWeight,
            glow: clamp(totalWeight, 0, 1)
        };
    }

    function getRingCenter(time) {
        const orbitTime = time * 0.72;
        return {
            x: Math.cos(orbitTime) * 2.25,
            y: Math.sin(orbitTime) * 1.55
        };
    }

    function getRingRadius(time) {
        return 2.95 + Math.sin(time * 0.37) * 0.2;
    }

    function getRingGlint(rect, now, viewportWidth, viewportHeight) {
        const time = now * 0.001 * backgroundSettings.speed;
        const centerPoint = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
        };
        const controlPoint = viewportPointToNormalizedShader(centerPoint, viewportWidth, viewportHeight);
        const ringCenter = getRingCenter(time);
        const radius = getRingRadius(time);
        const dx = controlPoint.x - ringCenter.x;
        const dy = controlPoint.y - ringCenter.y;
        const distance = Math.hypot(dx, dy) || 1;
        const ringPoint = {
            x: ringCenter.x + (dx / distance) * radius,
            y: ringCenter.y + (dy / distance) * radius
        };
        const viewportPoint = normalizedShaderPointToViewport(ringPoint, viewportWidth, viewportHeight);
        const visibility = computeWaveVisibility(viewportPoint, viewportWidth, viewportHeight);
        const distanceX = Math.abs(viewportPoint.x - centerPoint.x) / Math.max(viewportWidth * 0.5, rect.width);
        const distanceY = Math.abs(viewportPoint.y - centerPoint.y) / Math.max(viewportHeight * 0.5, rect.height * 4);
        const proximity = Math.max(0.14, 1 - clamp(distanceX * 0.58 + distanceY * 0.42, 0, 1));
        const spot = projectGlintPoint(viewportPoint, rect, viewportWidth, viewportHeight);

        return {
            x: spot.x,
            y: spot.y,
            glow: clamp(visibility * proximity, 0, 1)
        };
    }

    function updateWaveSurface(surface, now, viewportWidth, viewportHeight) {
        const rect = surface.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        if (backgroundSettings.type === 'ring') {
            const ringSpot = getRingGlint(rect, now, viewportWidth, viewportHeight);
            const waveGlow = clamp(0.08 + ringSpot.glow * 0.86, 0, 1);

            surface.style.setProperty('--shine-peak-x', `${ringSpot.x.toFixed(2)}px`);
            surface.style.setProperty('--shine-peak-y', `${ringSpot.y.toFixed(2)}px`);
            surface.style.setProperty('--shine-trough-x', `${ringSpot.x.toFixed(2)}px`);
            surface.style.setProperty('--shine-trough-y', `${ringSpot.y.toFixed(2)}px`);
            surface.style.setProperty('--shine-peak-glow', ringSpot.glow.toFixed(3));
            surface.style.setProperty('--shine-trough-glow', '0.000');
            surface.style.setProperty('--wave-glow', waveGlow.toFixed(3));
            return;
        }

        const peakSpot = getWeightedGlint('peak', rect, now, viewportWidth, viewportHeight);
        const troughSpot = getWeightedGlint('trough', rect, now, viewportWidth, viewportHeight);
        const waveGlow = clamp(0.1 + (peakSpot.glow + troughSpot.glow) * 0.48, 0, 1);

        surface.style.setProperty('--shine-peak-x', `${peakSpot.x.toFixed(2)}px`);
        surface.style.setProperty('--shine-peak-y', `${peakSpot.y.toFixed(2)}px`);
        surface.style.setProperty('--shine-trough-x', `${troughSpot.x.toFixed(2)}px`);
        surface.style.setProperty('--shine-trough-y', `${troughSpot.y.toFixed(2)}px`);
        surface.style.setProperty('--shine-peak-glow', peakSpot.glow.toFixed(3));
        surface.style.setProperty('--shine-trough-glow', troughSpot.glow.toFixed(3));
        surface.style.setProperty('--wave-glow', waveGlow.toFixed(3));
    }

    function updateSearchFormHighlights(now = performance.now()) {
        if (!searchForm) return;

        const viewportWidth = canvas.clientWidth || window.innerWidth;
        const viewportHeight = canvas.clientHeight || window.innerHeight;
        const minSide = Math.min(viewportWidth, viewportHeight);
        if (!viewportWidth || !viewportHeight || !minSide) return;

        document.querySelectorAll(waveSurfaceSelector).forEach((surface) => {
            updateWaveSurface(surface, now, viewportWidth, viewportHeight);
        });
    }

    function renderShader(now) {
        if (!shaderRefs) return;

        resizeShader();
        const { gl, program, positionBuffer, positionLocation, uniforms } = shaderRefs;
        const settings = backgroundSettings;

        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
        gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
        gl.uniform1f(uniforms.time, now * 0.001 * settings.speed);
        gl.uniform1f(uniforms.xScale, settings.xScale);
        gl.uniform1f(uniforms.yScale, settings.yScale);
        gl.uniform1f(uniforms.distortion, settings.distortion);
        gl.uniform1f(uniforms.bandSize, settings.bandSize);
        gl.uniform1f(uniforms.glow, settings.glow);
        gl.uniform1f(uniforms.darkness, settings.darkness);
        gl.uniform1f(uniforms.bandType, settings.type === 'ring' ? 1 : 0);
        gl.drawArrays(gl.TRIANGLES, 0, 6);
        updateSearchFormHighlights(now);

        if (!prefersReducedMotion.matches) {
            requestAnimationFrame(renderShader);
        }
    }

    function readBackgroundSettings() {
        try {
            const stored = JSON.parse(localStorage.getItem(STORAGE.background) || '{}');
            if (localStorage.getItem(STORAGE.backgroundPresetVersion) !== BACKGROUND_PRESET_VERSION) {
                const defaults = getDefaultRingBackground();
                localStorage.setItem(STORAGE.background, JSON.stringify(defaults));
                localStorage.setItem(STORAGE.backgroundPresetVersion, BACKGROUND_PRESET_VERSION);
                return defaults;
            }

            return normalizeBackgroundSettings(stored);
        } catch (error) {
            const defaults = getDefaultRingBackground();
            localStorage.setItem(STORAGE.background, JSON.stringify(defaults));
            localStorage.setItem(STORAGE.backgroundPresetVersion, BACKGROUND_PRESET_VERSION);
            return defaults;
        }
    }

    function getDefaultRingBackground() {
        return { ...DEFAULT_RING_BACKGROUND };
    }

    function normalizeBackgroundSettings(settings) {
        return Object.keys(DEFAULT_BACKGROUND).reduce((result, key) => {
            if (key === 'type') {
                result.type = BACKGROUND_TYPES.includes(settings.type) ? settings.type : DEFAULT_BACKGROUND.type;
                return result;
            }

            const value = Number(settings[key]);
            result[key] = Number.isFinite(value) ? value : DEFAULT_BACKGROUND[key];
            return result;
        }, {});
    }

    function syncBackgroundInputs() {
        Object.keys(backgroundInputs).forEach((key) => {
            backgroundInputs[key].value = String(backgroundSettings[key]);
        });
        syncBackgroundTypeButton();
    }

    function syncBackgroundTypeButton() {
        if (!toggleBandTypeButton || !bandTypeLabel) return;

        const isRing = backgroundSettings.type === 'ring';
        const label = '\u8272\u5e26\u7c7b\u578b\uff1a' + (isRing ? '\u73af\u5f62' : '\u6ce2\u6d6a');
        bandTypeLabel.textContent = label;
        toggleBandTypeButton.setAttribute('aria-label', label);
        toggleBandTypeButton.title = label;
    }

    function persistBackgroundSettings() {
        localStorage.setItem(STORAGE.background, JSON.stringify(backgroundSettings));
        localStorage.setItem(STORAGE.backgroundPresetVersion, BACKGROUND_PRESET_VERSION);
    }

    function resetBackgroundSettings() {
        backgroundSettings = getDefaultRingBackground();
        syncBackgroundInputs();
        persistBackgroundSettings();
        updateSearchFormHighlights();
    }

    function toggleBackgroundType() {
        if (backgroundSettings.type === 'ring') {
            backgroundSettings.type = 'wave';
        } else {
            backgroundSettings = getDefaultRingBackground();
            syncBackgroundInputs();
        }

        syncBackgroundTypeButton();
        persistBackgroundSettings();
        updateSearchFormHighlights();
    }

    function setDefaultSearchEngine(engine, animate = false) {
        const nextEngine = ENGINES[engine] ? engine : 'Baidu';
        const config = ENGINES[nextEngine];
        currentEngine = nextEngine;
        searchLogo.textContent = nextEngine;
        searchForm.action = config.action;
        searchInput.name = config.name;
        localStorage.setItem(STORAGE.engine, nextEngine);
        resetPlaceholderTypewriter();

        if (animate) {
            searchForm.classList.remove('engine-switch');
            void searchForm.offsetWidth;
            searchForm.classList.add('engine-switch');
            window.setTimeout(() => searchForm.classList.remove('engine-switch'), 480);
        }
    }

    function toggleSearchEngine() {
        const engines = Object.keys(ENGINES);
        const currentIndex = engines.indexOf(currentEngine);
        setDefaultSearchEngine(engines[(currentIndex + 1) % engines.length], true);
    }

    function updateDateInfo() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
        const shortWeekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const formats = [
            `${year}年${month}月${date}日 星期${weekdays[now.getDay()]}`,
            `${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')} ${shortWeekdays[now.getDay()]}`,
            `${year}年第${getWeekNumber(now)}周`,
            `${year}/${String(month).padStart(2, '0')}/${String(date).padStart(2, '0')}`
        ];

        dateInfo.textContent = formats[dateFormatIndex % formats.length];
    }

    function getWeekNumber(date) {
        const current = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
        const day = current.getUTCDay() || 7;
        current.setUTCDate(current.getUTCDate() + 4 - day);
        const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));
        return Math.ceil((((current - yearStart) / 86400000) + 1) / 7);
    }

    function setDateInfoVisible(visible) {
        dateInfo.classList.toggle('hide', !visible);
        localStorage.setItem(STORAGE.dateVisible, visible ? '1' : '0');
    }

    function toggleDateInfo() {
        setDateInfoVisible(dateInfo.classList.contains('hide'));
    }

    function getPlaceholderPhrases() {
        return [
            ENGINES[currentEngine].placeholder,
            '搜索点什么...',
            '今天想找什么？',
            '输入关键词开始探索'
        ];
    }

    function stopPlaceholderTypewriter() {
        window.clearTimeout(placeholderTimer);
        placeholderTimer = 0;
    }

    function runPlaceholderTypewriter() {
        stopPlaceholderTypewriter();

        if (searchInput.value.trim()) {
            return;
        }

        const phrases = getPlaceholderPhrases();
        const target = phrases[placeholderPhraseIndex % phrases.length];

        if (placeholderDeleting) {
            placeholderText = placeholderText.slice(0, -1);
            if (!placeholderText) {
                placeholderDeleting = false;
                placeholderPhraseIndex = (placeholderPhraseIndex + 1) % phrases.length;
            }
        } else {
            placeholderText = target.slice(0, placeholderText.length + 1);
            if (placeholderText === target) {
                placeholderDeleting = true;
                searchInput.placeholder = placeholderText;
                placeholderTimer = window.setTimeout(runPlaceholderTypewriter, 3600);
                return;
            }
        }

        searchInput.placeholder = placeholderText;
        placeholderTimer = window.setTimeout(runPlaceholderTypewriter, placeholderDeleting ? 34 : 68);
    }

    function resetPlaceholderTypewriter() {
        placeholderPhraseIndex = 0;
        placeholderText = getPlaceholderPhrases()[0];
        placeholderDeleting = true;
        searchInput.placeholder = placeholderText;
        runPlaceholderTypewriter();
    }

    function requestSuggestions(query) {
        clearPendingSuggestion();

        if (!query) {
            clearSuggestions();
            return;
        }

        pendingCallbackName = `hycV2Suggest_${Date.now()}_${Math.floor(Math.random() * 10000)}`;
        window[pendingCallbackName] = function (payload) {
            renderSuggestions(payload && Array.isArray(payload.s) ? payload.s : [], payload && payload.q ? payload.q : query);
            clearPendingSuggestion();
        };

        pendingSuggestionScript = document.createElement('script');
        pendingSuggestionScript.src = `https://suggestion.baidu.com/su?wd=${encodeURIComponent(query)}&cb=${pendingCallbackName}`;
        pendingSuggestionScript.onerror = function () {
            clearPendingSuggestion();
            clearSuggestions();
        };
        document.body.appendChild(pendingSuggestionScript);
    }

    function clearPendingSuggestion() {
        if (pendingSuggestionScript && pendingSuggestionScript.parentNode) {
            pendingSuggestionScript.parentNode.removeChild(pendingSuggestionScript);
        }

        if (pendingCallbackName && window[pendingCallbackName]) {
            delete window[pendingCallbackName];
        }

        pendingSuggestionScript = null;
        pendingCallbackName = null;
    }

    function clearSuggestions() {
        suggestionsContainer.classList.remove('active');
        suggestionsContainer.innerHTML = '';
        suggestionIndex = -1;
    }

    function renderSuggestions(items, query) {
        const limited = items.slice(0, 10);

        if (!limited.length) {
            clearSuggestions();
            return;
        }

        suggestionsContainer.innerHTML = limited.map((item, index) => {
            return `
                <div class="suggestion-item" role="option" data-index="${index}" data-value="${escapeHtml(item)}">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <span>${highlight(item, query)}</span>
                </div>
            `;
        }).join('');
        suggestionsContainer.classList.add('active');
        suggestionIndex = -1;
    }

    function highlight(text, query) {
        const safeText = escapeHtml(text);
        const safeQuery = escapeHtml(query || '');
        if (!safeQuery) {
            return safeText;
        }

        const pattern = new RegExp(`(${escapeRegExp(safeQuery)})`, 'ig');
        return safeText.replace(pattern, '<span class="highlight">$1</span>');
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[char];
        });
    }

    function escapeRegExp(value) {
        return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function chooseSuggestion(value) {
        searchInput.value = value;
        clearSuggestions();
        searchForm.requestSubmit();
    }

    function moveSuggestion(step) {
        const items = Array.from(suggestionsContainer.querySelectorAll('.suggestion-item'));
        if (!items.length) return;

        suggestionIndex = (suggestionIndex + step + items.length) % items.length;
        items.forEach((item, index) => {
            item.classList.toggle('active', index === suggestionIndex);
            item.setAttribute('aria-selected', String(index === suggestionIndex));
        });
        items[suggestionIndex].scrollIntoView({ block: 'nearest' });
    }

    function normalizeShortcut(shortcut, fallback) {
        const source = shortcut || {};
        let url = String(source.url || fallback.url).trim();
        if (url && !/^(https?:|file:|mailto:|#)/i.test(url)) {
            url = `https://${url}`;
        }

        return {
            title: String(source.title || fallback.title).trim(),
            url,
            icon: String(source.icon || fallback.icon).trim()
        };
    }

    function getShortcuts() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE.shortcuts) || '[]');
            if (Array.isArray(saved) && saved.length) {
                return saved.map((shortcut, index) => normalizeShortcut(shortcut, DEFAULT_SHORTCUTS[index] || DEFAULT_SHORTCUTS[0]));
            }
        } catch (error) { }

        return DEFAULT_SHORTCUTS.map((shortcut) => ({ ...shortcut }));
    }

    function persistShortcuts() {
        localStorage.setItem(STORAGE.shortcuts, JSON.stringify(shortcutEditList));
    }

    function renderShortcuts() {
        shortcutButtons.innerHTML = '';
        shortcutButtons.classList.toggle('editing', shortcutEditMode);
        const shortcuts = shortcutEditMode ? shortcutEditList : getShortcuts();

        shortcuts.forEach((shortcut, index) => {
            const button = document.createElement('button');
            button.className = `liquid-button nav-button${shortcutEditMode ? ' shortcut-editing' : ''}${index === selectedShortcutIndex ? ' selected' : ''}`;
            button.type = 'button';
            button.title = shortcut.title;
            button.dataset.index = String(index);
            button.style.animationDelay = `${index * 70}ms`;
            button.innerHTML = `<span class="liquid-label"><i class="${escapeAttribute(shortcut.icon)}" aria-hidden="true"></i></span>`;

            if (shortcutEditMode) {
                button.draggable = true;
                const deleteButton = document.createElement('span');
                deleteButton.className = 'shortcut-delete';
                deleteButton.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
                deleteButton.addEventListener('click', (event) => {
                    event.stopPropagation();
                    deleteShortcut(index);
                });
                button.appendChild(deleteButton);
                button.addEventListener('click', () => selectShortcut(index));
                button.addEventListener('dragstart', handleShortcutDragStart);
                button.addEventListener('dragover', handleShortcutDragOver);
                button.addEventListener('drop', handleShortcutDrop);
                button.addEventListener('dragend', handleShortcutDragEnd);
            } else {
                button.addEventListener('click', () => {
                    button.classList.add('launching');
                    window.setTimeout(() => {
                        window.location.href = shortcut.url;
                    }, 120);
                });
            }

            shortcutButtons.appendChild(button);
        });

        if (shortcutEditMode) {
            const addButton = document.createElement('button');
            addButton.className = 'liquid-button nav-button shortcut-editing shortcut-add-button';
            addButton.type = 'button';
            addButton.title = '添加入口';
            addButton.innerHTML = '<span class="liquid-label"><i class="fas fa-plus" aria-hidden="true"></i></span>';
            addButton.addEventListener('click', addShortcut);
            shortcutButtons.appendChild(addButton);
        }
    }

    function escapeAttribute(value) {
        return String(value).replace(/["'<>]/g, '');
    }

    function openShortcutEditor() {
        shortcutEditMode = true;
        shortcutEditList = getShortcuts();
        selectedShortcutIndex = Math.min(0, shortcutEditList.length - 1);
        shortcutInlineEditor.classList.add('active');
        shortcutInlineEditor.setAttribute('aria-hidden', 'false');
        selectShortcut(selectedShortcutIndex);
        renderIconOptions();
        renderShortcuts();
    }

    function exitShortcutEditMode() {
        shortcutEditMode = false;
        selectedShortcutIndex = -1;
        draggedShortcutIndex = -1;
        shortcutInlineEditor.classList.remove('active');
        shortcutInlineEditor.setAttribute('aria-hidden', 'true');
        shortcutIconBag.classList.remove('open');
        persistShortcuts();
        renderShortcuts();
    }

    function selectShortcut(index) {
        selectedShortcutIndex = index;
        const shortcut = shortcutEditList[index];
        const hasShortcut = Boolean(shortcut);

        shortcutTitleInput.disabled = !hasShortcut;
        shortcutUrlInput.disabled = !hasShortcut;
        shortcutIconTrigger.disabled = !hasShortcut;
        shortcutEditorTitle.textContent = hasShortcut ? `快捷入口 ${index + 1}` : '快捷入口';

        if (hasShortcut) {
            shortcutTitleInput.value = shortcut.title;
            shortcutUrlInput.value = shortcut.url;
            setIconPreview(shortcut.icon);
        } else {
            shortcutTitleInput.value = '';
            shortcutUrlInput.value = '';
            setIconPreview('fas fa-star');
        }

        renderShortcuts();
        renderIconOptions();
    }

    function addShortcut() {
        const shortcut = { title: '新入口', url: 'https://', icon: 'fas fa-star' };
        shortcutEditList.push(shortcut);
        persistShortcuts();
        selectShortcut(shortcutEditList.length - 1);
        shortcutTitleInput.focus();
        shortcutTitleInput.select();
    }

    function deleteShortcut(index) {
        shortcutEditList.splice(index, 1);
        if (!shortcutEditList.length) {
            shortcutEditList.push({ ...DEFAULT_SHORTCUTS[0] });
        }
        selectedShortcutIndex = Math.min(index, shortcutEditList.length - 1);
        persistShortcuts();
        selectShortcut(selectedShortcutIndex);
    }

    function updateSelectedShortcut() {
        const shortcut = shortcutEditList[selectedShortcutIndex];
        if (!shortcut) return;

        shortcut.title = shortcutTitleInput.value.trim() || '未命名';
        shortcut.url = normalizeShortcut({ url: shortcutUrlInput.value }, shortcut).url;
        persistShortcuts();
        renderShortcuts();
    }

    function setIconPreview(icon) {
        const option = ICON_OPTIONS.find((item) => item.icon === icon) || ICON_OPTIONS[5];
        shortcutIconPreview.className = option.icon;
        shortcutIconLabel.textContent = option.label;
    }

    function renderIconOptions() {
        const selectedIcon = shortcutEditList[selectedShortcutIndex]?.icon;
        shortcutIconBag.innerHTML = ICON_OPTIONS.map((option) => `
            <button class="icon-option${option.icon === selectedIcon ? ' selected' : ''}" type="button" data-icon="${option.icon}" data-label="${option.label}">
                <i class="${option.icon}" aria-hidden="true"></i>
                <span>${option.label}</span>
            </button>
        `).join('');
    }

    function chooseIcon(icon) {
        const shortcut = shortcutEditList[selectedShortcutIndex];
        if (!shortcut) return;

        shortcut.icon = icon;
        setIconPreview(icon);
        persistShortcuts();
        renderShortcuts();
        renderIconOptions();
        shortcutIconBag.classList.remove('open');
    }

    function handleShortcutDragStart(event) {
        draggedShortcutIndex = Number(event.currentTarget.dataset.index);
        event.currentTarget.classList.add('dragging');
        event.dataTransfer.effectAllowed = 'move';
    }

    function handleShortcutDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }

    function handleShortcutDrop(event) {
        event.preventDefault();
        const targetIndex = Number(event.currentTarget.dataset.index);
        if (!Number.isInteger(draggedShortcutIndex) || draggedShortcutIndex === targetIndex) {
            return;
        }

        const [moved] = shortcutEditList.splice(draggedShortcutIndex, 1);
        shortcutEditList.splice(targetIndex, 0, moved);
        selectedShortcutIndex = targetIndex;
        draggedShortcutIndex = -1;
        persistShortcuts();
        selectShortcut(selectedShortcutIndex);
    }

    function handleShortcutDragEnd(event) {
        event.currentTarget.classList.remove('dragging');
        draggedShortcutIndex = -1;
    }

    function initSearchTilt() {
        window.addEventListener('mousemove', (event) => {
            lastMouseEvent = event;
            if (!tiltFrame) {
                tiltFrame = requestAnimationFrame(updateSearchTilt);
            }
        });

        document.addEventListener('mouseleave', () => {
            searchForm.style.transform = 'rotateX(0deg) rotateY(0deg)';
            updateSearchFormHighlights();
        });
    }

    function updateSearchTilt() {
        if (!lastMouseEvent) return;

        const rect = searchForm.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = clamp(-((lastMouseEvent.clientY - centerY) / (window.innerHeight / 2)) * 7, -7, 7);
        const rotateY = clamp(((lastMouseEvent.clientX - centerX) / (window.innerWidth / 2)) * 10, -10, 10);
        searchForm.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        updateSearchFormHighlights();
        tiltFrame = 0;
    }

    function clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    }

    settingsButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const active = !settingsMenu.classList.contains('active');
        settingsMenu.classList.toggle('active', active);
        settingsMenu.setAttribute('aria-hidden', String(!active));
        settingsButton.classList.toggle('active', active);
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.settings-container')) {
            settingsMenu.classList.remove('active');
            settingsMenu.setAttribute('aria-hidden', 'true');
            settingsButton.classList.remove('active');
        }

        if (!event.target.closest('.search-container')) {
            clearSuggestions();
            searchForm.classList.remove('focus');
            document.body.classList.remove('search-focused');
        }

        if (!event.target.closest('.icon-picker')) {
            shortcutIconBag.classList.remove('open');
        }
    });

    document.getElementById('toggleDateBtn').addEventListener('click', toggleDateInfo);
    document.getElementById('toggleEngineBtn').addEventListener('click', toggleSearchEngine);
    document.getElementById('editShortcutsBtn').addEventListener('click', openShortcutEditor);
    document.getElementById('finishShortcutEditBtn').addEventListener('click', exitShortcutEditMode);
    toggleBandTypeButton.addEventListener('click', toggleBackgroundType);
    document.getElementById('resetBackgroundBtn').addEventListener('click', resetBackgroundSettings);
    searchLogo.addEventListener('click', toggleSearchEngine);

    Object.keys(backgroundInputs).forEach((key) => {
        backgroundInputs[key].addEventListener('input', (event) => {
            backgroundSettings[key] = Number(event.target.value);
            persistBackgroundSettings();
            updateSearchFormHighlights();
        });
    });

    searchInput.addEventListener('focus', () => {
        searchForm.classList.add('focus');
        document.body.classList.add('search-focused');
        stopPlaceholderTypewriter();
    });

    searchInput.addEventListener('blur', () => {
        window.setTimeout(() => {
            if (document.activeElement !== searchButton) {
                searchForm.classList.remove('focus');
                document.body.classList.remove('search-focused');
                runPlaceholderTypewriter();
            }
        }, 20);
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        searchContainer.style.transform = query ? 'translateY(-8vh)' : '';
        stopPlaceholderTypewriter();
        window.clearTimeout(suggestionTimer);
        suggestionTimer = window.setTimeout(() => requestSuggestions(query), 180);
    });

    searchInput.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            moveSuggestion(1);
            return;
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            moveSuggestion(-1);
            return;
        }

        if (event.key === 'Enter' && suggestionIndex >= 0) {
            const item = suggestionsContainer.querySelectorAll('.suggestion-item')[suggestionIndex];
            if (item) {
                event.preventDefault();
                chooseSuggestion(item.dataset.value || item.textContent.trim());
            }
            return;
        }

        if (event.key === 'Escape') {
            clearSuggestions();
        }
    });

    searchButton.addEventListener('focus', () => {
        searchForm.classList.add('focus');
        document.body.classList.add('search-focused');
        stopPlaceholderTypewriter();
    });

    searchButton.addEventListener('blur', () => {
        window.setTimeout(() => {
            if (document.activeElement !== searchInput) {
                searchForm.classList.remove('focus');
                document.body.classList.remove('search-focused');
                runPlaceholderTypewriter();
            }
        }, 20);
    });

    suggestionsContainer.addEventListener('pointerdown', (event) => {
        const item = event.target.closest('.suggestion-item');
        if (item) {
            event.preventDefault();
            chooseSuggestion(item.dataset.value || item.textContent.trim());
        }
    });

    searchForm.addEventListener('submit', (event) => {
        const value = searchInput.value.trim().replace(/\s+/g, ' ');
        searchInput.value = value;

        if (!value) {
            event.preventDefault();
            searchForm.classList.remove('is-empty');
            void searchForm.offsetWidth;
            searchForm.classList.add('is-empty');
            searchInput.focus();
        }
    });

    dateInfo.addEventListener('click', () => {
        dateFormatIndex = (dateFormatIndex + 1) % 4;
        localStorage.setItem(STORAGE.dateFormat, String(dateFormatIndex));
        updateDateInfo();
    });

    shortcutTitleInput.addEventListener('input', updateSelectedShortcut);
    shortcutUrlInput.addEventListener('change', updateSelectedShortcut);
    shortcutUrlInput.addEventListener('blur', updateSelectedShortcut);

    shortcutIconTrigger.addEventListener('click', () => {
        shortcutIconBag.classList.toggle('open');
        shortcutIconBag.setAttribute('aria-hidden', String(!shortcutIconBag.classList.contains('open')));
    });

    shortcutIconBag.addEventListener('click', (event) => {
        const option = event.target.closest('.icon-option');
        if (option) {
            chooseIcon(option.dataset.icon);
        }
    });

    syncBackgroundInputs();
    localStorage.setItem(STORAGE.pageVersion, 'v2');
    setDefaultSearchEngine(currentEngine);
    renderShortcuts();
    updateDateInfo();
    setInterval(updateDateInfo, 1000 * 60);
    setDateInfoVisible(localStorage.getItem(STORAGE.dateVisible) !== '0');
    renderIconOptions();
    initShader();
    initSearchTilt();
    updateSearchFormHighlights();
}());
