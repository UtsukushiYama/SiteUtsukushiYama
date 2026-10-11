
        let timerInterval;
        let isTimerRunning = false;
        let currentTime = 120;
        let hasStarted = false;



        function loadSharedData() {
            const eventTitle = window.PP.store.get('event_title');
            const eventSubtitle = window.PP.store.get('event_subtitle');

            if (eventTitle) document.getElementById('eventTitleDisplay').value = eventTitle;
            if (eventSubtitle) document.getElementById('eventSubtitleDisplay').value = eventSubtitle;
        }

        function saveSharedData() {
            window.PP.store.set('event_title', document.getElementById('eventTitleDisplay').value);
            window.PP.store.set('event_subtitle', document.getElementById('eventSubtitleDisplay').value);
        }





        function updateStartButtonText() {
            const btnText = document.getElementById('startBtnText');
            const speedDialAction = document.querySelector('.action-timer .text');

            if (hasStarted && !isTimerRunning) {
                btnText.textContent = 'CONTINUAR';
                if (speedDialAction) speedDialAction.textContent = 'CONTINUAR';
            } else {
                btnText.textContent = 'INICIAR';
                if (speedDialAction) speedDialAction.textContent = 'INICIAR';
            }
        }

        function adjustElementSizes() {
            const eventTitle = document.getElementById('eventTitleDisplay');
            if (eventTitle) {
                const headerHeight = document.querySelector('.event-header').clientHeight;
                eventTitle.style.fontSize = Math.max(headerHeight * 0.35, 16) + 'px';
            }

            const eventSubtitle = document.getElementById('eventSubtitleDisplay');
            if (eventSubtitle) {
                const headerHeight = document.querySelector('.event-header').clientHeight;
                eventSubtitle.style.fontSize = Math.max(headerHeight * 0.2, 12) + 'px';
            }

            const shiroName = document.getElementById('shiroName');
            const akaName = document.getElementById('akaName');
            if (shiroName && akaName) {
                const sideWidth = document.querySelector('.shiro-side').clientWidth;
                const fontSize = Math.max(sideWidth * 0.08, 24);
                shiroName.style.fontSize = fontSize + 'px';
                akaName.style.fontSize = fontSize + 'px';
            }

            const scoreLabels = document.querySelectorAll('.score-label');
            scoreLabels.forEach(label => {
                const scoreBox = label.closest('.score-box');
                if (scoreBox) {
                    const boxWidth = scoreBox.clientWidth;
                    label.style.fontSize = Math.max(boxWidth * 0.08, 14) + 'px';
                }
            });

            const scoreInputs = document.querySelectorAll('.score-input');
            scoreInputs.forEach(input => {
                const scoreBox = input.closest('.score-box');
                if (scoreBox) {
                    const boxHeight = scoreBox.clientHeight;
                    const boxWidth = scoreBox.clientWidth;
                    input.style.fontSize = Math.max(boxHeight * 0.7, 60) + 'px';
                    input.style.width = Math.max(boxWidth * 0.35, 120) + 'px';
                }
            });

            const scoreBtns = document.querySelectorAll('.score-btn');
            scoreBtns.forEach(btn => {
                const scoreBox = btn.closest('.score-box');
                if (scoreBox) {
                    const boxHeight = scoreBox.clientHeight;
                    const btnSize = Math.max(boxHeight * 0.15, 20);
                    btn.style.width = btnSize + 'px';
                    btn.style.height = btnSize + 'px';
                    btn.style.fontSize = btnSize + 'px';
                }
            });

            const kotoLabel = document.querySelector('.koto-label');
            const kotoInput = document.getElementById('kotoNumber');
            if (kotoLabel && kotoInput) {
                const kotoDisplay = document.querySelector('.koto-display');
                const displayWidth = kotoDisplay.clientWidth;
                const fontSize = Math.max(displayWidth * 0.08, 20);
                kotoLabel.style.fontSize = fontSize + 'px';
                kotoInput.style.fontSize = fontSize + 'px';
                kotoInput.style.width = Math.max(fontSize * 1.5, 40) + 'px';
            }

            const kotoBtns = document.querySelectorAll('.koto-btn');
            kotoBtns.forEach(btn => {
                const kotoDisplay = document.querySelector('.koto-display');
                const displayHeight = kotoDisplay.clientHeight;
                const btnSize = Math.max(displayHeight * 0.3, 16);
                btn.style.width = btnSize + 'px';
                btn.style.height = btnSize + 'px';
                btn.style.fontSize = btnSize + 'px';
            });

            const timerValue = document.getElementById('timerDisplay');
            if (timerValue) {
                const timerBox = document.getElementById('timerWrapper');
                const boxWidth = timerBox.clientWidth;
                timerValue.style.fontSize = Math.max(boxWidth * 0.35, 60) + 'px';
            }

            const timerAdjustBtns = document.querySelectorAll('.timer-adjust-btn');
            timerAdjustBtns.forEach(btn => {
                const controlsBar = document.querySelector('.timer-controls-bar');
                const barHeight = controlsBar.clientHeight;
                btn.style.fontSize = Math.max(barHeight * 0.4, 10) + 'px';
            });

            const taskbarBtns = document.querySelectorAll('.taskbar-btn');
            taskbarBtns.forEach(btn => {
                const taskbarHeight = document.querySelector('.taskbar').clientHeight;
                btn.style.fontSize = Math.max(taskbarHeight * 0.25, 12) + 'px';
            });

            const speedDialActions = document.querySelectorAll('.speed-dial-action');
            speedDialActions.forEach(action => {
                const actionSize = action.clientWidth;
                const icon = action.querySelector('.icon');
                const text = action.querySelector('.text');
                if (icon) icon.style.fontSize = Math.max(actionSize * 0.35, 14) + 'px';
                if (text) text.style.fontSize = Math.max(actionSize * 0.15, 8) + 'px';
            });
        }

        document.addEventListener('placar:ready', function () {
            const sessionData = checkAuth();
            if (!sessionData) return;

            setupUserLogo(sessionData);
            loadSharedData();
            updateTimerDisplay();
            setupEventListeners();
            updateSpeedDial(sessionData);

            setTimeout(adjustElementSizes, 100);
            window.addEventListener('resize', adjustElementSizes);

            document.getElementById('eventTitleDisplay').addEventListener('change', saveSharedData);
            document.getElementById('eventSubtitleDisplay').addEventListener('change', saveSharedData);
        });

        function setupEventListeners() {
            document.getElementById('startTimer').addEventListener('click', startTimer);
            document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
            document.getElementById('resetTimer').addEventListener('click', resetTimer);

            const slider = document.getElementById('timerSlider');
            slider.addEventListener('input', function () {
                if (!isTimerRunning) {
                    currentTime = parseInt(this.value);
                    updateTimerDisplay();
                }
            });

            document.addEventListener('keydown', function (e) {
                if (e.code === 'Space') {
                    const activeElement = document.activeElement;
                    const isTextInput = activeElement && (activeElement.type === 'text' || activeElement.type === 'number');

                    if (isTextInput) return;

                    e.preventDefault();
                    if (isTimerRunning) {
                        pauseTimer();
                    } else {
                        startTimer();
                    }
                }
            });
        }

        function clearDefaultValue(input, defaultValue) {
            if (input.value === defaultValue) {
                input.value = '';
            }
        }

        function restoreDefaultValue(input, defaultValue) {
            if (input.value.trim() === '') {
                input.value = defaultValue;
            }
        }

        function adjustTime(seconds) {
            if (!isTimerRunning) {
                currentTime = Math.max(0, Math.min(300, currentTime + seconds));
                updateTimerDisplay();
                document.getElementById('timerSlider').value = currentTime;
            }
        }

        function adjustKoto(value) {
            const kotoInput = document.getElementById('kotoNumber');
            let currentKoto = parseInt(kotoInput.value) || 1;
            currentKoto = Math.max(1, Math.min(99, currentKoto + value));
            kotoInput.value = currentKoto;
        }

        function updateSpeedDial(sessionData) {
            const actionsContainer = document.getElementById('speedDialActions');
            actionsContainer.innerHTML = '';

            const actions = [
                { icon: 'fas fa-play', text: 'INICIAR', class: 'action-timer', tooltip: 'Iniciar Timer', action: startTimer },
                { icon: 'fas fa-pause', text: 'PAUSAR', class: 'action-pause', tooltip: 'Pausar Timer', action: pauseTimer },
                { icon: 'fas fa-undo', text: 'LIMPAR', class: 'action-reset', tooltip: 'Resetar Tudo', action: resetTimer },
                { icon: 'fas fa-sign-out-alt', text: 'SAIR', class: 'action-logout', tooltip: 'Fazer Logout', action: logout }
            ];

            if (sessionData.permissions.includes('kata')) {
                actions.unshift({
                    icon: 'fas fa-fist-raised',
                    text: 'KATA',
                    class: 'action-mode',
                    tooltip: 'Mudar para Kata',
                    action: () => {
                        window.location.href = 'PainelKata.html';
                    }
                });
            }

            actions.forEach(actionConfig => {
                const button = document.createElement('button');
                button.className = `speed-dial-action ${actionConfig.class}`;
                button.setAttribute('data-tooltip', actionConfig.tooltip);
                button.innerHTML = `<i class="${actionConfig.icon} icon"></i><span class="text">${actionConfig.text}</span>`;
                button.addEventListener('click', actionConfig.action);
                actionsContainer.appendChild(button);
            });

            setTimeout(adjustElementSizes, 100);
        }

        function startTimer() {
            if (!isTimerRunning) {
                isTimerRunning = true;
                hasStarted = true;
                updateStartButtonText();

                const timerWrapper = document.getElementById('timerWrapper');
                timerWrapper.classList.remove('paused', 'finished');

                timerInterval = setInterval(() => {
                    if (currentTime > 0) {
                        currentTime--;
                        updateTimerDisplay();

                        if (currentTime <= 10 && currentTime > 0) {
                            document.getElementById('timerWrapper').classList.add('warning');
                        }

                        if (currentTime === 0) {
                            const wrapper = document.getElementById('timerWrapper');
                            wrapper.classList.remove('warning', 'paused');
                            wrapper.classList.add('finished');
                            pauseTimer();
                        }
                    }
                }, 1000);
            }
        }

        function pauseTimer() {
            isTimerRunning = false;
            clearInterval(timerInterval);
            updateStartButtonText();

            const timerWrapper = document.getElementById('timerWrapper');
            if (currentTime > 0) {
                timerWrapper.classList.add('paused');
            }
        }

        function resetTimer() {
            pauseTimer();
            currentTime = 120;
            hasStarted = false;
            updateStartButtonText();
            updateTimerDisplay();
            document.getElementById('timerSlider').value = currentTime;
            const wrapper = document.getElementById('timerWrapper');
            wrapper.classList.remove('warning', 'finished', 'paused');
            resetKumiteScores();
        }

        function resetKumiteScores() {
            document.getElementById('shiroWazaari').value = '0';
            document.getElementById('shiroChui').value = '0';
            document.getElementById('shiroGentei').value = '0';
            document.getElementById('shiroJogai').value = '0';
            document.getElementById('akaWazaari').value = '0';
            document.getElementById('akaChui').value = '0';
            document.getElementById('akaGentei').value = '0';
            document.getElementById('akaJogai').value = '0';

            document.getElementById('shiroName').value = 'SHIRO';
            document.getElementById('akaName').value = 'AKA';
        }

        function updateTimerDisplay() {
            const minutes = Math.floor(currentTime / 60);
            const seconds = currentTime % 60;
            const display = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            document.getElementById('timerDisplay').textContent = display;
            document.getElementById('timerSlider').value = currentTime;
        }

        function incrementScore(inputId) {
            const input = document.getElementById(inputId);
            let value = parseInt(input.value) || 0;
            if (value < 10) {
                input.value = value + 1;
            }
        }

        function decrementScore(inputId) {
            const input = document.getElementById(inputId);
            let value = parseInt(input.value) || 0;
            if (value > 0) {
                input.value = value - 1;
            }
        }
