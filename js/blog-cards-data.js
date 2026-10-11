/**
 * DADOS DOS CARDS DO BLOG
 * Centralize aqui todas as imagens e informações dos cards
 * Para adicionar um novo card, basta criar um novo objeto no array
 * Além de atualizar a informação com os nomes dos arquivos, inclua
 * os novos blogs no mapa mais abaixo. Faça uma busca por
 * const pageCardMap = { e por const blogCards = ['
*/

const blogCardsData = {
  // Card 20 - Exame de Faixa Julho 26
  card20: {
    images: [
      "img/Galeria/Exames/2026_07 (0).JPG",
      "img/Galeria/Exames/2026_07 (1).mp4",
      "img/Galeria/Exames/2026_07 (1).JPG",
      "img/Galeria/Exames/2026_07 (2).JPG",
      "img/Galeria/Exames/2026_07 (3).JPG",
      "img/Galeria/Exames/2026_07 (4).JPG",
      "img/Galeria/Exames/2026_07 (5).JPG",
      "img/Galeria/Exames/2026_07 (6).JPG",
      "img/Galeria/Exames/2026_07 (7).JPG",
      "img/Galeria/Exames/2026_07 (8).JPG",
      "img/Galeria/Exames/2026_07 (9).JPG",
      "img/Galeria/Exames/2026_07 (10).JPG",
      "img/Galeria/Exames/2026_07 (11).JPG",
      "img/Galeria/Exames/2026_07 (12).JPG",
      "img/Galeria/Exames/2026_07 (13).JPG",
      "img/Galeria/Exames/2026_07 (14).JPG",
      "img/Galeria/Exames/2026_07 (15).JPG",
      "img/Galeria/Exames/2026_07 (16).JPG",
      "img/Galeria/Exames/2026_07 (17).JPG",
      "img/Galeria/Exames/2026_07 (18).JPG",
      "img/Galeria/Exames/2026_07 (19).JPG",
      "img/Galeria/Exames/2026_07 (20).JPG",
      "img/Galeria/Exames/2026_07 (21).mp4"
    ]
  },

  // Card 19 - 33 Trofeu Brasil Mai 26
  card19: {
    images: [
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (1).JPG",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (2).JPG",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (3).JPG",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (4).MOV",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (5).MOV",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (6).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (12).MOV",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (13).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (14).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (15).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (16).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (17).JPG",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (18).jpg",
      "img/Galeria/Campeonatos/2026-05-33TRBRAS (19).JPG"
    ]
  },

  // Card 18 - Nova Sede Academia Oliver Mai 26
  card18: {
    images: [
      "img/Blog/2026_05 (1).JPG",
      "img/Blog/2026_05 (2).JPG",
      "img/Blog/2026_05 (3).JPG",
      "img/Blog/2026_05 (4).JPG",
      "img/Blog/2026_05 (5).JPG",
      "img/Blog/2026_05 (6).JPG"
    ]
  },

  // Card 17 - Treino Tatui Exame de DAN
  card17: {
    images: [
      "img/Galeria/WKB/treinoExameDAN/1.JPEG",
      "img/Galeria/WKB/treinoExameDAN/3.mp4"
    ]
  },

  // Card 16 - Exame de Faixa Mar 26
  card16: {
    images: [
      "img/Galeria/Exames/2026_03 (1).mp4",
      "img/Galeria/Exames/2026_03 (2).mp4",
      "img/Galeria/Exames/2026_03 (3).JPG",
      "img/Galeria/Exames/2026_03 (4).JPG",
      "img/Galeria/Exames/2026_03 (5).JPG",
      "img/Galeria/Exames/2026_03 (6).JPG",
      "img/Galeria/Exames/2026_03 (7).JPG",
      "img/Galeria/Exames/2026_03 (8).JPG",
      "img/Galeria/Exames/2026_03 (9).JPG",
      "img/Galeria/Exames/2026_03 (10).JPG",
      "img/Galeria/Exames/2026_03 (11).JPG",
      "img/Galeria/Exames/2026_03 (12).JPG"
    ]
  },

  // Card 15 - Seminário Shihan Daniel
  card15: {
    images: [
      "img/Galeria/WKB/TreinoInaugural/TreinoInaugural1.JPEG",
      "img/Galeria/WKB/TreinoInaugural/1.jpeg",
      "img/Galeria/WKB/TreinoInaugural/2.jpeg",
      "img/Galeria/WKB/TreinoInaugural/3.jpeg",
      "img/Galeria/WKB/TreinoInaugural/4.jpeg",
      "img/Galeria/WKB/TreinoInaugural/5.jpeg",
      "img/Galeria/WKB/TreinoInaugural/6.jpeg",
      "img/Galeria/WKB/TreinoInaugural/7.jpeg",
      "img/Galeria/WKB/TreinoInaugural/8.mp4",
      "img/Galeria/WKB/TreinoInaugural/9.jpeg",
      "img/Galeria/WKB/TreinoInaugural/10.jpeg",
      "img/Galeria/WKB/TreinoInaugural/11.jpeg",
      "img/Galeria/WKB/TreinoInaugural/12.mp4",
      "img/Galeria/WKB/TreinoInaugural/13.jpeg",
      "img/Galeria/WKB/TreinoInaugural/14.jpeg",
      "img/Galeria/WKB/TreinoInaugural/15.mp4",
      "img/Galeria/WKB/TreinoInaugural/16.mp4",
      "img/Galeria/WKB/TreinoInaugural/17.mp4",
      "img/Galeria/WKB/TreinoInaugural/18.mp4",
      "img/Galeria/WKB/TreinoInaugural/19.jpeg",
      "img/Galeria/WKB/TreinoInaugural/20.jpeg",
      "img/Galeria/WKB/TreinoInaugural/21.jpeg",
      "img/Galeria/WKB/TreinoInaugural/23.jpeg",
      "img/Galeria/WKB/TreinoInaugural/24.jpeg",
      "img/Galeria/WKB/TreinoInaugural/25.jpeg",
      "img/Galeria/WKB/TreinoInaugural/26.mp4",
      "img/Galeria/WKB/TreinoInaugural/27.jpeg",
      "img/Galeria/WKB/TreinoInaugural/28.jpeg",
      "img/Galeria/WKB/TreinoInaugural/29.jpeg",
      "img/Galeria/WKB/TreinoInaugural/30.jpeg",
      "img/Galeria/WKB/TreinoInaugural/31.mp4",
      "img/Galeria/WKB/TreinoInaugural/32.jpeg",
      "img/Galeria/WKB/TreinoInaugural/33.jpeg",
      "img/Galeria/WKB/TreinoInaugural/34.jpeg",
      "img/Galeria/WKB/TreinoInaugural/35.mp4",
      "img/Galeria/WKB/TreinoInaugural/36.jpeg",
      "img/Galeria/WKB/TreinoInaugural/37.jpeg",
      "img/Galeria/WKB/TreinoInaugural/38.jpeg",
      "img/Galeria/WKB/TreinoInaugural/39.jpeg",
      "img/Galeria/WKB/TreinoInaugural/40.jpeg",
      "img/Galeria/WKB/TreinoInaugural/41.jpeg",
      "img/Galeria/WKB/TreinoInaugural/42.jpeg",
      "img/Galeria/WKB/TreinoInaugural/43.jpeg",
      "img/Galeria/WKB/TreinoInaugural/44.jpeg",
      "img/Galeria/WKB/TreinoInaugural/45.jpeg",
      "img/Galeria/WKB/TreinoInaugural/46.jpeg",
      "img/Galeria/WKB/TreinoInaugural/47.jpeg",
      "img/Galeria/WKB/TreinoInaugural/48.jpeg",
      "img/Galeria/WKB/TreinoInaugural/49.jpeg",
      "img/Galeria/WKB/TreinoInaugural/50.jpeg",
      "img/Galeria/WKB/TreinoInaugural/51.jpeg",
      "img/Galeria/WKB/TreinoInaugural/52.jpeg",
      "img/Galeria/WKB/TreinoInaugural/53.jpeg",
      "img/Galeria/WKB/TreinoInaugural/54.jpeg",
      "img/Galeria/WKB/TreinoInaugural/55.jpeg",
      "img/Galeria/WKB/TreinoInaugural/56.jpeg",
      "img/Galeria/WKB/TreinoInaugural/57.jpeg"
    ]
  },

  // Card 14 - WKB
  card14: {
    images: [
      "img/Galeria/WKB/logo-wkb-sem-fundo.png",
      "img/Galeria/WKB/WKB1.jpg",
      "img/Galeria/WKB/WKB2.jpg",
      "img/Galeria/WKB/WKB3.jpg",
      "img/Galeria/WKB/WKB4.jpg",
      "img/Galeria/WKB/wkb-brasil-logo-sml.jpg",
      "img/Galeria/WKB/WKBB1.jpg",
      "img/Galeria/WKB/NovoFiliado.jpg"
    ]
  },

  // Card 13 - Campeonato Brasileiro
  card13: {
    images: [
      "img/Galeria/Campeonatos/2025-09-32BRAS (0).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (1).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (2).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (3).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (4).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (5).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (6).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (7).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (8).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (9).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (10).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (11).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (12).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (13).jpg",
      "img/Galeria/Campeonatos/2025-09-32BRAS (14).jpg"
    ]
  },

  // Card 12 - Exame de Faixa Julho 2025
  card12: {
    images: [
      "img/Galeria/Exames/2025 07 a/MosaicoExameTeorico-07-25.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_4245.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4247.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4249.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4255.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4256.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4257.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4258.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4259.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4260.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4261.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4262.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4263.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4264.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4293.JPEG",
      "img/Galeria/Exames/2025 07 a/IMG_4299.JPEG",
      "img/Galeria/Exames/2025 07 a/IMG_4396.JPG",
      "img/Galeria/Exames/2025 07 a/IMG_4426.JPEG",
      "img/Galeria/Exames/2025 07 a/IMG_4428.JPEG",
      "img/Galeria/Exames/2025 07 a/IMG_4434.JPEG",
      "img/Galeria/Exames/2025 07 a/IMG_9717.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9721.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9725.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9730.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9734.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9739.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9744.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9750.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9756.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9761.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9770.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9774.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9781.jpg",
      "img/Galeria/Exames/2025 07 a/IMG_9786.jpg"
    ]
  },

  // Card 11 - Treino Pré-Exame
  card11: {
    images: [
      "img/Galeria/Treinos/2025_07_a.JPEG",
      "img/Galeria/Treinos/2025_07_b.JPG"
    ]
  },

  // Card 10 - Mini Camp
  card10: {
    images: [
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (1).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (3).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (5).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (7).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (8).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (11).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (13).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (15).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (17).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (19).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (21).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (23).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (2).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (1).jpg",
      "img/Galeria/Treinos/2025_06_1CampUtsuYama (4).jpg"
    ]
  },

  // Card 9 - Grand Prix
  card9: {
    images: [
      "img/Galeria/Campeonatos/2025_06_32GPKCB (1).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (2).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (3).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (4).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (5).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (6).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (7).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (8).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (9).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (10).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (11).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (12).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (13).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (14).jpg",
      "img/Galeria/Campeonatos/2025_06_32GPKCB (15).jpg"
    ]
  },

  // Card 8 - Diploma Shodan
  card8: {
    images: [
      "img/Galeria/Exames/2025_06 (5).jpeg",
      "img/Galeria/Exames/2025_06 (7).jpeg"
    ]
  },

  // Card 7 - Retorno Guerreira
  card7: {
    images: [
      "img/Galeria/Exames/2025_06 (1).jpeg",
      "img/Galeria/Exames/2025_06 (2).jpeg",
      "img/Galeria/Exames/2025_06 (3).jpeg",
      "img/Galeria/Exames/2025_06 (4).jpeg"
    ]
  }
};

