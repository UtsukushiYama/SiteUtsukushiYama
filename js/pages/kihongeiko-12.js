
  // ============================================================
  // KIHON DINÂMICO
  //
  // CADASTRO DE UMA TÉCNICA:
  // {
  //   nome: "Seiken Mae Gedan Barai",
  //   tipo: "Bloqueio",
  //   descricao: "<strong>Defesa baixa frontal.</strong>"
  // }
  //
  // O campo "nome" gera automaticamente:
  //   texto: Seiken Mae Gedan Barai
  //   alt:   Seiken Mae Gedan Barai
  //   slug:  seiken_mae_gedan_barai
  //   img:   img/Kihon/seiken_mae_gedan_barai.png
  // ============================================================
  (function () {
    'use strict';

    const KIHON_GRADES = [
  {
    "id": "classico",
    "titulo": "Kihon Clássico",
    "subtitulo": "32 Movimentos Tradicionais",
    "nivel": "publico",
    "status": "ativo",
    "background": "linear-gradient(90deg, #ff6600 0%, #000080 20%, #cccc00 40%, #008000 60%, #8b4513 80%, #000000 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Os 32 movimentos fundamentais do Kihon Kyokushin</strong></p><p class=\"text-muted mb-4\"><em>Composto por 4 ataques em seiken, 4 em uraken, 3 com hiji, 5 bloqueios, 5 ataques em shuto, 10 chutes e 1 joelhada.</em></p><p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Seiken Oi Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco penetrante a frente com punho cerrado na altura do abdômen.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Seiken Oi Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco penetrante a frente com punho cerrado na altura do rosto.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Uraken Shomen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco penetrante a frente com mão invertida e punho cerrado na altura do rosto.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Uraken Sayu Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco circular lateral descendente com mão invertida e punho cerrado na altura da\n                    clavícula.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Uraken Hizo Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco circular lateral descendente com mão invertida e punho cerrado na altura da\n                    clavícula.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Uraken Mawashi Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco circular lateral com mão invertida e punho cerrado cujo alvo é a têmpora.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Seiken Ago Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco frontal semi-descendente na direção do queixo.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shita Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco ascendente médio com os punhos cerrados e palma para cima na altura do fígado e\n                    baço.</strong>\n<br/>Base: Kiba Dachi."
      },
      {
        "nome": "Hiji Yoku Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque circular com o cotovelo na altura da costela.</strong>\n<br/>Base: Kiba Dachi."
      },
      {
        "nome": "Hiji Age Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque ascendente com o cotovelo cujo alvo é a parte inferior do queixo.</strong>\n<br/>Base: Kiba Dachi."
      },
      {
        "nome": "Hiji Oroshi Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque descendente com o cotovelo.</strong>\n<br/>Base: Kiba Dachi."
      },
      {
        "nome": "Jodan Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa com o punho cerrado de golpes descendentes na altura da cabeça.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Soto Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa circular média com punhos cerrados com movimentos de fora para dentro.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa circular média com punhos cerrados com movimentos de dentro para fora.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Gedadn Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa baixa com punho cerrado de dentro para fora.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Chudan Uchi Uke Gedan Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa combinada com punho cerrado com movimentos de dentro para fora em média e baixa\n                    altura.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shuto Ganmen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe circular com a faca da mão aberta na altura da têmpora.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shuto Sakotsu Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe descendente com a faca da mão aberta na direção da clavícula.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shuto Sakotsu Uchikomi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe frontal com a faca da mão aberta na direção do peito.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shuto Uchi Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe semi-circular com a faca da mão aberta de dentro para fora na altura do pescoço. Em\n                    alguns casos\n                    pode ser usado como defesa.\n                  </strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Shuto Hizo Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe circular médio com a faca da mão aberta na direção das costelas.</strong>\n<br/>Base: Migi Sanchin Dachi."
      },
      {
        "nome": "Mae Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal a média distância com a perna esticada.</strong>\n<br/>Base: Hidari primeiro e depois Migi Zenkutsu Dachi."
      },
      {
        "nome": "Uchi Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular alto de fora para dentro.</strong>\n<br/>Base: Fudo Dachi."
      },
      {
        "nome": "Soto Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular alto de dentro para fora.</strong>\n<br/>Base: Fudo Dachi."
      },
      {
        "nome": "Hiza Geri",
        "tipo": "Chute",
        "descricao": "<strong>Joelhada frontal.</strong>\n<br/>Base: Fudo Dachi."
      },
      {
        "nome": "Kinteki Geri (ou Kin Geri)",
        "tipo": "Chute",
        "descricao": "<strong>Chute ascendente central na região da genitália.</strong>\n<br/>Base: Fudo Dachi."
      },
      {
        "nome": "Chudan Mae Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal na altura do abdômen.</strong>\n<br/>Base: Fudo Dachi."
      },
      {
        "nome": "Jodan Yoku Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute ascendente lateral com a faca do pé na altura da cabeça.</strong>\n<br/>Base: Fudo Dachi (a 45°)."
      },
      {
        "nome": "Chudan Yoku Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear lateral na altura do abdômen com a faca do pé.</strong>\n<br/>Base: Fudo Dachi (a 45°)."
      },
      {
        "nome": "Kansetsu Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear descendente com a faca do pé.</strong>\n<br/>Base: Fudo Dachi (a 45°)."
      },
      {
        "nome": "Jodan Ushiro Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear para trás na altura do rosto.</strong>\n<br/>Base: Fudo Dachi (a 45°)."
      },
      {
        "nome": "Jodan Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular na altura da cabeça.</strong>\n<br/>Base: Fudo Dachi."
      }
    ]
  },
  {
    "id": "10kyu",
    "titulo": "Faixa Laranja",
    "subtitulo": "10º Kyu",
    "nivel": "iniciante",
    "status": "ativo",
    "background": "linear-gradient(90deg, #ff6600 0% 100%)",
    "textColor": "#fff",
    "introducao": `<p class="text-muted mb-4">A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade,
                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>,
                  <em>timing</em> e distância.<br>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>`,
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Seiken Mae Gedan Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa baixa frontal com punho cerrado.</strong>"
      },
      {
        "nome": "Seiken Jodan Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa alta com punho cerrado.</strong>"
      },
      {
        "nome": "Seiken Oi Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco direto médio em avanço.</strong>"
      },
      {
        "nome": "Seiken Oi Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco direto alto em avanço.</strong>"
      },
      {
        "nome": "Seiken Oi Gedan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco direto baixo em avanço.</strong>"
      },
      {
        "nome": "Seiken Morote Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco duplo médio.</strong>"
      },
      {
        "nome": "Seiken Morote Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco duplo alto.</strong>"
      },
      {
        "nome": "Seiken Morote Gedan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco duplo baixo.</strong>"
      },
      {
        "nome": "Fudo Dachi",
        "tipo": "Base",
        "descricao": "<strong>Postura de espera e atenção.</strong>"
      },
      {
        "nome": "Hiza",
        "tipo": "Arma",
        "descricao": "<strong>Joelho.</strong>"
      },
      {
        "nome": "Hiza Ganmen Geri",
        "tipo": "Chute",
        "descricao": "<strong>Joelhada na altura do rosto.</strong>"
      },
      {
        "nome": "Haisoku",
        "tipo": "Arma",
        "descricao": "<strong>Peito do Pé.</strong>"
      },
      {
        "nome": "Kin Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute ascendente central na região da genitália.</strong>"
      },
      {
        "nome": "Chusoku",
        "tipo": "Arma",
        "descricao": "<strong>Bola do pé.</strong>"
      },
      {
        "nome": "Mae Geri Chusoku Chudan",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal médio com a planta do pé.</strong>"
      },
      {
        "nome": "Mae Geri Chusoku Jodan",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal alto com a planta do pé.</strong>"
      }
    ]
  },
  {
    "id": "9kyu",
    "titulo": "Faixa Laranja",
    "subtitulo": "9º Kyu",
    "nivel": "iniciante",
    "status": "ativo",
    "background": "linear-gradient(90deg, #ff6600 0% 91%, #000080 91% 94%, #ff6600 94% 100%)",
    "textColor": "#fff",
    "introducao": `<p class="text-muted mb-4">Desenvolvendo sensibilidade nos pés e nas pernas, o karateka faixa laranja 9º <em>kyu</em> lentamente
                  começa a entender as posturas corretas. Força e progresso só podem ser baseados em <em>kihon</em> bem executados.</p>`,
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Seiken Chudan Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa circular média de dentro para fora.</strong>"
      },
      {
        "nome": "Seiken Chudan Soto Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa circular média de fora para dentro.</strong>"
      },
      {
        "nome": "Seiken Giaku Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco reverso médio.</strong>"
      },
      {
        "nome": "Seiken Giaku Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco reverso alto.</strong>"
      },
      {
        "nome": "Seiken Giaku Gedan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco reverso baixo.</strong>"
      },
      {
        "nome": "Seiken Ago Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco frontal semi-descendente na direção do queixo.</strong>"
      },
      {
        "nome": "Fudo Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base de espera e atenção.</strong>"
      },
      {
        "nome": "Chusoku",
        "tipo": "Arma",
        "descricao": "<strong>Bola do pé.</strong>"
      },
      {
        "nome": "Mae Chusoku Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal ascendente com a bola do pé.</strong>"
      },
      {
        "nome": "Haisoku",
        "tipo": "Arma",
        "descricao": "<strong>Peito do pé.</strong>"
      },
      {
        "nome": "Uchi Mawashi Haisoku Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular de fora para dentro (ascendente).</strong>"
      },
      {
        "nome": "Teisoku",
        "tipo": "Arma",
        "descricao": "<strong>Sola do pé.</strong>"
      },
      {
        "nome": "Soto Mawashi Teisoku Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular de dentro para fora (ascendente).</strong>"
      }
    ]
  },
  {
    "id": "8kyu",
    "titulo": "Faixa Azul",
    "subtitulo": "8º Kyu",
    "nivel": "intermediario",
    "status": "ativo",
    "background": "linear-gradient(90deg, #0044cc 0% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Morote Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa dupla de dentro para fora.</strong>"
      },
      {
        "nome": "Uchi Uke Gedan Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa combinada média e baixa.</strong>"
      },
      {
        "nome": "Tate Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical alto.</strong>"
      },
      {
        "nome": "Tate Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical médio.</strong>"
      },
      {
        "nome": "Tate Gedan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical baixo.</strong>"
      },
      {
        "nome": "Shita Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco ascendente médio na altura do fígado e baço.</strong>"
      },
      {
        "nome": "Jun Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco direto em deslocamento.</strong>"
      },
      {
        "nome": "Kagi Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco em gancho.</strong>"
      },
      {
        "nome": "Yoko Kansetsu Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear descendente com a faca do pé.</strong>"
      },
      {
        "nome": "Sokuto Yoko Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute ascendente lateral com a faca do pé.</strong>"
      }
    ]
  },
  {
    "id": "7kyu",
    "titulo": "Faixa Azul",
    "subtitulo": "7º Kyu",
    "nivel": "intermediario",
    "status": "ativo",
    "background": "linear-gradient(90deg, #0044cc 0% 91%, #cccc00 91% 94%, #0044cc 94% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Morote Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa dupla de dentro para fora.</strong>"
      },
      {
        "nome": "Uchi Uke Gedan Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa combinada média e baixa.</strong>"
      },
      {
        "nome": "Tate Jodan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical alto.</strong>"
      },
      {
        "nome": "Tate Chudan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical médio.</strong>"
      },
      {
        "nome": "Tate Gedan Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco vertical baixo.</strong>"
      },
      {
        "nome": "Shita Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco ascendente médio na altura do fígado e baço.</strong>"
      },
      {
        "nome": "Jun Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco direto em deslocamento.</strong>"
      },
      {
        "nome": "Kagi Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco em gancho.</strong>"
      },
      {
        "nome": "Yoko Kansetsu Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear descendente com a faca do pé.</strong>"
      },
      {
        "nome": "Sokuto Yoko Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute ascendente lateral com a faca do pé.</strong>"
      }
    ]
  },
  {
    "id": "6kyu",
    "titulo": "Faixa Amarela",
    "subtitulo": "6º Kyu",
    "nivel": "intermediario",
    "status": "ativo",
    "background": "linear-gradient(90deg, #cccc00 0% 100%)",
    "textColor": "#000",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Osae Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa com pressão descendente.</strong>"
      },
      {
        "nome": "Seiken Juji Uke Jodan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa cruzada alta.</strong>"
      },
      {
        "nome": "Seiken Juji Uke Chudan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa cruzada média.</strong>"
      },
      {
        "nome": "Seiken Juji Uke Gedan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa cruzada baixa.</strong>"
      },
      {
        "nome": "Uraken Shomen Ganmen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco penetrante frontal com mão invertida.</strong>"
      },
      {
        "nome": "Uraken Oroshi Ganmen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe descendente com costas do punho na face.</strong>"
      },
      {
        "nome": "Uraken Sayo Ganmen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco circular lateral descendente com mão invertida.</strong>"
      },
      {
        "nome": "Uraken Hizo Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe circular lateral nas costelas.</strong>"
      },
      {
        "nome": "Uraken Mawashi Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Soco circular lateral cujo alvo é a têmpora.</strong>"
      },
      {
        "nome": "Ippon Nukite",
        "tipo": "Ataque",
        "descricao": "<strong>Estocada com um dedo.</strong>"
      },
      {
        "nome": "Nihon Nukite",
        "tipo": "Ataque",
        "descricao": "<strong>Estocada com dois dedos.</strong>"
      },
      {
        "nome": "Yohon Nukite",
        "tipo": "Ataque",
        "descricao": "<strong>Estocada com quatro dedos.</strong>"
      },
      {
        "nome": "Sokuto Yoko Geri Chudan",
        "tipo": "Chute",
        "descricao": "<strong>Chute linear lateral médio com a faca do pé.</strong>"
      }
    ]
  },
  {
    "id": "5kyu",
    "titulo": "Faixa Amarela",
    "subtitulo": "5º Kyu",
    "nivel": "intermediario",
    "status": "ativo",
    "background": "linear-gradient(90deg, #cccc00 0% 91%, #228B22 91% 94%, #cccc00 94% 100%)",
    "textColor": "#000",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Shotei Uke Jodan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa alta com a palma da mão.</strong>"
      },
      {
        "nome": "Shotei Uke Chudan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com a palma da mão.</strong>"
      },
      {
        "nome": "Shotei Uke Gedan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa baixa com a palma da mão.</strong>"
      },
      {
        "nome": "Chudan Hiji Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o cotovelo.</strong>"
      },
      {
        "nome": "Shotei Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a palma da mão.</strong>"
      },
      {
        "nome": "Shotei Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a palma da mão.</strong>"
      },
      {
        "nome": "Shotei Uchi Gedan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe baixo com a palma da mão.</strong>"
      },
      {
        "nome": "Ushiro Kakato Geri Chudan",
        "tipo": "Chute",
        "descricao": "<strong>Chute para trás com o calcanhar na altura média.</strong>"
      }
    ]
  },
  {
    "id": "4kyu",
    "titulo": "Faixa Verde",
    "subtitulo": "4º Kyu",
    "nivel": "avancado",
    "status": "ativo",
    "background": "linear-gradient(90deg, #228B22 0% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Shuto Gedan Barai",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa baixa com a faca da mão.</strong>"
      },
      {
        "nome": "Shuto Jodan Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa alta com a faca da mão.</strong>"
      },
      {
        "nome": "Shuto Chudan Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com a faca da mão.</strong>"
      },
      {
        "nome": "Shuto Jodan Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa alta com a faca da mão de dentro para fora.</strong>"
      },
      {
        "nome": "Mae Mawashi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa circular frontal.</strong>"
      },
      {
        "nome": "Shuto Ganmen Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe circular com a faca da mão na têmpora.</strong>"
      },
      {
        "nome": "Shuto Hizo Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe circular com a faca da mão nas costelas.</strong>"
      },
      {
        "nome": "Shuto Sakotsu Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe descendente com a faca da mão na clavícula.</strong>"
      },
      {
        "nome": "Shuto Sakotsu Uchi Komi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe frontal com a faca da mão no peito.</strong>"
      },
      {
        "nome": "Shuto Jodan Uchi Uchi",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe semi-circular com a faca da mão.</strong>"
      },
      {
        "nome": "Sokuto Yoko Geri Jodan",
        "tipo": "Chute",
        "descricao": "<strong>Chute lateral alto com a faca do pé.</strong>"
      },
      {
        "nome": "Mawashi Geri Jodan",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular na altura da cabeça.</strong>"
      },
      {
        "nome": "Ushiro Kakato Geri Jodan",
        "tipo": "Chute",
        "descricao": "<strong>Chute para trás com o calcanhar alto.</strong>"
      },
      {
        "nome": "Ushiro Haisoku Mawashi Geri Keage",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular para trás com o dorso do pé.</strong>"
      }
    ]
  },
  {
    "id": "3kyu",
    "titulo": "Faixa Verde",
    "subtitulo": "3º Kyu",
    "nivel": "avancado",
    "status": "ativo",
    "background": "linear-gradient(90deg, #228B22 0% 91%, #8B4513 91% 94%, #228B22 94% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Shuto Juji Uke Jodan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa cruzada alta com a faca da mão.</strong>"
      },
      {
        "nome": "Shuto Juji Uke Chudan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa cruzada média com a faca da mão.</strong>"
      },
      {
        "nome": "Hiji Ate Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque com cotovelo na altura alta.</strong>"
      },
      {
        "nome": "Hiji Ate Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque com cotovelo na altura média.</strong>"
      },
      {
        "nome": "Age Hiji Ate Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque ascendente com cotovelo alto.</strong>"
      },
      {
        "nome": "Age Hiji Ate Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque ascendente com cotovelo médio.</strong>"
      },
      {
        "nome": "Mae Hiji Ate Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque frontal com cotovelo alto.</strong>"
      },
      {
        "nome": "Mae Hiji Ate Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque frontal com cotovelo médio.</strong>"
      },
      {
        "nome": "Ushiro Hiji Ate",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque para trás com o cotovelo.</strong>"
      },
      {
        "nome": "Oroshi Hiji Ate",
        "tipo": "Ataque",
        "descricao": "<strong>Ataque descendente com o cotovelo.</strong>"
      },
      {
        "nome": "Mae Kakato Geri Jodan",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal com calcanhar alto.</strong>"
      },
      {
        "nome": "Mae Kakato Geri Chudan",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal com calcanhar médio.</strong>"
      },
      {
        "nome": "Mae Kakato Geri Gedan",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal com calcanhar baixo.</strong>"
      }
    ]
  },
  {
    "id": "2kyu",
    "titulo": "Faixa Marrom",
    "subtitulo": "2º Kyu",
    "nivel": "avancado",
    "status": "ativo",
    "background": "linear-gradient(90deg, #8B4513 0% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Koken Uke Jodan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa alta com o punho de tigre.</strong>"
      },
      {
        "nome": "Koken Uke Chudan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o punho de tigre.</strong>"
      },
      {
        "nome": "Koken Uke Gedan",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa baixa com o punho de tigre.</strong>"
      },
      {
        "nome": "Haishu Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com as costas da mão.</strong>"
      },
      {
        "nome": "Haishu Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com as costas da mão.</strong>"
      },
      {
        "nome": "Seiken Ague Tsuki",
        "tipo": "Ataque",
        "descricao": "<strong>Soco ascendente com punho cerrado.</strong>"
      },
      {
        "nome": "Uchi Oroshi Kakato Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute descendente com calcanhar de dentro.</strong>"
      },
      {
        "nome": "Soto Oroshi Kakato Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute descendente com calcanhar de fora.</strong>"
      },
      {
        "nome": "Uchi Haisoku Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute com o dorso do pé de dentro.</strong>"
      },
      {
        "nome": "Usu Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular rasante.</strong>"
      },
      {
        "nome": "Mae Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute frontal em salto.</strong>"
      },
      {
        "nome": "Nidan Mae Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute duplo frontal em salto.</strong>"
      }
    ]
  },
  {
    "id": "1kyu",
    "titulo": "Faixa Marrom",
    "subtitulo": "1º Kyu",
    "nivel": "avancado",
    "status": "ativo",
    "background": "linear-gradient(90deg, #8B4513 0% 91%, #000 91% 94%, #8B4513 94% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Kake Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa em gancho.</strong>"
      },
      {
        "nome": "Chudan Haito Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o dorso da faca da mão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com punho de dragão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com punho de dragão.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do polegar.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do polegar.</strong>"
      },
      {
        "nome": "Ushiro Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular para trás.</strong>"
      },
      {
        "nome": "Yoko Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute lateral em salto.</strong>"
      }
    ]
  },
  {
    "id": "1dan",
    "titulo": "Faixa Preta",
    "subtitulo": "1º Dan",
    "nivel": "avancado",
    "status": "ativo",
    "background": "linear-gradient(90deg, #000 0% 91%, #FFD700 91% 94%, #000 94% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Kake Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa em gancho.</strong>"
      },
      {
        "nome": "Chudan Haito Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o dorso da faca da mão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com punho de dragão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com punho de dragão.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do polegar.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do polegar.</strong>"
      },
      {
        "nome": "Ushiro Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular para trás.</strong>"
      },
      {
        "nome": "Yoko Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute lateral em salto.</strong>"
      }
    ]
  },
  {
    "id": "2dan",
    "titulo": "Faixa Preta",
    "subtitulo": "2º Dan",
    "nivel": "avancado",
    "status": "breve",
    "background": "linear-gradient(90deg, #000 0% 86%, #FFD700 86% 89%, #000 89% 92%, #FFD700 92% 95%, #000 95% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Kake Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa em gancho.</strong>"
      },
      {
        "nome": "Chudan Haito Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o dorso da faca da mão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com punho de dragão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com punho de dragão.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do polegar.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do polegar.</strong>"
      },
      {
        "nome": "Ushiro Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular para trás.</strong>"
      },
      {
        "nome": "Yoko Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute lateral em salto.</strong>"
      }
    ]
  },
  {
    "id": "3dan",
    "titulo": "Faixa Preta",
    "subtitulo": "3º Dan",
    "nivel": "avancado",
    "status": "breve",
    "background": "linear-gradient(90deg, #000 0% 80%, #FFD700 80% 83%, #000 83% 86%, #FFD700 86% 89%, #000 89% 92%, #FFD700 92% 95%, #000 95% 100%)",
    "textColor": "#fff",
    "introducao": "<p class=\"text-muted mb-3\"><strong>Base: Migi Sanchin Dachi</strong></p>\n                <img class=\"img-fluid mb-2\" src=\"img/Kihon/MigiSanchinDachi.png\" alt=\"Seiken Mae Gedan Barai\" style=\"width: 150pt\" /><p class=\"text-muted mb-4\"><em>A faixa laranja simboliza a construção de uma base sólida, com foco na estabilidade, \n                  precisão e domínio do <em>kihon</em>, preparando o karateka para evoluir nos movimentos, <em>kata</em>, <em>timing</em> e distância.</em>\n<br/>(10 repetições lentas + 20 repetições com <em>kiai irete</em>)</p>",
    "tecnicas": [
      {
        "nome": "Migi Sanchin Dachi",
        "tipo": "Base",
        "descricao": "<strong>Base da ampulheta.</strong>"
      },
      {
        "nome": "Seiken",
        "tipo": "Arma",
        "descricao": "<strong>Punhos Cerrados.</strong>"
      },
      {
        "nome": "Kake Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa em gancho.</strong>"
      },
      {
        "nome": "Chudan Haito Uchi Uke",
        "tipo": "Bloqueio",
        "descricao": "<strong>Defesa média com o dorso da faca da mão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com punho de dragão.</strong>"
      },
      {
        "nome": "Ryuto Ken Tsuki Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com punho de dragão.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Nakayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do dedo médio.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Jodan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe alto com a junta do polegar.</strong>"
      },
      {
        "nome": "Oyayubi Ipponken Uchi Chudan",
        "tipo": "Ataque",
        "descricao": "<strong>Golpe médio com a junta do polegar.</strong>"
      },
      {
        "nome": "Ushiro Mawashi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute circular para trás.</strong>"
      },
      {
        "nome": "Yoko Tobi Geri",
        "tipo": "Chute",
        "descricao": "<strong>Chute lateral em salto.</strong>"
      }
    ]
  }
];

    const LEVEL_NAMES = {
      guest: 'Acesso livre',
      publico: 'Acesso livre',
      iniciante: 'Iniciante',
      intermediario: 'Intermediário',
      avancado: 'Avançado',
      admin: 'Administrador'
    };

    const BADGE_CLASSES = {
      'Base': 'bg-success',
      'Arma': 'bg-success',
      'Bloqueio': 'bg-info',
      'Ataque': 'bg-danger',
      'Chute': 'bg-warning',
      'Técnica': 'bg-secondary'
    };

    let currentGradeId = null;
    let currentFilter = 'todos';

    function slugify(nome) {
      return (nome || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '_')
        .replace(/^_+|_+$/g, '');
    }

    function imagePath(nome) {
      return `img/Kihon/${slugify(nome)}.png`;
    }

    function normalizeText(text) {
      return (text || '')
        .toLocaleLowerCase('pt-BR')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
    }

    function getCurrentLevel() {
      if (window.KyokushinLoginSystem && typeof window.KyokushinLoginSystem.getCurrentUser === 'function') {
        const user = window.KyokushinLoginSystem.getCurrentUser();
        if (user) return user.level || user.nivel_acesso || 'guest';
      }
      return localStorage.getItem('userLevel') || 'guest';
    }

    function hasAccess(grade) {
      const level = getCurrentLevel();

      // "BREVE" é bloqueado para todos, inclusive admin.
      if (grade.status === 'breve') return false;

      if (level === 'admin') return true;

      // Visitante: somente o Kihon Clássico / 32 técnicas.
      if (level === 'guest') return grade.id === 'classico';

      if (grade.nivel === 'publico') return true;

      const hierarchy = (window.KyokushinLoginSystem && window.KyokushinLoginSystem.levelHierarchy) || {
        guest: [],
        iniciante: ['iniciante'],
        intermediario: ['iniciante', 'intermediario'],
        avancado: ['iniciante', 'intermediario', 'avancado'],
        admin: ['iniciante', 'intermediario', 'avancado', 'admin']
      };

      return (hierarchy[level] || []).includes(grade.nivel);
    }

    function showAccessModal(grade) {
      const modal = document.getElementById('kihonAccessModal');
      const text = document.getElementById('kihonAccessModalText');
      if (!modal || !text) return;

      text.textContent = `Este conteúdo requer nível de acesso ${LEVEL_NAMES[grade.nivel] || grade.nivel}.`;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
    }

    function closeAccessModal() {
      const modal = document.getElementById('kihonAccessModal');
      if (!modal) return;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
    }

    function gradeSummary(grade) {
      const summary = {
        tecnicas: 0,
        bases: 0,
        armas: 0
      };

      (grade.tecnicas || []).forEach(tecnica => {
        const tipo = normalizeText(tecnica.tipo);

        if (tipo === 'base') {
          summary.bases++;
        } else if (tipo === 'arma') {
          summary.armas++;
        } else {
          summary.tecnicas++;
        }
      });

      return summary;
    }

    function gradeSummary(grade) {
      const summary = {
        tecnicas: 0,
        bases: 0,
        armas: 0
      };

      (grade.tecnicas || []).forEach(tecnica => {
        const tipo = normalizeText(tecnica.tipo);

        if (tipo === 'base') {
          summary.bases++;
        } else if (tipo === 'arma') {
          summary.armas++;
        } else {
          summary.tecnicas++;
        }
      });

      return summary;
    }

    function buttonMarkup(grade) {
      const allowed = hasAccess(grade);
      const isBreve = grade.status === 'breve';
      const stateClass = isBreve ? 'is-breve' : (!allowed ? 'is-locked' : '');
      const summary = gradeSummary(grade);

      const status = isBreve
        ? '<span class="breve-pill">BREVE</span>'
        : (!allowed ? '<span class="grade-status"><i class="fa-solid fa-lock"></i></span>' : '');

      return `
        <div class="kihon-grade-option" data-grade-wrap="${grade.id}">
          <button type="button"
            class="kihon-grade-btn ${stateClass}"
            data-grade-id="${grade.id}"
            style="background:${grade.background};color:${grade.textColor};"
            aria-disabled="${!allowed}"
            aria-pressed="false">

            <span class="kihon-grade-main">
              <span class="kihon-grade-label">
                <span class="kihon-grade-title">${grade.titulo}</span>
                <span class="kihon-grade-subtitle">${grade.subtitulo}</span>
              </span>

              <span class="kihon-grade-actions">
                ${status}
                <span class="kihon-grade-selected" aria-hidden="true">
                  <i class="fa-solid fa-check"></i>
                </span>
              </span>
            </span>
          </button>

          <div class="kihon-grade-meta" aria-label="${summary.tecnicas} técnicas, ${summary.bases} bases e ${summary.armas} armas">
            <span class="kihon-grade-meta-item">
              <span class="kihon-grade-meta-label">Técnicas</span>
              <span class="kihon-grade-meta-value">${summary.tecnicas}</span>
            </span>
            <span class="kihon-grade-meta-sep">·</span>
            <span class="kihon-grade-meta-item">
              <span class="kihon-grade-meta-label">Bases</span>
              <span class="kihon-grade-meta-value">${summary.bases}</span>
            </span>
            <span class="kihon-grade-meta-sep">·</span>
            <span class="kihon-grade-meta-item">
              <span class="kihon-grade-meta-label">Armas</span>
              <span class="kihon-grade-meta-value">${summary.armas}</span>
            </span>
          </div>
        </div>`;
    }

    function renderSelectors() {
      const selector = document.getElementById('kihonAllSelector');
      if (!selector) return;

      selector.innerHTML = KIHON_GRADES.map(buttonMarkup).join('');

      selector.querySelectorAll('.kihon-grade-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          const grade = KIHON_GRADES.find(g => g.id === this.dataset.gradeId);
          if (!grade) return;

          if (grade.status === 'breve') return;

          if (!hasAccess(grade)) {
            showAccessModal(grade);
            return;
          }

          openGrade(grade.id, true);
        });
      });
    }

    function renderTechniqueCard(tecnica, indiceTecnica) {
      const slug = slugify(tecnica.nome);
      const badgeClass = BADGE_CLASSES[tecnica.tipo] || 'bg-secondary';
      const tipoNormalizado = normalizeText(tecnica.tipo);
      const explicativa = tipoNormalizado === 'base' || tipoNormalizado === 'arma';

      // Base/Arma: badge no canto superior esquerdo, sem numeração.
      // Demais técnicas: número sequencial no canto e badge junto ao nome.
      const marcadorSuperior = explicativa
        ? `<span class="badge ${badgeClass} uy-dynamic-03c9ab1adce8">${tecnica.tipo}</span>`
        : `<span class="kihon-tech-number">${indiceTecnica}</span>`;

      const linhaNome = explicativa
        ? `<span class="text-muted">${tecnica.nome}</span>`
        : `<span class="badge ${badgeClass} me-2">${tecnica.tipo}</span><span class="text-muted">${tecnica.nome}</span>`;

      return `
        <div class="col-lg-2 col-md-6 kihon-dynamic-col"
             data-category="${tipoNormalizado}"
             data-search="${normalizeText(tecnica.nome + ' ' + tecnica.tipo + ' ' + tecnica.descricao.replace(/<[^>]*>/g, ' '))}">
          <div class="blog-item d-flex flex-column position-relative h-100 kihon-grad-card">
            <img class="img-fluid mb-2 kihon-dynamic-img uy-dynamic-9ccc4ca9d661"
                 src="${imagePath(tecnica.nome)}"
                 alt="${tecnica.nome}"
                 data-slug="${slug}"

                 >

            <div class="kihon-placeholder-img uy-dynamic-d0466aa33fa8">
              <i class="fa-solid fa-image"></i>
            </div>

            ${marcadorSuperior}

            <div class="blog-text p-3">
              <div class="mb-2 d-flex align-items-center flex-wrap">
                ${linhaNome}
              </div>
              <p class="mb-2">${tecnica.descricao}</p>
            </div>
          </div>
        </div>`;
    }

    function renderGradeContent(grade) {
      const target = document.getElementById('kihonDynamicContent');
      if (!target) return;

      target.innerHTML = `
        <div class="kihon-grade-content" data-grade="${grade.id}">
          <div class="kihon-grade-intro">
            ${grade.introducao || ''}
          </div>

          <div class="row g-3" id="kihonDynamicGrid">
            ${(() => {
              let sequencial = 0;
              return grade.tecnicas.map(tecnica => {
                const tipo = normalizeText(tecnica.tipo);
                const explicativa = tipo === 'base' || tipo === 'arma';
                if (!explicativa) sequencial++;
                return renderTechniqueCard(tecnica, explicativa ? null : sequencial);
              }).join('');
            })()}
          </div>
        </div>`;
    }

    function openGrade(id, updateHash) {
      const grade = KIHON_GRADES.find(g => g.id === id);
      if (!grade || !hasAccess(grade)) return;

      currentGradeId = grade.id;
      localStorage.setItem('kihonPreferredGrade', grade.id);

      renderGradeContent(grade);

      document.querySelectorAll('.kihon-grade-btn').forEach(btn => {
        const active = btn.dataset.gradeId === grade.id;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', active ? 'true' : 'false');
        const wrap = btn.closest('[data-grade-wrap]');
        if (wrap) wrap.classList.toggle('is-active', active);
      });

      currentFilter = 'todos';
      document.querySelectorAll('.kihon-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === 'todos');
      });

      const search = document.getElementById('kihonSearch');
      if (search) search.value = '';

      applyFilters();
      updatePrevNext();

      if (updateHash) {
        history.replaceState(null, '', `#${grade.id}`);
      }
    }

    function applyFilters() {
      const grid = document.getElementById('kihonDynamicGrid');
      if (!grid) return;

      const query = normalizeText(document.getElementById('kihonSearch')?.value || '');
      const cols = Array.from(grid.querySelectorAll('.kihon-dynamic-col'));

      const counts = {
        todos: 0,
        base: 0,
        arma: 0,
        bloqueio: 0,
        ataque: 0,
        chute: 0,
        tecnicas: 0,
        bases: 0,
        armas: 0
      };

      let visibleCards = 0;

      cols.forEach(col => {
        const category = normalizeText(col.dataset.category || '');
        const searchText = col.dataset.search || '';
        const matchesSearch = !query || searchText.includes(query);

        // Contadores refletem a graduação atual e a busca digitada,
        // independentemente do filtro selecionado.
        if (matchesSearch) {
          counts.todos++;

          if (Object.prototype.hasOwnProperty.call(counts, category)) {
            counts[category]++;
          }

          if (category === 'base') {
            counts.bases++;
          } else if (category === 'arma') {
            counts.armas++;
          } else {
            counts.tecnicas++;
          }
        }

        const matchesFilter =
          currentFilter === 'todos' ||
          category === normalizeText(currentFilter);

        const show = matchesSearch && matchesFilter;
        col.classList.toggle('kihon-card-hidden', !show);

        if (show) visibleCards++;
      });

      document.querySelectorAll('[data-filter-count]').forEach(el => {
        const key = el.dataset.filterCount;
        el.textContent = counts[key] ?? 0;
      });

      const empty = document.getElementById('kihonEmpty');
      if (empty) empty.style.display = visibleCards === 0 ? 'block' : 'none';
    }

    function accessibleGrades() {
      return KIHON_GRADES.filter(g => hasAccess(g));
    }

    function updatePrevNext() {
      const list = accessibleGrades();
      const index = list.findIndex(g => g.id === currentGradeId);
      const prev = document.getElementById('kihonPrevBtn');
      const next = document.getElementById('kihonNextBtn');

      if (!prev || !next) return;

      prev.disabled = index <= 0;
      next.disabled = index < 0 || index >= list.length - 1;

      prev.dataset.target = index > 0 ? list[index - 1].id : '';
      next.dataset.target = index >= 0 && index < list.length - 1 ? list[index + 1].id : '';

      prev.innerHTML = index > 0
        ? `<i class="fa-solid fa-chevron-left me-1"></i> ${list[index - 1].subtitulo}`
        : '<i class="fa-solid fa-chevron-left me-1"></i> Anterior';

      next.innerHTML = index >= 0 && index < list.length - 1
        ? `${list[index + 1].subtitulo} <i class="fa-solid fa-chevron-right ms-1"></i>`
        : 'Próxima <i class="fa-solid fa-chevron-right ms-1"></i>';
    }

    function chooseInitialGrade() {
      const hashId = location.hash.replace('#', '');
      const preferred = localStorage.getItem('kihonPreferredGrade');

      const requested =
        KIHON_GRADES.find(g => g.id === hashId && hasAccess(g)) ||
        KIHON_GRADES.find(g => g.id === preferred && hasAccess(g)) ||
        KIHON_GRADES.find(g => g.id === 'classico' && hasAccess(g)) ||
        accessibleGrades()[0];

      if (requested) openGrade(requested.id, false);
    }

    function refreshForAccessChange() {
      const old = currentGradeId;
      renderSelectors();

      const stillAllowed = KIHON_GRADES.find(g => g.id === old && hasAccess(g));
      if (stillAllowed) {
        openGrade(old, false);
      } else {
        chooseInitialGrade();
      }
    }

    function integrateWithMenuAccessControl() {
      if (!window.MenuAccessControl || typeof window.MenuAccessControl.addLockIcons !== 'function') {
        setTimeout(integrateWithMenuAccessControl, 150);
        return;
      }

      if (window.MenuAccessControl._kihonDynamicIntegrated) return;

      const originalAddLockIcons =
        window.MenuAccessControl.addLockIcons.bind(window.MenuAccessControl);

      window.MenuAccessControl.addLockIcons = function () {
        const result = originalAddLockIcons.apply(this, arguments);

        setTimeout(() => {
          if (window.KihonHub && typeof window.KihonHub.refreshAccess === 'function') {
            window.KihonHub.refreshAccess();
          }
        }, 50);

        return result;
      };

      window.MenuAccessControl._kihonDynamicIntegrated = true;
    }

    function init() {
      renderSelectors();

      document.querySelectorAll('.kihon-filter-btn').forEach(btn => {
        btn.addEventListener('click', function () {
          currentFilter = this.dataset.filter;
          document.querySelectorAll('.kihon-filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          applyFilters();
        });
      });

      document.getElementById('kihonSearch')?.addEventListener('input', applyFilters);

      document.getElementById('kihonAccessModalClose')?.addEventListener('click', closeAccessModal);
      document.getElementById('kihonAccessModal')?.addEventListener('click', function (e) {
        if (e.target === this) closeAccessModal();
      });

      document.getElementById('kihonPrevBtn')?.addEventListener('click', function () {
        if (this.dataset.target) openGrade(this.dataset.target, true);
      });

      document.getElementById('kihonNextBtn')?.addEventListener('click', function () {
        if (this.dataset.target) openGrade(this.dataset.target, true);
      });

      window.addEventListener('hashchange', () => {
        const id = location.hash.replace('#', '');
        const grade = KIHON_GRADES.find(g => g.id === id);
        if (grade && hasAccess(grade)) openGrade(id, false);
      });

      window.addEventListener('userLevelChanged', refreshForAccessChange);
      window.addEventListener('storage', e => {
        if (e.key === 'userLevel') refreshForAccessChange();
      });

      integrateWithMenuAccessControl();
      chooseInitialGrade();

      setTimeout(refreshForAccessChange, 700);
      setTimeout(refreshForAccessChange, 1600);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('site:ready', init);
    } else {
      init();
    }

    window.KihonHub = {
      refreshAccess: refreshForAccessChange,
      openGrade,
      slugify,
      imagePath,
      grades: KIHON_GRADES
    };
  })();
