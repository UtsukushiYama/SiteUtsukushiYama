/* ==================================================
   MODAL GALLERY SCRIPTS - Dogi e Obi
   ================================================== */

// Configuração das imagens do Dogi
const dogiImages = [
      { src: 'img/DogiObi/dogi1.png', caption: 'Passo 1: Estenda sua jaqueta (uwagi)' },
      { src: 'img/DogiObi/dogi2.png', caption: 'Passo 2: Dobre a calça (jubon) ao meio' },
      { src: 'img/DogiObi/dogi3.png', caption: 'Passo 3: Dobre o lado esquerdo' },
      { src: 'img/DogiObi/dogi4.png', caption: 'Passo 4: Dobre a manga para trás' },
      { src: 'img/DogiObi/dogi5.png', caption: 'Passo 5: Repita do outro lado' },
      { src: 'img/DogiObi/dogi6.png', caption: 'Passo 6: Enrole ou dobre seu dogi' },
      { src: 'img/DogiObi/dogi7.png', caption: 'Passo 7: Coloque sobre sua faixa (obi)' },
      { src: 'img/DogiObi/dogi8.png', caption: 'Passo 8: Amarre seu dogi' },
      { src: 'img/DogiObi/dogi9.png', caption: 'Passo 9: Dogi dobrado corretamente' }
    ];

// Configuração das imagens do Obi
const obiImages = [
      { src: 'img/DogiObi/obi1.png', caption: 'Passo 1: Posicione o centro da sua faixa (obi) na sua frente' },
      { src: 'img/DogiObi/obi2.png', caption: 'Passo 2: Dê uma volta em sua cintura' },
      { src: 'img/DogiObi/obi3.png', caption: 'Passo 3: Cruze as pontas' },
      { src: 'img/DogiObi/obi4.png', caption: 'Passo 4: Puxe a ponta através da faixa (obi) para cima' },
      { src: 'img/DogiObi/obi5.png', caption: 'Passo 5: Começe a amarrar o nó' },
      { src: 'img/DogiObi/obi6.png', caption: 'Passo 6: Puxe a extremidade superior através da alça' },
      { src: 'img/DogiObi/obi7.png', caption: 'Passo 7: Aperte o nó' },
      { src: 'img/DogiObi/obi8.png', caption: 'Passo 8: Faixa (obi) amarrada corretamente' }
];

let currentDogiSlide = 0;
let currentObiSlide = 0;

// ==================================================
// FUNÇÕES PARA O MODAL DO DOGI
// ==================================================

function openDogiModal() {
  document.getElementById('dogiModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  showDogiSlide(0);
  createDots('dogiDots', dogiImages.length, 'changeDogiSlideTo');
}

function closeDogiModal(event) {
  if (!event || event.target.id === 'dogiModal') {
    document.getElementById('dogiModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function changeDogiSlide(direction) {
  currentDogiSlide += direction;

  // Loop infinito
  if (currentDogiSlide >= dogiImages.length) {
    currentDogiSlide = 0;
  } else if (currentDogiSlide < 0) {
    currentDogiSlide = dogiImages.length - 1;
  }

  showDogiSlide(currentDogiSlide);
}

function changeDogiSlideTo(index) {
  currentDogiSlide = index;
  showDogiSlide(currentDogiSlide);
}

function showDogiSlide(index) {
  const img = document.getElementById('dogiImage');
  const caption = document.getElementById('dogiCaption');

  img.src = dogiImages[index].src;
  caption.textContent = dogiImages[index].caption;

  updateDots('dogiDots', index);
}

// ==================================================
// FUNÇÕES PARA O MODAL DO OBI
// ==================================================

function openObiModal() {
  document.getElementById('obiModal').style.display = 'block';
  document.body.style.overflow = 'hidden';
  showObiSlide(0);
  createDots('obiDots', obiImages.length, 'changeObiSlideTo');
}

function closeObiModal(event) {
  if (!event || event.target.id === 'obiModal') {
    document.getElementById('obiModal').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

function changeObiSlide(direction) {
  currentObiSlide += direction;

  // Loop infinito
  if (currentObiSlide >= obiImages.length) {
    currentObiSlide = 0;
  } else if (currentObiSlide < 0) {
    currentObiSlide = obiImages.length - 1;
  }

  showObiSlide(currentObiSlide);
}

function changeObiSlideTo(index) {
  currentObiSlide = index;
  showObiSlide(currentObiSlide);
}

function showObiSlide(index) {
  const img = document.getElementById('obiImage');
  const caption = document.getElementById('obiCaption');

  img.src = obiImages[index].src;
  caption.textContent = obiImages[index].caption;

  updateDots('obiDots', index);
}

// ==================================================
// FUNÇÕES AUXILIARES PARA OS DOTS
// ==================================================

function createDots(containerId, count, clickFunction) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => window[clickFunction](i);
    container.appendChild(dot);
  }
}

function updateDots(containerId, activeIndex) {
  const dots = document.getElementById(containerId).getElementsByClassName('dot');
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove('active');
  }
  dots[activeIndex].classList.add('active');
}

// ==================================================
// EVENT LISTENERS GLOBAIS
// ==================================================

// Fechar modal com tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeDogiModal();
    closeObiModal();
  }
});

// Navegar com setas do teclado
document.addEventListener('keydown', function(event) {
  const dogiModalOpen = document.getElementById('dogiModal') &&
                        document.getElementById('dogiModal').style.display === 'block';
  const obiModalOpen = document.getElementById('obiModal') &&
                       document.getElementById('obiModal').style.display === 'block';

  if (dogiModalOpen) {
    if (event.key === 'ArrowLeft') changeDogiSlide(-1);
    if (event.key === 'ArrowRight') changeDogiSlide(1);
  }

  if (obiModalOpen) {
    if (event.key === 'ArrowLeft') changeObiSlide(-1);
    if (event.key === 'ArrowRight') changeObiSlide(1);
  }
});
