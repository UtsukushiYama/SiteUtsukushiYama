/* ============================================
   HOTSPOTS INTERATIVOS - JAVASCRIPT
   ============================================ */

// Inicializar hotspots quando o documento estiver pronto
document.addEventListener('site:ready', function() {
  initHotspots();
});

function initHotspots() {
  const hotspots = document.querySelectorAll('.hotspot');

  hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', function(e) {
      e.stopPropagation();

      // Fechar todos os tooltips abertos
      closeAllTooltips();

      // Abrir o tooltip deste hotspot
      const tooltipId = this.getAttribute('data-tooltip');
      const tooltip = document.getElementById(tooltipId);

      if (tooltip) {
        // Posicionar o tooltip
        positionTooltip(this, tooltip);

        // Mostrar tooltip
        tooltip.classList.add('active');
      }
    });
  });

  // Fechar ao clicar nos botões de fechar
  const closeButtons = document.querySelectorAll('.hotspot-close');
  closeButtons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      closeAllTooltips();
    });
  });

  // Fechar com tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllTooltips();
    }
  });

  // Fechar ao clicar fora do tooltip
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.hotspot-tooltip') && !e.target.closest('.hotspot')) {
      closeAllTooltips();
    }
  });
}

function positionTooltip(hotspot, tooltip) {
  const container = hotspot.closest('.hotspot-container');
  const containerRect = container.getBoundingClientRect();
  const hotspotRect = hotspot.getBoundingClientRect();

  // Obter posição relativa ao container
  const hotspotLeft = hotspot.offsetLeft;
  const hotspotTop = hotspot.offsetTop;

  // Dimensões do tooltip
  tooltip.style.display = 'block';
  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  // Dimensões do container
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Calcular posição (tentar embaixo primeiro, centralizado no hotspot)
  let top = hotspotTop + 40;
  let left = hotspotLeft - (tooltipWidth / 2);

  // Verificar se tooltip cabe na direita
  if (left + tooltipWidth > containerWidth) {
    left = containerWidth - tooltipWidth - 20;
  }

  // Garantir que não saia pela esquerda
  if (left < 10) {
    left = 10;
  }

  // Calcular posição da seta (onde o hotspot está em relação ao tooltip)
  const arrowPosition = hotspotLeft - left;

  // Verificar se tooltip cabe embaixo
  if (top + tooltipHeight > containerHeight) {
    // Colocar em cima
    top = hotspotTop - tooltipHeight - 20;
    tooltip.classList.remove('bottom');
    tooltip.classList.add('top');
  } else {
    tooltip.classList.remove('top');
    tooltip.classList.add('bottom');
  }

  // Aplicar posição
  tooltip.style.top = top + 'px';
  tooltip.style.left = left + 'px';

  // Ajustar posição da seta para apontar exatamente para o hotspot
  tooltip.style.setProperty('--arrow-left', arrowPosition + 'px');
}

function closeAllTooltips() {
  const tooltips = document.querySelectorAll('.hotspot-tooltip');

  tooltips.forEach(tooltip => {
    tooltip.classList.remove('active');
  });
}

// Reposicionar tooltips ao redimensionar janela
let resizeTimer;
window.addEventListener('resize', function() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    closeAllTooltips();
  }, 250);
});
