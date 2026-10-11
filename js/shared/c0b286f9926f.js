document.addEventListener('site:ready', function() {
      const tooltip = document.getElementById('weaponTooltip');
      const tooltipImage = document.getElementById('tooltipImage');
      const weaponItems = document.querySelectorAll('.weapon-hover-item');

      weaponItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
          const imgSrc = this.getAttribute('data-weapon-img');
          if (imgSrc) {
            tooltipImage.src = imgSrc;
            tooltip.classList.add('active');
          }
        });

        item.addEventListener('mousemove', function(e) {
          const offset = 15; // Distância do cursor
          tooltip.style.left = (e.clientX + offset) + 'px';
          tooltip.style.top = (e.clientY + offset) + 'px';
        });

        item.addEventListener('mouseleave', function() {
          tooltip.classList.remove('active');
          tooltipImage.src = '';
        });
      });
    });
