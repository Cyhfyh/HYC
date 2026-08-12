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

    const BACKGROUND_MODES = window.ReactBitsBackgrounds.modes;

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
        backgroundMode: 'hycSearchV2BackgroundMode',
        shortcuts: 'hycSearchV2Shortcuts',
        pageVersion: 'hycSearchPageVersion'
    };

    const backgroundRoot = document.getElementById('reactBitsBackgroundRoot');
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
    const toggleBackgroundButton = document.getElementById('toggleBackgroundBtn');
    const backgroundLabel = document.getElementById('backgroundLabel');
    const backgroundPicker = document.getElementById('backgroundPicker');
    const backgroundOptions = document.getElementById('backgroundOptions');
    const closeBackgroundPickerButton = document.getElementById('closeBackgroundPickerBtn');

    let currentEngine = localStorage.getItem(STORAGE.engine) || 'Baidu';
    let dateFormatIndex = Number(localStorage.getItem(STORAGE.dateFormat) || '0');
    let suggestionIndex = -1;
    let suggestionTimer = 0;
    let pendingSuggestionScript = null;
    let pendingCallbackName = null;
    let backgroundMode = readBackgroundMode();
    let backgroundRenderer = null;
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
    function initShader() {
        backgroundRenderer = window.ReactBitsBackgrounds.create(backgroundRoot, backgroundMode);
    }

    function readBackgroundMode() {
        const stored = localStorage.getItem(STORAGE.backgroundMode);
        return BACKGROUND_MODES.some((item) => item.id === stored) ? stored : 'color-bends';
    }

    function syncBackgroundButton() {
        const current = BACKGROUND_MODES.find((item) => item.id === backgroundMode) || BACKGROUND_MODES[0];
        const label = '\u80cc\u666f\uff1a' + current.name;
        backgroundLabel.textContent = label;
        toggleBackgroundButton.setAttribute('aria-label', label);
        toggleBackgroundButton.title = label;
        const icon = toggleBackgroundButton.querySelector('i');
        if (icon) icon.className = `fas ${current.icon}`;
        backgroundOptions.querySelectorAll('.background-option').forEach((option) => {
            const selected = option.dataset.mode === backgroundMode;
            option.classList.toggle('selected', selected);
            option.setAttribute('aria-checked', String(selected));
        });
    }

    function selectBackground(nextMode) {
        if (!BACKGROUND_MODES.some((item) => item.id === nextMode)) return;
        backgroundMode = nextMode;
        localStorage.setItem(STORAGE.backgroundMode, backgroundMode);
        if (backgroundRenderer) backgroundRenderer.setMode(backgroundMode);
        syncBackgroundButton();
    }

    function renderBackgroundOptions() {
        backgroundOptions.innerHTML = BACKGROUND_MODES.map((item) => `
            <button class="background-option${item.id === backgroundMode ? ' selected' : ''}" type="button"
                role="radio" aria-checked="${item.id === backgroundMode}" data-mode="${item.id}">
                <span class="background-option-icon"><i class="fas ${item.icon}" aria-hidden="true"></i></span>
                <span class="background-option-name">${item.name}</span>
                <i class="fas fa-check background-option-check" aria-hidden="true"></i>
            </button>
        `).join('');
    }

    function openBackgroundPicker() {
        renderBackgroundOptions();
        backgroundPicker.classList.add('active');
        backgroundPicker.setAttribute('aria-hidden', 'false');
        document.body.classList.add('background-picker-open');
        settingsMenu.classList.remove('active');
        settingsMenu.setAttribute('aria-hidden', 'true');
        settingsButton.classList.remove('active');
        requestAnimationFrame(() => backgroundOptions.querySelector('.selected')?.focus());
    }

    function closeBackgroundPicker() {
        backgroundPicker.classList.remove('active');
        backgroundPicker.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('background-picker-open');
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
            button.className = `nav-button${shortcutEditMode ? ' shortcut-editing' : ''}${index === selectedShortcutIndex ? ' selected' : ''}`;
            button.type = 'button';
            button.title = shortcut.title;
            button.dataset.index = String(index);
            button.style.animationDelay = `${index * 70}ms`;
            button.innerHTML = `<span class="control-label"><i class="${escapeAttribute(shortcut.icon)}" aria-hidden="true"></i></span>`;

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
            addButton.className = 'nav-button shortcut-editing shortcut-add-button';
            addButton.type = 'button';
            addButton.title = '添加入口';
            addButton.innerHTML = '<span class="control-label"><i class="fas fa-plus" aria-hidden="true"></i></span>';
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
        if (backgroundPicker.classList.contains('active') && !event.target.closest('.background-picker') && !event.target.closest('#toggleBackgroundBtn')) {
            closeBackgroundPicker();
        }

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
    toggleBackgroundButton.addEventListener('click', (event) => {
        event.stopPropagation();
        openBackgroundPicker();
    });
    closeBackgroundPickerButton.addEventListener('click', closeBackgroundPicker);
    backgroundOptions.addEventListener('click', (event) => {
        const option = event.target.closest('.background-option');
        if (option) selectBackground(option.dataset.mode);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && backgroundPicker.classList.contains('active')) {
            closeBackgroundPicker();
            toggleBackgroundButton.focus();
        }
    });
    searchLogo.addEventListener('click', toggleSearchEngine);

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

    syncBackgroundButton();
    localStorage.setItem(STORAGE.pageVersion, 'v2');
    setDefaultSearchEngine(currentEngine);
    renderShortcuts();
    updateDateInfo();
    setInterval(updateDateInfo, 1000 * 60);
    setDateInfoVisible(localStorage.getItem(STORAGE.dateVisible) !== '0');
    renderIconOptions();
    initShader();
    initSearchTilt();
}());