/**
 * FUNÇÃO AUXILIAR - Verifica se o arquivo é um vídeo
 * @param {string} filePath - Caminho do arquivo
 * @returns {boolean} - True se for vídeo
 */
function isVideo(filePath) {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
  const lowerPath = filePath.toLowerCase();
  return videoExtensions.some(ext => lowerPath.endsWith(ext));
}

/**
 * FUNÇÃO PARA CARREGAR CARROSSEL DINAMICAMENTE
 * Suporta tanto imagens quanto vídeos
 * @param {string} cardId - ID do card (ex: "card14")
 * @param {string} carouselId - ID do carrossel no HTML (ex: "card14", "carouselBlog2025_09_bras")
 */
function loadCarouselImages(cardId, carouselId) {
  const cardData = blogCardsData[cardId];

  if (!cardData || !cardData.images) {
    console.error(`Dados não encontrados para ${cardId}`);
    return;
  }

  const carouselInner = document.querySelector(`#${carouselId} .carousel-inner`);

  if (!carouselInner) {
    console.error(`Carrossel #${carouselId} não encontrado`);
    return;
  }

  // Limpa o conteúdo existente
  carouselInner.innerHTML = '';

  // Adiciona as imagens/vídeos dinamicamente
  cardData.images.forEach((mediaPath, index) => {
    const isActive = index === 0 ? 'active' : '';

    let carouselItem;

    if (isVideo(mediaPath)) {
      // Renderiza como vídeo (sem autoplay — controlado pelo JS abaixo)
      carouselItem = `
        <div class="carousel-item ${isActive}">
          <video class="d-block w-100 uy-dynamic-9b73c732fc06" muted playsinline>
            <source src="${mediaPath}" type="video/mp4">
            Seu navegador não suporta vídeos.
          </video>
        </div>
      `;
    } else {
      // Renderiza como imagem
      carouselItem = `
        <div class="carousel-item ${isActive}">
          <img src="${mediaPath}" class="d-block w-100 img-fluid uy-dynamic-9b73c732fc06"
            alt="Imagem ${index + 1}">
        </div>
      `;
    }

    carouselInner.insertAdjacentHTML('beforeend', carouselItem);
  });

  // Ativa o carrossel com looping infinito
  const carouselElement = document.getElementById(carouselId);
  if (!carouselElement) return;

  const bsCarousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000, // 3 segundos para fotos
    wrap: true,
    ride: 'carousel'
  });

  // Função auxiliar: toca o vídeo do slide ativo (se houver) e pausa o carrossel até terminar
  function handleSlideVideo(slideElement) {
    const video = slideElement.querySelector('video');
    if (video) {
      // Pausa o carrossel enquanto o vídeo toca
      bsCarousel.pause();
      video.currentTime = 0;
      video.play().catch(() => {}); // evita erros em browsers que bloqueiam autoplay

      // Quando o vídeo terminar, avança para o próximo slide
      video.onended = function () {
        bsCarousel.next();
      };
    }
  }

  // Ao trocar de slide, verifica se o novo slide tem vídeo ou foto
  carouselElement.addEventListener('slid.bs.carousel', function (e) {
    // Pausa todos os vídeos (inclusive o que saiu)
    const allVideos = carouselElement.querySelectorAll('.carousel-item video');
    allVideos.forEach(v => { v.pause(); v.currentTime = 0; v.onended = null; });

    const newSlide = e.relatedTarget;
    const video = newSlide.querySelector('video');

    if (video) {
      // Slide com vídeo: pausa o carrossel e deixa o vídeo controlar o avanço
      handleSlideVideo(newSlide);
    } else {
      // Slide com foto: retoma o ciclo automático normalmente
      bsCarousel.cycle();
    }
  });

  // Trata o primeiro slide caso seja um vídeo
  const firstSlide = carouselElement.querySelector('.carousel-item.active');
  if (firstSlide) handleSlideVideo(firstSlide);

  console.log(`✅ Carrossel ${carouselId} carregado com ${cardData.images.length} itens (fotos e vídeos)`);
}

