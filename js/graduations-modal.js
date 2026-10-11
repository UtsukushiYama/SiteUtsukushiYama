// ==================== MODAL SYSTEM ====================

function openGraduationModal(graduationKey) {
  const data = getGraduationData(graduationKey);
  if (!data) return;

  const modal = document.getElementById('graduationModal');
  const modalContent = document.getElementById('modalContent');

  // Gerar HTML do conteúdo do modal
  const html = generateModalHTML(data);
  modalContent.innerHTML = html;
  modalContent.querySelector('[data-close-graduation]')?.addEventListener('click',closeGraduationModal);

  // Garantir que o modal esteja visível
  modal.style.display = 'flex';
  modal.style.opacity = '1';

  // Mostrar modal
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });

  document.body.style.overflow = 'hidden';

  // Adicionar event listener para ESC
  document.addEventListener('keydown', handleEscKey);

  // Log para debug
  console.log('Modal aberto para:', graduationKey);
}

function closeGraduationModal() {
  const modal = document.getElementById('graduationModal');
  modal.classList.remove('active');

  // Aguardar animação antes de ocultar completamente
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);

  document.body.style.overflow = '';

  // Remover event listener do ESC
  document.removeEventListener('keydown', handleEscKey);

  console.log('Modal fechado');
}

function handleEscKey(e) {
  if (e.key === 'Escape') {
    closeGraduationModal();
  }
}

