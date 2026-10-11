
        let judgeCount = 5;



        function loadSharedData() {
            const eventTitle = localStorage.getItem('event_title');
            const eventSubtitle = localStorage.getItem('event_subtitle');

            if (eventTitle) document.getElementById('kataEventTitle').value = eventTitle;
            if (eventSubtitle) document.getElementById('kataEventSubtitle').value = eventSubtitle;
        }

        function saveSharedData() {
            localStorage.setItem('event_title', document.getElementById('kataEventTitle').value);
            localStorage.setItem('event_subtitle', document.getElementById('kataEventSubtitle').value);
        }





        function adjustFinalScoreSize() {
            const container = document.getElementById('finalScoreContainer');
            const scoreElement = document.getElementById('finalScore');

            if (!container || !scoreElement) return;

            const containerWidth = container.clientWidth - 40;
            const containerHeight = container.clientHeight - 40;

            let fontSize = Math.min(containerWidth, containerHeight);
            scoreElement.style.fontSize = fontSize + 'px';

            while ((scoreElement.scrollWidth > containerWidth || scoreElement.scrollHeight > containerHeight) && fontSize > 10) {
                fontSize -= 5;
                scoreElement.style.fontSize = fontSize + 'px';
            }
        }

        function adjustElementSizes() {
            const eventTitle = document.getElementById('kataEventTitle');
            if (eventTitle) {
                const headerHeight = document.querySelector('.kata-header').clientHeight;
                eventTitle.style.fontSize = Math.max(headerHeight * 0.35, 16) + 'px';
            }

            const eventSubtitle = document.getElementById('kataEventSubtitle');
            if (eventSubtitle) {
                const headerHeight = document.querySelector('.kata-header').clientHeight;
                eventSubtitle.style.fontSize = Math.max(headerHeight * 0.2, 12) + 'px';
            }

            const competitorName = document.getElementById('competitorName');
            if (competitorName) {
                const contentWidth = document.querySelector('.kata-content').clientWidth;
                competitorName.style.fontSize = Math.max(contentWidth * 0.045, 20) + 'px';
            }

            const judgeInputs = document.querySelectorAll('.judge-input');
            judgeInputs.forEach(input => {
                const containerWidth = input.parentElement.clientWidth;
                const containerHeight = input.parentElement.clientHeight;
                const baseSize = Math.min(containerWidth, containerHeight);
                input.style.fontSize = Math.max(baseSize * 0.5, 32) + 'px';
            });

            const discardIcons = document.querySelectorAll('.judge-score.discarded::after, .judge-input.discarded::after');
            const iconSize = Math.max(window.innerWidth * 0.015, 14);
            document.documentElement.style.setProperty('--discard-icon-size', iconSize + 'px');

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

            const tooltipSize = Math.max(window.innerWidth * 0.008, 10);
            document.documentElement.style.setProperty('--tooltip-font-size', tooltipSize + 'px');

            adjustFinalScoreSize();
        }

        document.addEventListener('site:ready', function () {
            const sessionData = checkAuth();
            if (!sessionData) return;

            setupUserLogo(sessionData);
            loadSharedData();
            generateJudgeInputs();
            forceZeroFinalScore();
            setupEventListeners();
            updateSpeedDial(sessionData);

            setTimeout(adjustElementSizes, 100);
            window.addEventListener('resize', adjustElementSizes);

            document.getElementById('kataEventTitle').addEventListener('change', saveSharedData);
            document.getElementById('kataEventSubtitle').addEventListener('change', saveSharedData);
        });

        function setupEventListeners() {
            document.getElementById('addJudge').addEventListener('click', () => changeJudgeCount(1));
            document.getElementById('removeJudge').addEventListener('click', () => changeJudgeCount(-1));
            document.getElementById('resetScores').addEventListener('click', resetKataScores);

            document.getElementById('addJudgeTaskbar').addEventListener('click', () => changeJudgeCount(1));
            document.getElementById('removeJudgeTaskbar').addEventListener('click', () => changeJudgeCount(-1));
            document.getElementById('resetScoresTaskbar').addEventListener('click', resetKataScores);
        }

        function updateSpeedDial(sessionData) {
            const actionsContainer = document.getElementById('speedDialActionsKata');
            actionsContainer.innerHTML = '';

            const actions = [
                { icon: 'fas fa-user-plus', text: 'ADICIONAR', class: 'action-judge-add', tooltip: 'Adicionar Juiz', action: () => changeJudgeCount(1) },
                { icon: 'fas fa-user-minus', text: 'REMOVER', class: 'action-judge-remove', tooltip: 'Remover Juiz', action: () => changeJudgeCount(-1) },
                { icon: 'fas fa-undo', text: 'LIMPAR', class: 'action-reset', tooltip: 'Reset Notas', action: resetKataScores },
                { icon: 'fas fa-sign-out-alt', text: 'SAIR', class: 'action-logout', tooltip: 'Fazer Logout', action: logout }
            ];

            if (sessionData.permissions.includes('kumite')) {
                actions.unshift({
                    icon: 'fas fa-hand-rock',
                    text: 'KUMITE',
                    class: 'action-mode',
                    tooltip: 'Mudar para Kumite',
                    action: () => {
                        // Marcar navegação interna antes de trocar
                        if (window.SessionManager) {
                            window.SessionManager.markNavigating();
                        }
                        window.location.href = 'PainelKumite.html';
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
        }

        function generateJudgeInputs() {
            const container = document.getElementById('judgeScores');
            container.innerHTML = '';

            for (let i = 1; i <= judgeCount; i++) {
                const judgeDiv = document.createElement('div');
                judgeDiv.className = 'judge-score';
                const input = document.createElement('input');
                input.type = 'number'; input.className = 'judge-input'; input.id = `judge${i}`;
                input.min = '5'; input.max = '8'; input.step = '0.05'; input.value = '5.00';
                input.setAttribute('aria-label', `Nota do juiz ${i}`);
                input.addEventListener('focus', () => clearDefaultValue(input));
                input.addEventListener('blur', () => formatAndCalculate(input));
                input.addEventListener('change', () => formatImmediately(input));
                input.addEventListener('input', calculateFinalScore);
                judgeDiv.append(input);
                container.appendChild(judgeDiv);
            }
            forceZeroFinalScore();
            setTimeout(adjustElementSizes, 100);
        }

        function formatImmediately(input) {
            let value = parseFloat(input.value);
            if (!isNaN(value)) {
                input.value = value.toFixed(2);
            }
            calculateFinalScore();
        }

        function clearDefaultValue(input) {
            if (input.value === '5.00') {
                input.value = '';
            }
        }

        function clearCompetitorName(input) {
            if (input.value === 'COMPETIDOR KATA') {
                input.value = '';
            }
        }

        function restoreCompetitorName(input) {
            if (input.value.trim() === '') {
                input.value = 'COMPETIDOR KATA';
            }
        }

        function formatAndCalculate(input) {
            formatJudgeInput(input);
            calculateFinalScore();
        }

        function formatJudgeInput(input) {
            let value = parseFloat(input.value);

            if (isNaN(value) || input.value.trim() === '') {
                value = 5.00;
            } else if (value < 5) {
                value = 5.00;
            } else if (value > 8) {
                value = 8.00;
            }

            input.value = value.toFixed(2);
        }

        function changeJudgeCount(delta) {
            let newCount = delta > 0 ? (judgeCount === 3 ? 5 : 5) : (judgeCount === 5 ? 3 : 3);
            if (newCount !== judgeCount) {
                judgeCount = newCount;
                generateJudgeInputs();
                forceZeroFinalScore();
            }
        }

        function calculateFinalScore() {
            const scores = [];
            for (let i = 1; i <= judgeCount; i++) {
                const input = document.getElementById(`judge${i}`);
                const container = input.parentElement;
                const score = parseFloat(input.value) || 0;
                scores.push({ value: score, element: input, container: container });
            }

            scores.forEach(score => {
                score.element.classList.remove('discarded');
                score.container.classList.remove('discarded');
            });
            scores.sort((a, b) => a.value - b.value);

            if (judgeCount >= 5) {
                scores[0].element.classList.add('discarded');
                scores[0].container.classList.add('discarded');
                scores[scores.length - 1].element.classList.add('discarded');
                scores[scores.length - 1].container.classList.add('discarded');
                const validScores = scores.slice(1, -1);
                const sum = validScores.reduce((acc, score) => acc + score.value, 0);
                document.getElementById('finalScore').textContent = sum.toFixed(2).replace('.', ',');
            } else {
                const sum = scores.reduce((acc, score) => acc + score.value, 0);
                document.getElementById('finalScore').textContent = sum.toFixed(2).replace('.', ',');
            }

            setTimeout(adjustElementSizes, 50);
        }

        function resetKataScores() {
            for (let i = 1; i <= judgeCount; i++) {
                const input = document.getElementById(`judge${i}`);
                if (input) {
                    input.value = '5.00';
                    input.classList.remove('discarded');
                    input.parentElement.classList.remove('discarded');
                }
            }

            document.getElementById('competitorName').value = 'COMPETIDOR KATA';

            forceZeroFinalScore();
        }

        function forceZeroFinalScore() {
            const finalScoreElement = document.getElementById('finalScore');
            if (finalScoreElement) {
                finalScoreElement.textContent = '0,00';
                setTimeout(adjustElementSizes, 50);
            }
        }