/**
 * AUTO-DETECÇÃO E CARREGAMENTO
 * Detecta automaticamente quais carrosséis existem na página e carrega as imagens/vídeos
 */
document.addEventListener('site:ready', function() {
  // Para blog.html - cards na lista
  const blogCards = Object.keys(blogCardsData);

  blogCards.forEach(cardId => {
    const carousel = document.querySelector(`[data-blog-card="${cardId}"] .carousel`) || document.querySelector(`#${cardId}.carousel`);
    if (carousel) {
      loadCarouselImages(cardId, carousel.id);
    }
  });

  // Para páginas de detalhes (blog-cardXX.html)
  // Mapeamento: trecho da URL -> cardId
  const pageCardMap = {
    'blog-card20': 'card20',
    'blog-card19': 'card19',
    'blog-card18': 'card18',
    'blog-card17': 'card17',
    'blog-card16': 'card16',
    'blog-card15': 'card15',
    'blog-card14': 'card14',
    'blog-card13': 'card13',
    'blog-card12': 'card12',
    'blog-card11': 'card11',
    'blog-card10': 'card10',
    'blog-card9':  'card9',
    'blog-card8':  'card8',
    'blog-card7':  'card7'
  };

  const pageUrl = window.location.pathname;
  let detectedCardId = null;

  for (const [urlFragment, cardId] of Object.entries(pageCardMap)) {
    if (pageUrl.includes(urlFragment)) {
      detectedCardId = cardId;
      break;
    }
  }

  if (detectedCardId) {
    // Suporta carrosséis com id^="carouselBlog" (padrão antigo) ou id="cardXX" (padrão novo)
    const detailCarousels = document.querySelectorAll(
      '.carousel[id^="carouselBlog"], .carousel[id^="card"]'
    );
    detailCarousels.forEach(carousel => {
      loadCarouselImages(detectedCardId, carousel.id);
    });
  }
});
