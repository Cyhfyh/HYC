// 检查本地存储中的主题设置
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }

        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            // document.querySelector(".searchLogo").style.display = "none"
            localStorage.setItem('theme', newTheme);
            const customHue = localStorage.getItem('customHue');
            const customBg = localStorage.getItem('customBgColor');
            const nextLightness = newTheme === 'dark' ? 18 : 94;
            if (customHue !== null) {
                applyHuePalette(customHue, true, nextLightness);
            } else if (customBg) {
                applyAutoPalette(customBg, true, nextLightness);
            }
            setLogoColorByCustom();
        }

        function toggleSettings() {
            const menu = document.getElementById('settingsMenu');
            const button = document.querySelector('.settings-button');

            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                button.style.transform = 'rotate(0deg)';
            } else {
                menu.classList.add('active');
                button.style.transform = 'rotate(90deg)';
            }
        }

        // 点击其他地方关闭设置菜单
        document.addEventListener('click', function (event) {
            const settingsContainer = document.querySelector('.settings-container');
            const menu = document.getElementById('settingsMenu');
            const button = document.querySelector('.settings-button');

            if (!settingsContainer.contains(event.target)) {
                menu.classList.remove('active');
                button.style.transform = 'rotate(0deg)';
            }
        });

        // 搜索建议功能
        const searchInput = document.getElementById('searchInput');
        const searchLogo = document.getElementById('searchLogo');
        const searchForm = document.getElementById('searchForm');
        const suggestionsContainer = document.getElementById('suggestionsContainer');
        const searchContainer = document.querySelector('.search-container');
        const huePicker = document.getElementById('huePicker');
        const lightnessPicker = document.getElementById('lightnessPicker');
        let suggestionTimeout;
        let currentSuggestionIndex = -1;

        searchInput.addEventListener('input', function () {
            const query = this.value.trim();
            setBackgroundGathered(query.length > 0);
            searchContainer.style.marginTop = '-5%';
            searchContainer.style.transition = 'margin-top .8s ease';
            if (query.length > 0) {
                stopPlaceholderTypewriter();
            } else if (document.activeElement !== searchInput) {
                runPlaceholderTypewriter();
            }

            // 清除之前的定时器
            clearTimeout(suggestionTimeout);

            // 如果输入为空，隐藏建议
            if (!query) {
                suggestionsContainer.classList.remove('active');
                return;
            }
            fetchSuggestions(query);
        });

        // 点击建议项时进行搜索
        suggestionsContainer.addEventListener('click', function (e) {
            const item = e.target.closest('.suggestion-item');
            if (item) {
                searchInput.value = item.textContent.trim().replace(/\s+/g, ' ');
                searchForm.submit();
            }
        });

        // 点击其他地方时隐藏建议
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.search-container')) {
                suggestionsContainer.classList.remove('active');
            }
        });

        // 获取搜索建议
        function fetchSuggestions(query) {
            const script = document.createElement('script');
            script.src = `https://suggestion.baidu.com/su?wd=${encodeURIComponent(query)}&cb=handleSuggestions`;
            document.body.appendChild(script);
            script.onload = () => {
                document.body.removeChild(script);
            };
        }

        // 处理搜索建议回调
        function handleSuggestions(data) {
            if (!data.s) {
                suggestionsContainer.classList.remove('active');
                return;
            }

            const suggestions = data.s;
            const html = suggestions.map((suggestion, index) => {
                const highlightedSuggestion = highlightText(suggestion, data.q);
                return `
                    <div class="suggestion-item" style="animation-delay: ${index * 24}ms">
                        <i class="fas fa-search"></i>
                        <span>${highlightedSuggestion}</span>
                    </div>
                `;
            }).join('');

            suggestionsContainer.innerHTML = html;
            suggestionsContainer.classList.add('active');
        }

        // 高亮匹配文本
        function highlightText(text, query) {
            if (!query) return text;
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span class="highlight">$1</span>');
        }

        // 搜索框和按钮高亮联动
        const searchInputBox = searchInput;
        const searchBtn = document.getElementById('searchBtn');
        let placeholderTimer = null;
        let placeholderPhraseIndex = 0;
        let placeholderText = '';
        let placeholderDeleting = true;

        function setFormFocus(focus) {
            if (focus) {
                searchForm.classList.add('focus');
                document.body.classList.add('search-focused');
            } else {
                searchForm.classList.remove('focus');
                document.body.classList.remove('search-focused');
            }
        }

        function getPlaceholderPhrases() {
            const engine = document.getElementById('searchLogo').innerText;
            return [
                `Use ${engine} Engine...`,
                '搜索点什么...',
                '今天想找什么？',
                '输入关键词开始探索'
            ];
        }

        function stopPlaceholderTypewriter() {
            clearTimeout(placeholderTimer);
            placeholderTimer = null;
        }

        function runPlaceholderTypewriter() {
            stopPlaceholderTypewriter();

            if (searchInputBox.value.trim()) {
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
                const nextTarget = phrases[placeholderPhraseIndex % phrases.length];
                placeholderText = nextTarget.slice(0, placeholderText.length + 1);
                if (placeholderText === nextTarget) {
                    placeholderDeleting = true;
                    placeholderTimer = setTimeout(runPlaceholderTypewriter, 5000);
                    searchInputBox.placeholder = placeholderText;
                    return;
                }
            }

            searchInputBox.placeholder = placeholderText;
            placeholderTimer = setTimeout(runPlaceholderTypewriter, placeholderDeleting ? 36 : 70);
        }

        function resetPlaceholderTypewriter() {
            const firstPhrase = getPlaceholderPhrases()[0];
            placeholderPhraseIndex = 0;
            placeholderText = firstPhrase;
            placeholderDeleting = true;
            searchInputBox.placeholder = firstPhrase;
            runPlaceholderTypewriter();
        }

        searchInputBox.addEventListener('focus', () => {
            setFormFocus(true);
            setBackgroundGathered(searchInputBox.value.trim().length > 0);
            stopPlaceholderTypewriter();
        });
        searchInputBox.addEventListener('blur', () => {
            setTimeout(() => {
                setFormFocus(document.activeElement === searchBtn);
                if (document.activeElement !== searchBtn) {
                    setBackgroundGathered(false);
                    runPlaceholderTypewriter();
                }
            }, 10);
            setTimeout(() => {
                if (!suggestionsContainer.classList.contains('active')) {
                    searchContainer.style.marginTop = '50px';
                }
            }, 200);
        });
        searchBtn.addEventListener('focus', () => {
            setFormFocus(true);
            stopPlaceholderTypewriter();
        });
        searchBtn.addEventListener('blur', () => setTimeout(() => {
            const keepFocus = document.activeElement === searchInputBox;
            setFormFocus(keepFocus);
            if (!keepFocus) {
                runPlaceholderTypewriter();
            }
        }, 10));

        // 日期显示功能
        function getWeekDayName(day) {
            const week = ['日', '一', '二', '三', '四', '五', '六'];
            return '星期' + week[day];
        }

        function getShortWeekName(day) {
            return ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][day];
        }

        function getWeekNumber(date) {
            const current = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
            const day = current.getUTCDay() || 7;
            current.setUTCDate(current.getUTCDate() + 4 - day);
            const yearStart = new Date(Date.UTC(current.getUTCFullYear(), 0, 1));
            return Math.ceil((((current - yearStart) / 86400000) + 1) / 7);
        }

        let dateFormatIndex = Number(localStorage.getItem('dateFormatIndex') || '0');

        function updateDateInfo() {
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth() + 1;
            const date = now.getDate();
            const week = getWeekDayName(now.getDay());
            const formats = [
                `${year}年${month}月${date}日 ${week}`,
                `${String(month).padStart(2, '0')}.${String(date).padStart(2, '0')} ${getShortWeekName(now.getDay())}`,
                `${year}年第${getWeekNumber(now)}周`,
                `${year}/${String(month).padStart(2, '0')}/${String(date).padStart(2, '0')}`
            ];
            document.getElementById('dateInfo').textContent = formats[dateFormatIndex % formats.length];
        }

        // 日期显隐控制
        function setDateInfoVisible(visible) {
            const dateInfo = document.getElementById('dateInfo');
            if (visible) {
                dateInfo.classList.remove('hide');
            } else {
                dateInfo.classList.add('hide');
            }
        }

        function toggleDateInfo() {
            const dateInfo = document.getElementById('dateInfo');
            const isVisible = !dateInfo.classList.contains('hide');
            setDateInfoVisible(!isVisible);
            localStorage.setItem('showDateInfo', !isVisible ? '1' : '0');
        }

        // 初始化日期显示
        updateDateInfo();
        setInterval(updateDateInfo, 1000 * 60); // 每分钟刷新一次
        const showDateInfo = localStorage.getItem('showDateInfo');
        setDateInfoVisible(showDateInfo === '1');
        document.getElementById('dateInfo').addEventListener('click', function () {
            dateFormatIndex = (dateFormatIndex + 1) % 4;
            localStorage.setItem('dateFormatIndex', String(dateFormatIndex));
            updateDateInfo();
        });

        searchInputBox.addEventListener('keydown', function (e) {
            const suggestions = document.querySelectorAll('.suggestion-item');
            if (suggestions.length > 0) {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    currentSuggestionIndex = (currentSuggestionIndex + 1) % suggestions.length;
                    updateSuggestionHighlight(suggestions);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    currentSuggestionIndex = (currentSuggestionIndex - 1 + suggestions.length) % suggestions.length;
                    updateSuggestionHighlight(suggestions);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    if (currentSuggestionIndex >= 0) {
                        suggestions[currentSuggestionIndex].click();
                    }
                }
            }
        });

        function updateSuggestionHighlight(suggestions) {
            suggestions.forEach((item, index) => {
                if (index === currentSuggestionIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        function toggleSearchEngine() {
            setDefaultSearchEngine(searchLogo.textContent === 'Baidu' ? 'Bing' : 'Baidu', true);
        }

        function toggleDefaultSearchEngine() {
            const currentEngine = localStorage.getItem('defaultSearchEngine') || 'Baidu';
            const newEngine = currentEngine === 'Baidu' ? 'Bing' : 'Baidu';
            localStorage.setItem('defaultSearchEngine', newEngine);
            setDefaultSearchEngine(newEngine, true);
        }

        function playEngineSwitchAnimation() {
            searchForm.classList.remove('engine-switch');
            void searchForm.offsetWidth;
            searchForm.classList.add('engine-switch');
            setTimeout(() => searchForm.classList.remove('engine-switch'), 480);
        }

        function setDefaultSearchEngine(engine, animate = false) {
            if (engine === 'Bing') {
                searchLogo.textContent = 'Bing';
                searchForm.action = 'https://www.bing.com/search';
                searchInput.name = 'q';
            } else {
                searchLogo.textContent = 'Baidu';
                searchForm.action = 'https://www.baidu.com/s';
                searchInput.name = 'wd';
            }
            resetPlaceholderTypewriter();
            if (animate) {
                playEngineSwitchAnimation();
            }
        }

        // 初始化默认搜索引擎
        const defaultEngine = localStorage.getItem('defaultSearchEngine') || 'Baidu';
        setDefaultSearchEngine(defaultEngine);
        resetPlaceholderTypewriter();

        searchForm.addEventListener('submit', function (event) {
            searchInput.value = searchInput.value.trim().replace(/\s+/g, ' ');
        });

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
            { label: '云', icon: 'fas fa-cloud' },
            { label: '链接', icon: 'fas fa-link' }
        ];

        let shortcutEditMode = false;
        let shortcutEditList = [];
        let selectedShortcutIndex = -1;
        let draggedShortcutIndex = -1;

        function normalizeShortcut(shortcut, fallback) {
            let url = (shortcut.url || fallback.url).trim();
            if (url && !/^(https?:|file:|mailto:|#)/i.test(url)) {
                url = `https://${url}`;
            }

            return {
                title: (shortcut.title || fallback.title).trim(),
                url,
                icon: (shortcut.icon || fallback.icon).trim()
            };
        }

        function getShortcuts() {
            try {
                const saved = JSON.parse(localStorage.getItem('shortcuts') || '[]');
                if (Array.isArray(saved) && saved.length) {
                    return saved.map((shortcut, index) => normalizeShortcut(shortcut || {}, DEFAULT_SHORTCUTS[index] || DEFAULT_SHORTCUTS[0]));
                }
            } catch (error) { }
            return DEFAULT_SHORTCUTS.map((shortcut) => ({ ...shortcut }));
        }

        function persistShortcuts() {
            localStorage.setItem('shortcuts', JSON.stringify(shortcutEditList));
        }

        function renderShortcuts() {
            const container = document.getElementById('shortcutButtons');
            if (!container) return;

            container.innerHTML = '';
            container.classList.remove('editing-out');
            container.classList.toggle('editing', shortcutEditMode);
            const shortcuts = shortcutEditMode ? shortcutEditList : getShortcuts();

            shortcuts.forEach((shortcut, index) => {
                const button = document.createElement('button');
                button.className = `nav-button${shortcutEditMode ? ' shortcut-editing' : ''}${index === selectedShortcutIndex ? ' selected' : ''}`;
                button.title = shortcut.title;
                button.type = 'button';
                button.dataset.index = String(index);
                const icon = document.createElement('i');
                icon.className = shortcut.icon;
                button.appendChild(icon);

                if (shortcutEditMode) {
                    button.draggable = true;
                    const deleteButton = document.createElement('span');
                    deleteButton.className = 'shortcut-delete';
                    deleteButton.innerHTML = '<i class="fas fa-times"></i>';
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
                        setTimeout(() => {
                            window.location.href = shortcut.url;
                        }, 360);
                    });
                }

                if (document.readyState !== 'loading') {
                    button.classList.add('ready');
                }

                container.appendChild(button);
            });

            if (shortcutEditMode) {
                const addButton = document.createElement('button');
                addButton.className = 'nav-button shortcut-editing shortcut-add-button ready';
                addButton.type = 'button';
                addButton.title = '添加入口';
                addButton.innerHTML = '<i class="fas fa-plus"></i>';
                addButton.addEventListener('click', addShortcut);
                container.appendChild(addButton);
            }
        }

        function openShortcutEditor() {
            document.getElementById('settingsMenu').classList.remove('active');
            shortcutEditMode = true;
            shortcutEditList = getShortcuts();
            selectedShortcutIndex = shortcutEditList.length ? 0 : -1;
            document.getElementById('shortcutInlineEditor').classList.remove('closing');
            renderShortcuts();
            renderShortcutEditor();
        }

        function exitShortcutEditMode() {
            const editor = document.getElementById('shortcutInlineEditor');
            const container = document.getElementById('shortcutButtons');
            closeIconBag();
            editor.classList.remove('active');
            editor.classList.add('closing');
            container.classList.add('editing-out');
            setTimeout(() => {
                shortcutEditMode = false;
                selectedShortcutIndex = -1;
                draggedShortcutIndex = -1;
                editor.classList.remove('closing');
                editor.setAttribute('aria-hidden', 'true');
                renderShortcuts();
            }, 220);
        }

        function selectShortcut(index) {
            selectedShortcutIndex = index;
            renderShortcuts();
            renderShortcutEditor();
        }

        function addShortcut() {
            shortcutEditList.push({ title: '新入口', url: 'https://', icon: 'fas fa-star' });
            selectedShortcutIndex = shortcutEditList.length - 1;
            persistShortcuts();
            renderShortcuts();
            renderShortcutEditor();
        }

        function deleteShortcut(index) {
            shortcutEditList.splice(index, 1);
            selectedShortcutIndex = Math.min(index, shortcutEditList.length - 1);
            persistShortcuts();
            renderShortcuts();
            renderShortcutEditor();
        }

        function renderShortcutEditor() {
            const editor = document.getElementById('shortcutInlineEditor');
            const shortcut = shortcutEditList[selectedShortcutIndex];
            if (!shortcut) {
                editor.classList.remove('active');
                editor.setAttribute('aria-hidden', 'true');
                return;
            }

            document.getElementById('shortcutEditorTitle').textContent = `入口 ${selectedShortcutIndex + 1}`;
            document.getElementById('shortcutTitleInput').value = shortcut.title;
            document.getElementById('shortcutUrlInput').value = shortcut.url;
            renderIconOptions(shortcut.icon);
            editor.classList.add('active');
            editor.classList.remove('closing');
            editor.setAttribute('aria-hidden', 'false');
        }

        function renderIconOptions(currentIcon) {
            const bag = document.getElementById('shortcutIconBag');
            const preview = document.getElementById('shortcutIconPreview');
            const label = document.getElementById('shortcutIconLabel');
            const hasCurrent = ICON_OPTIONS.some((item) => item.icon === currentIcon);
            const options = hasCurrent ? ICON_OPTIONS : [{ label: '当前图标', icon: currentIcon }, ...ICON_OPTIONS];
            bag.innerHTML = '';
            options.forEach((item) => {
                const option = document.createElement('button');
                option.type = 'button';
                option.className = `icon-option${item.icon === currentIcon ? ' selected' : ''}`;
                const icon = document.createElement('i');
                icon.className = item.icon;
                const text = document.createElement('span');
                text.textContent = item.label;
                option.appendChild(icon);
                option.appendChild(text);
                option.addEventListener('click', () => selectIconOption(item.icon));
                bag.appendChild(option);
            });
            preview.className = currentIcon;
            label.textContent = getIconLabel(currentIcon);
        }

        function getIconLabel(icon) {
            const option = ICON_OPTIONS.find((item) => item.icon === icon);
            return option ? option.label : '当前图标';
        }

        function toggleIconBag() {
            const bag = document.getElementById('shortcutIconBag');
            const willOpen = !bag.classList.contains('open');
            bag.classList.toggle('open', willOpen);
            bag.setAttribute('aria-hidden', willOpen ? 'false' : 'true');
        }

        function closeIconBag() {
            const bag = document.getElementById('shortcutIconBag');
            bag.classList.remove('open');
            bag.setAttribute('aria-hidden', 'true');
        }

        function selectIconOption(icon) {
            updateSelectedShortcut('icon', icon);
            renderShortcutEditor();
            closeIconBag();
        }

        function updateSelectedShortcut(field, value) {
            if (selectedShortcutIndex < 0) return;
            shortcutEditList[selectedShortcutIndex] = {
                ...shortcutEditList[selectedShortcutIndex],
                [field]: value
            };
            persistShortcuts();
            renderShortcuts();
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
            if (draggedShortcutIndex === targetIndex || draggedShortcutIndex < 0) return;

            const [dragged] = shortcutEditList.splice(draggedShortcutIndex, 1);
            shortcutEditList.splice(targetIndex, 0, dragged);
            selectedShortcutIndex = targetIndex;
            draggedShortcutIndex = -1;
            persistShortcuts();
            renderShortcuts();
            renderShortcutEditor();
        }

        function handleShortcutDragEnd(event) {
            event.currentTarget.classList.remove('dragging');
            draggedShortcutIndex = -1;
        }

        document.getElementById('shortcutTitleInput').addEventListener('input', function () {
            updateSelectedShortcut('title', this.value);
        });

        document.getElementById('shortcutUrlInput').addEventListener('input', function () {
            updateSelectedShortcut('url', this.value);
        });

        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && shortcutEditMode) {
                if (document.getElementById('shortcutIconBag').classList.contains('open')) {
                    closeIconBag();
                    return;
                }
                exitShortcutEditMode();
            }
        });

        document.addEventListener('click', function (event) {
            const picker = document.getElementById('shortcutIconPicker');
            if (shortcutEditMode && picker && !picker.contains(event.target)) {
                closeIconBag();
            }
        });

        renderShortcuts();

        function openBgColorPicker() {
            huePicker.focus();
        }

        function openTextColorPicker() {
            openBgColorPicker();
        }

        function clamp(value, min, max) {
            return Math.min(Math.max(value, min), max);
        }

        function hexToRgb(hex) {
            const normalized = hex.replace('#', '').trim();
            const value = normalized.length === 3
                ? normalized.split('').map((item) => item + item).join('')
                : normalized;

            return {
                r: parseInt(value.slice(0, 2), 16),
                g: parseInt(value.slice(2, 4), 16),
                b: parseInt(value.slice(4, 6), 16)
            };
        }

        function rgbToHex({ r, g, b }) {
            return `#${[r, g, b].map((value) => {
                return Math.round(value).toString(16).padStart(2, '0');
            }).join('')}`;
        }

        function rgbToHsl({ r, g, b }) {
            r /= 255;
            g /= 255;
            b /= 255;

            const max = Math.max(r, g, b);
            const min = Math.min(r, g, b);
            let h = 0;
            let s = 0;
            const l = (max + min) / 2;

            if (max !== min) {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r:
                        h = (g - b) / d + (g < b ? 6 : 0);
                        break;
                    case g:
                        h = (b - r) / d + 2;
                        break;
                    default:
                        h = (r - g) / d + 4;
                }
                h *= 60;
            }

            return { h, s: s * 100, l: l * 100 };
        }

        function hslToRgb(h, s, l) {
            s /= 100;
            l /= 100;
            const c = (1 - Math.abs(2 * l - 1)) * s;
            const x = c * (1 - Math.abs((h / 60) % 2 - 1));
            const m = l - c / 2;
            let r = 0;
            let g = 0;
            let b = 0;

            if (h < 60) [r, g, b] = [c, x, 0];
            else if (h < 120) [r, g, b] = [x, c, 0];
            else if (h < 180) [r, g, b] = [0, c, x];
            else if (h < 240) [r, g, b] = [0, x, c];
            else if (h < 300) [r, g, b] = [x, 0, c];
            else [r, g, b] = [c, 0, x];

            return {
                r: (r + m) * 255,
                g: (g + m) * 255,
                b: (b + m) * 255
            };
        }

        function getRelativeLuminance({ r, g, b }) {
            const values = [r, g, b].map((value) => {
                const channel = value / 255;
                return channel <= 0.03928
                    ? channel / 12.92
                    : Math.pow((channel + 0.055) / 1.055, 2.4);
            });

            return values[0] * 0.2126 + values[1] * 0.7152 + values[2] * 0.0722;
        }

        function getContrastRatio(colorA, colorB) {
            const light = Math.max(getRelativeLuminance(colorA), getRelativeLuminance(colorB));
            const dark = Math.min(getRelativeLuminance(colorA), getRelativeLuminance(colorB));
            return (light + 0.05) / (dark + 0.05);
        }

        function getReadableTextColor(bgRgb, preferredRgb) {
            if (getContrastRatio(bgRgb, preferredRgb) >= 4.5) {
                return rgbToHex(preferredRgb);
            }

            const darkText = { r: 35, g: 35, b: 35 };
            const lightText = { r: 248, g: 250, b: 252 };
            return getContrastRatio(bgRgb, darkText) > getContrastRatio(bgRgb, lightText)
                ? rgbToHex(darkText)
                : rgbToHex(lightText);
        }

        function setThemeVariable(name, value) {
            document.documentElement.style.setProperty(name, value);
        }

        function getCurrentLightness() {
            const storedLightness = localStorage.getItem('customLightness');
            const value = lightnessPicker ? lightnessPicker.value : storedLightness;
            return clamp(Number(value || storedLightness || 94), 8, 96);
        }

        function applyHuePalette(hue, persist = true, lightness = null) {
            const normalizedHue = ((Math.round(Number(hue)) % 360) + 360) % 360;
            const saturation = 52;
            const bgLightness = clamp(Number(lightness ?? getCurrentLightness()), 8, 96);
            const useDark = bgLightness < 45;

            const bgRgb = useDark
                ? hslToRgb(normalizedHue, 32, bgLightness)
                : hslToRgb(normalizedHue, 36, bgLightness);
            const surfaceRgb = useDark
                ? hslToRgb(normalizedHue, 28, clamp(bgLightness + 8, 14, 34))
                : hslToRgb(normalizedHue, 26, clamp(bgLightness + 5, 86, 99));
            const borderRgb = useDark
                ? hslToRgb(normalizedHue, 24, clamp(bgLightness + 18, 24, 48))
                : hslToRgb(normalizedHue, 22, clamp(bgLightness - 16, 58, 84));
            const primaryRgb = hslToRgb(
                normalizedHue,
                clamp(saturation + 10, 48, 78),
                useDark ? clamp(bgLightness + 44, 54, 72) : clamp(bgLightness - 48, 34, 52)
            );
            const preferredTextRgb = useDark
                ? hslToRgb(normalizedHue, 18, 94)
                : hslToRgb(normalizedHue, 24, 18);

            setThemeVariable('--bg-color', rgbToHex(bgRgb));
            setThemeVariable('--container-bg', rgbToHex(surfaceRgb));
            setThemeVariable('--surface-rgb', `${Math.round(surfaceRgb.r)}, ${Math.round(surfaceRgb.g)}, ${Math.round(surfaceRgb.b)}`);
            setThemeVariable('--text-color', getReadableTextColor(bgRgb, preferredTextRgb));
            setThemeVariable('--border-color', rgbToHex(borderRgb));
            setThemeVariable('--primary-color', rgbToHex(primaryRgb));
            setThemeVariable('--hover-color', rgbToHex(primaryRgb));
            setThemeVariable('--shadow-color', useDark ? 'rgba(0, 0, 0, 0.35)' : 'rgba(0, 0, 0, 0.12)');
            document.documentElement.setAttribute('data-theme', useDark ? 'dark' : 'light');

            if (persist) {
                localStorage.setItem('customHue', String(normalizedHue));
                localStorage.setItem('customLightness', String(Math.round(bgLightness)));
                localStorage.removeItem('customBgColor');
                localStorage.removeItem('customTextColor');
                localStorage.setItem('theme', useDark ? 'dark' : 'light');
            }

            huePicker.value = String(normalizedHue);
            lightnessPicker.value = String(Math.round(bgLightness));
            lightnessPicker.style.background = `linear-gradient(90deg, hsl(${normalizedHue}, 32%, 8%), hsl(${normalizedHue}, 36%, 52%), hsl(${normalizedHue}, 36%, 96%))`;
            setLogoColorByCustom();
        }

        function applyAutoPalette(seedColor, persist = true, lightness = null) {
            const seedRgb = hexToRgb(seedColor);
            const seedHsl = rgbToHsl(seedRgb);
            const hue = Math.round(seedHsl.h);
            const migratedLightness = lightness ?? (seedHsl.l < 42 ? 18 : 94);
            applyHuePalette(hue, persist, migratedLightness);
        }

        function setLogoColorByCustom() {
            const customBg = localStorage.getItem('customHue') || localStorage.getItem('customBgColor');
            const customImg = localStorage.getItem('customBgImage');
            if (customBg || customImg) {
                // 跟随搜索框底色
                document.documentElement.style.setProperty('--logo-color', getComputedStyle(document.documentElement).getPropertyValue('--container-bg'));
            } else {
                // 跟随主题色
                document.documentElement.style.setProperty('--logo-color', getComputedStyle(document.documentElement).getPropertyValue('--text-color'));
            }
        }

        huePicker.addEventListener('input', function () {
            applyHuePalette(this.value);
        });

        lightnessPicker.addEventListener('input', function () {
            applyHuePalette(huePicker.value, true, this.value);
        });

        function resetColors() {
            document.documentElement.style.setProperty('--bg-color', '');
            document.documentElement.style.setProperty('--container-bg', '');
            document.documentElement.style.setProperty('--surface-rgb', '');
            document.documentElement.style.setProperty('--text-color', '');
            document.documentElement.style.setProperty('--border-color', '');
            document.documentElement.style.setProperty('--primary-color', '');
            document.documentElement.style.setProperty('--hover-color', '');
            document.documentElement.style.setProperty('--shadow-color', '');
            localStorage.removeItem('customHue');
            localStorage.removeItem('customLightness');
            localStorage.removeItem('customBgColor');
            localStorage.removeItem('customTextColor');
            localStorage.removeItem('customBgImage');
            document.body.style.backgroundImage = '';
            huePicker.value = '214';
            lightnessPicker.value = '94';
            lightnessPicker.style.background = '';
            updateLogoColor();
            // 恢复主题为默认浅色
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setLogoColorByCustom();
        }

        // 页面加载时调用一次
        window.addEventListener('DOMContentLoaded', function () {
            const hue = localStorage.getItem('customHue');
            const lightness = localStorage.getItem('customLightness');
            const bg = localStorage.getItem('customBgColor');
            if (hue !== null) {
                applyHuePalette(hue, false, lightness);
            } else if (bg) {
                applyAutoPalette(bg, false);
                localStorage.setItem('customHue', huePicker.value);
                localStorage.setItem('customLightness', lightnessPicker.value);
                localStorage.removeItem('customBgColor');
            }
            localStorage.removeItem('customTextColor');
            const navButtons = Array.from(document.querySelectorAll('.top-left-buttons .nav-button'));
            navButtons.forEach((btn) => {
                btn.classList.add('animated');
                btn.addEventListener('animationend', function () {
                    btn.style.opacity = '1';
                    document.body.style.overflow = 'auto'; /* 动画结束后恢复滚动条 */
                }, { once: true });
            });
            // 设置按钮动画
            const settingsBtn = document.querySelector('.settings-button');
            settingsBtn.classList.add('animated');
            settingsBtn.addEventListener('animationend', function () {
                settingsBtn.style.opacity = '1';
            }, { once: true });
            setLogoColorByCustom();
            const bgImg = localStorage.getItem('customBgImage');
            if (bgImg) {
                document.body.style.backgroundImage = `url('${bgImg}')`;
                document.body.style.backgroundSize = 'cover';
                document.body.style.backgroundPosition = 'center';
            } else {
                document.body.style.backgroundImage = '';
            }
            const searchIcon = document.querySelector('.search-button .fa-search');
            if (searchIcon) {
                searchIcon.classList.add('icon-zoom-anim');
                setTimeout(() => {
                    searchIcon.classList.remove('icon-zoom-anim');
                }, 0);
            }
            const bgBalls = document.querySelector('.bg-blur-balls');
            if (bgBalls && bgBalls.children.length === 0) {
                // 根据屏幕宽度动态生成光斑数量
                let num = 3;
                const w = window.innerWidth;
                if (w >= 1400) num = 8;
                else if (w >= 800) num = 5;
                let ballsHtml = '';
                for (let i = 0; i < num; i++) {
                    ballsHtml += `<span class="ball ball${i + 1}"></span>`;
                }
                bgBalls.innerHTML = ballsHtml;
            }
            // 随机移动动画
            function animateBall(ball, baseLeft, baseTop, rangeX, rangeY, duration, size, color) {
                ball.style.width = size + 'px';
                ball.style.height = size + 'px';
                ball.style.background = color;
                function move() {
                    const gathered = bgBalls.classList.contains('gathered');
                    const focusPoint = gathered ? getSearchFocusPoint() : null;
                    const x = gathered
                        ? focusPoint.left + (Math.random() - 0.5) * 18
                        : baseLeft + (Math.random() - 0.5) * rangeX;
                    const y = gathered
                        ? focusPoint.top + (Math.random() - 0.5) * 16
                        : baseTop + (Math.random() - 0.5) * rangeY;
                    ball.style.transition = `left ${duration}ms linear, top ${duration}ms linear`;
                    ball.style.left = x + 'vw';
                    ball.style.top = y + 'vh';
                    setTimeout(move, duration);
                }
                move();
            }
            // 生成参数
            const colorList = ['#fffbe6', '#e6f7ff', '#ffe6fa', '#e6ffe9', '#f0e6ff', '#e6f0ff', '#fff0e6', '#e6fff7'];
            const balls = Array.from(bgBalls.children).map((el, i) => {
                const baseLeft = 10 + Math.random() * 80; // 10vw~90vw
                const baseTop = 10 + Math.random() * 70;  // 10vh~80vh
                const rangeX = 20 + Math.random() * 30;   // 20~50vw
                const rangeY = 30 + Math.random() * 30;   // 30~60vh
                const duration = 9000 + Math.random() * 6000; // 9~15s
                const size = 220 + Math.random() * 280;   // 220~500px
                const color = colorList[i % colorList.length];
                return { el, baseLeft, baseTop, rangeX, rangeY, duration, size, color };
            });
            balls.forEach(b => {
                if (b.el) animateBall(b.el, b.baseLeft, b.baseTop, b.rangeX, b.rangeY, b.duration, b.size, b.color);
            });
            updateBlurBallsHeight();
            window.addEventListener('resize', updateBlurBallsHeight);
            window.addEventListener('scroll', updateBlurBallsHeight);
            updateLogoColor();
            initSearchTilt();
        });

        function openBgImagePicker() {
            document.getElementById('bgImagePicker').click();
        }
        document.getElementById('bgImagePicker').addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = function (evt) {
                const img = new window.Image();
                img.onload = function () {
                    // 计算目标尺寸
                    let maxW = 1920, maxH = 1080;
                    let w = img.width, h = img.height;
                    if (w > maxW || h > maxH) {
                        const ratio = Math.min(maxW / w, maxH / h);
                        w = Math.round(w * ratio);
                        h = Math.round(h * ratio);
                    }
                    // 画布压缩
                    const canvas = document.createElement('canvas');
                    canvas.width = w;
                    canvas.height = h;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, w, h);
                    // 压缩为jpeg，质量0.8
                    const dataUrl = canvas.toDataURL('image/jpeg', 0.8);
                    document.body.style.backgroundImage = `url('${dataUrl}')`;
                    document.body.style.backgroundSize = 'cover';
                    document.body.style.backgroundPosition = 'center';
                    localStorage.setItem('customBgImage', dataUrl);
                    // 自动判断图片明暗
                    try {
                        const imageData = ctx.getImageData(0, 0, w, h).data;
                        let r = 0, g = 0, b = 0, count = 0;
                        for (let i = 0; i < imageData.length; i += 4 * 100) { // 每100像素采样一次，加快速度
                            r += imageData[i];
                            g += imageData[i + 1];
                            b += imageData[i + 2];
                            count++;
                        }
                        const avg = (r + g + b) / (3 * count);
                        if (avg < 128) {
                            document.documentElement.setAttribute('data-theme', 'dark');
                            localStorage.setItem('theme', 'dark');
                        } else {
                            document.documentElement.setAttribute('data-theme', 'light');
                            localStorage.setItem('theme', 'light');
                        }
                        setLogoColorByCustom();
                    } catch (e) { }
                };
                img.src = evt.target.result;
            };
            reader.readAsDataURL(file);
        });

        function updateBlurBallsHeight() {
            const bgBalls = document.querySelector('.bg-blur-balls');
            if (bgBalls) {
                bgBalls.style.height = Math.max(document.body.scrollHeight, window.innerHeight) + 'px';
            }
        }

        function getSearchFocusPoint() {
            const rect = searchForm.getBoundingClientRect();
            return {
                left: ((rect.left + rect.width / 2) / window.innerWidth) * 100,
                top: ((rect.top + rect.height / 2) / window.innerHeight) * 100
            };
        }

        function setBackgroundGathered(active) {
            const bgBalls = document.querySelector('.bg-blur-balls');
            if (!bgBalls) return;

            bgBalls.classList.toggle('gathered', active);
            if (!active) return;

            const focusPoint = getSearchFocusPoint();
            Array.from(bgBalls.children).forEach((ball, index) => {
                const offsetX = ((index % 3) - 1) * 6;
                const offsetY = (Math.floor(index / 3) - 1) * 5;
                ball.style.transition = 'left 900ms ease, top 900ms ease, opacity 300ms ease, filter 300ms ease';
                ball.style.left = `${focusPoint.left + offsetX}vw`;
                ball.style.top = `${focusPoint.top + offsetY}vh`;
            });
        }

        function updateLogoColor() {
            if (searchLogo) {
                searchLogo.style.color = `var(--logo-color, var(--text-color))`;
            }
        }

        function initSearchTilt() {
            let tiltFrame = null;
            let lastMouseEvent = null;

            function updateSearchTilt() {
                if (!lastMouseEvent) return;

                const rect = searchForm.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = lastMouseEvent.clientX - centerX;
                const distanceY = lastMouseEvent.clientY - centerY;
                const normalizedX = clamp(distanceX / (window.innerWidth / 2), -1, 1);
                const normalizedY = clamp(distanceY / (window.innerHeight / 2), -1, 1);
                const rotateX = clamp(-normalizedY * 8, -8, 8);
                const rotateY = clamp(normalizedX * 12, -12, 12);

                searchForm.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                tiltFrame = null;
            }

            window.addEventListener('mousemove', (e) => {
                lastMouseEvent = e;
                if (!tiltFrame) {
                    tiltFrame = requestAnimationFrame(updateSearchTilt);
                }
            });

            // 监听鼠标离开窗口事件
            document.addEventListener('mouseleave', (e) => {
                // 检查鼠标是否真的离开了页面范围
                if (e.clientY <= 0 || e.clientY >= window.innerHeight ||
                    e.clientX <= 0 || e.clientX >= window.innerWidth) {
                    setTimeout(() => {
                        searchForm.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    }, 10);
                }
            });
        }
