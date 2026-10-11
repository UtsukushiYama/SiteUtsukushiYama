
    fetch('blog.html')
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;

        const container = document.getElementById('blog-cards-container');
        const cardList = container.getAttribute('data-cards')?.split(',') || [];

        cardList.forEach(id => {
          const original = tempDiv.querySelector(`#${id.trim()}`);
          if (original) {
            const clone = original.cloneNode(true);

            // Corrige os IDs dos carrosséis para evitar conflitos
            const carousel = clone.querySelector('.carousel');
            if (carousel) {
              const newId = 'carousel-' + id.trim();
              carousel.setAttribute('id', newId);
              clone.querySelectorAll('[data-bs-target]').forEach(btn => {
                btn.setAttribute('data-bs-target', '#' + newId);
              });
            }

            container.appendChild(clone);
          }
        });

        // Aguarda um momento para garantir que os cards foram adicionados ao DOM
        setTimeout(() => {
          // Carrega as imagens dos carrosséis usando a função do blog-cards-data.js
          cardList.forEach(id => {
            const cardId = id.trim();
            const carousel = document.querySelector(`#carousel-${cardId}`);
            if (carousel && typeof loadCarouselImages === 'function') {
              loadCarouselImages(cardId, `carousel-${cardId}`);
            }
          });

          // Inicializa os carrosséis do Bootstrap
          const carousels = document.querySelectorAll('.carousel');
          carousels.forEach(c => {
            new bootstrap.Carousel(c, {
              interval: 2000,
              ride: 'carousel'
            });
          });
        }, 100);
      })
      .catch(error => {
        console.error('Erro ao carregar cards do blog:', error);
      });
