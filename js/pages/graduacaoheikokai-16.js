
    document.addEventListener('site:ready', function () {
      // Selecionar todos os botões de navegação
      const navButtons = document.querySelectorAll('[data-bs-toggle="pill"]');

      navButtons.forEach(button => {
        button.addEventListener('click', function () {
          const targetId = this.getAttribute('data-bs-target');
          const tabNumber = targetId.replace('#tab-pane-', '');

          // Ocultar todas as abas de conteúdo
          document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('show', 'active');
          });

          // Mostrar a aba de conteúdo correspondente
          const contentTab = document.querySelector(targetId);
          if (contentTab) {
            contentTab.classList.add('show', 'active');
          }

          // Mostrar a imagem correspondente
          const imageTab = document.querySelector(targetId + '-img');
          if (imageTab) {
            imageTab.classList.add('show', 'active');
          }
        });
      });
    });