function generateModalHTML(data) {
  return `
    <div class="modal-header-custom">
      <div class="modal-belt-display">
        <img src="${data.image}" alt="${data.name}">
      </div>
      <div class="modal-title-section">
        <h2>${data.name}</h2>
        <span class="modal-level-badge">${data.level}</span>
      </div>
    </div>

    <div class="modal-body-custom">

      <!-- Descrição e Filosofia -->
      <div class="modal-section">
        <h3><i class="fas fa-book-open"></i> Descrição</h3>
        <p class="lead">${data.description}</p>
        <div class="philosophy-box">
          <h4><i class="fas fa-yin-yang"></i> Filosofia</h4>
          <p>${data.philosophy}</p>
        </div>
      </div>

      <!-- Requisitos -->
      <div class="modal-section">
        <h3><i class="fas fa-clipboard-check"></i> Requisitos para o Exame</h3>
        <div class="requirements-grid">
          <div class="requirement-card">
            <i class="fas fa-clock"></i>
            <strong>Tempo Mínimo</strong>
            <span>${data.requirements.minTime}</span>
          </div>
          <div class="requirement-card">
            <i class="fas fa-calendar-days"></i>
            <strong>Frequência</strong>
            <span>${data.requirements.trainingDays}</span>
          </div>
          <div class="requirement-card">
            <i class="fas fa-user"></i>
            <strong>Idade</strong>
            <span>${data.requirements.age}</span>
          </div>
        </div>
      </div>

      <!-- Técnicas -->
      <div class="modal-section">
        <h3><i class="fas fa-hand-fist"></i> Técnicas Requeridas</h3>
        ${data.techniques.map(category => `
          <div class="technique-category">
            <h4>${category.category}</h4>
            <ul class="technique-list">
              ${category.items.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </div>

      <!-- Kata -->
      ${data.kata.length > 0 ? `
        <div class="modal-section">
          <h3><i class="fas fa-dragon"></i> Kata</h3>
          ${data.kata.map(kata => `
            <div class="kata-card">
              <h4>${kata.name}</h4>
              <p>${kata.description}</p>
              ${kata.focus ? `<div class="kata-focus"><strong>Foco:</strong> ${kata.focus}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- Kumite -->
      <div class="modal-section">
        <h3><i class="fas fa-people-arrows"></i> Kumite</h3>
        <div class="kumite-section ${data.kumite.required ? 'required' : 'not-required'}">
          <div class="status-badge">
            ${data.kumite.required ?
              '<i class="fas fa-check-circle"></i> Obrigatório' :
              '<i class="fas fa-times-circle"></i> Não Obrigatório'}
          </div>
          <p>${data.kumite.description}</p>
          ${data.kumite.details ? `
            <ul class="detail-list">
              ${data.kumite.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>

      <!-- Tameshiwari -->
      <div class="modal-section">
        <h3><i class="fas fa-bolt"></i> Tameshiwari (Quebramento)</h3>
        <div class="tameshiwari-section ${data.tameshiwari.required ? 'required' : 'not-required'}">
          <div class="status-badge">
            ${data.tameshiwari.required ?
              '<i class="fas fa-check-circle"></i> Obrigatório' :
              '<i class="fas fa-times-circle"></i> Não Obrigatório'}
          </div>
          <p>${data.tameshiwari.description}</p>
          ${data.tameshiwari.details ? `
            <ul class="detail-list">
              ${data.tameshiwari.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      </div>

      <!-- Teoria -->
      ${data.theory.required ? `
        <div class="modal-section">
          <h3><i class="fas fa-brain"></i> Conhecimento Teórico</h3>
          <div class="theory-topics">
            ${data.theory.topics.map(topic => `
              <div class="topic-badge"><i class="fas fa-graduation-cap"></i> ${topic}</div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Dicas -->
      ${data.tips && data.tips.length > 0 ? `
        <div class="modal-section">
          <h3><i class="fas fa-lightbulb"></i> Dicas de Treino</h3>
          <div class="tips-container">
            ${data.tips.map(tip => `
              <div class="tip-card">
                <i class="fas fa-star"></i>
                <span>${tip}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Responsabilidades (Para Shodan) -->
      ${data.responsibilities ? `
        <div class="modal-section special-section">
          <h3><i class="fas fa-crown"></i> Responsabilidades de Yūdansha</h3>
          <ul class="responsibilities-list">
            ${data.responsibilities.map(resp => `<li><i class="fas fa-shield-alt"></i> ${resp}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Quote especial (Para Shodan) -->
      ${data.quote ? `
        <div class="quote-section">
          <i class="fas fa-quote-left"></i>
          <p>${data.quote}</p>
          <i class="fas fa-quote-right"></i>
        </div>
      ` : ''}

    </div>

    <div class="modal-footer-custom">
      <button class="btn-modal-close" data-close-graduation="true">
        <i class="fas fa-times"></i> Fechar
      </button>
    </div>
  `;
}

// ==================== SEARCH & FILTER SYSTEM ====================

let currentFilter = 'all';

function initializeSearchAndFilters() {
  const searchInput = document.getElementById('searchInput');
  const filterButtons = document.querySelectorAll('.filter-btn');

  // Search functionality
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      filterGraduations(searchTerm, currentFilter);
    });
  }

  // Filter buttons
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Get filter type
      currentFilter = btn.getAttribute('data-filter');

      // Apply filter
      const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
      filterGraduations(searchTerm, currentFilter);
    });
  });
}

function filterGraduations(searchTerm, filterType) {
  const cards = document.querySelectorAll('.graduation-card');

  cards.forEach(card => {
    const graduation = card.getAttribute('data-graduation');
    const type = card.getAttribute('data-type');
    const data = getGraduationData(graduation);

    let matchesSearch = true;
    let matchesFilter = true;

    // Check search term
    if (searchTerm) {
      const searchContent = `
        ${data.name.toLowerCase()}
        ${data.level.toLowerCase()}
        ${data.description.toLowerCase()}
        ${data.techniques.map(t => t.category.toLowerCase()).join(' ')}
        ${data.techniques.map(t => t.items.join(' ').toLowerCase()).join(' ')}
      `;
      matchesSearch = searchContent.includes(searchTerm);
    }

    // Check filter type
    if (filterType !== 'all') {
      matchesFilter = type === filterType;
    }

    // Show/hide card
    if (matchesSearch && matchesFilter) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });

  // Animate visible cards
  animateVisibleCards();
}

function animateVisibleCards() {
  const visibleCards = document.querySelectorAll('.graduation-card:not(.hidden)');
  visibleCards.forEach((card, index) => {
    card.style.animation = `none`;
    setTimeout(() => {
      card.style.animation = `fadeIn 0.5s ease-out ${index * 0.05}s both`;
    }, 10);
  });
}

// ==================== TIMELINE INTERACTION ====================

function initializeTimeline() {
  const markers = document.querySelectorAll('.timeline-marker');

  markers.forEach(marker => {
    marker.addEventListener('click', () => {
      const graduation = marker.getAttribute('data-graduation');
      openGraduationModal(graduation);
    });
  });

  // Animate progress bar on scroll
  animateTimelineProgress();
  window.addEventListener('scroll', animateTimelineProgress);
}

function animateTimelineProgress() {
  const timeline = document.querySelector('.progression-timeline');
  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // Check if timeline is in viewport
  if (rect.top < windowHeight && rect.bottom > 0) {
    const progress = document.getElementById('timelineProgress');
    const scrollPercentage = Math.min(
      Math.max((windowHeight - rect.top) / (windowHeight + rect.height) * 100, 0),
      100
    );

    // Animate to a portion of the total (example: 50% for intermediate student)
    const targetProgress = Math.min(scrollPercentage * 0.5, 50); // Adjust as needed
    progress.style.width = `${targetProgress}%`;
  }
}

// ==================== MODAL STYLES (Injetados via JS) ====================



// ==================== INITIALIZATION ====================

document.addEventListener('site:ready', () => {
  // Inject modal styles


  // Initialize all systems
  initializeSearchAndFilters();
  initializeTimeline();

  // Add fade-in animation to cards on load
  setTimeout(() => {
    animateVisibleCards();
  }, 300);

  console.log('✅ Sistema de Graduações inicializado com sucesso!');
});

// Export functions for global use
window.openGraduationModal = openGraduationModal;
window.closeGraduationModal = closeGraduationModal;
