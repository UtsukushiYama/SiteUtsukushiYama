
          (function() {
            var data = [
              { ed:1,  ano:1975, places:[
                {n:"Katsuaki Sato",      p:"Japão"},
                {n:"Hatsuo Royama",      p:"Japão"},
                {n:"Joko Nimoniya",      p:"Japão"},
                {n:"Daigo Oishi",        p:"Japão"},
                {n:"Toshikazu Sato",     p:"Japão"},
                {n:"Takashi Azuma",      p:"Japão"},
                {n:"Charles Martin",     p:"EUA"},
                {n:"Frank Clark",        p:"EUA"},
              ]},
              { ed:2,  ano:1979, places:[
                {n:"Makoto Nakamura",    p:"Japão"},
                {n:"Keiji Sanpei",       p:"Japão"},
                {n:"Willie Williams",    p:"EUA"},
                {n:"Takashi Azuma",      p:"Japão"},
                {n:"Howard Collins",     p:"Inglaterra"},
                {n:"Bernard Creton",     p:"França"},
                {n:"Ceno Maxer",         p:"Liechtenstein"},
                {n:"Koichi Kawabata",    p:"Japão"},
              ]},
              { ed:3,  ano:1984, places:[
                {n:"Makoto Nakamura",    p:"Japão"},
                {n:"Keiji Sanpei",       p:"Japão"},
                {n:"Shokei Matsui",      p:"Japão"},
                {n:"Ademir da Costa",    p:"Brasil", br:true},
                {n:"Yasuto Onishi",      p:"Japão"},
                {n:"Nicholas da Costa",  p:"Inglaterra"},
                {n:"Keizo Tahara",       p:"Japão"},
                {n:"Dave Greaves",       p:"Inglaterra"},
              ], kanto:"Troféu Kanto-shô (garra): Jemusu Kitamura – Brasil"},
              { ed:4,  ano:1987, places:[
                {n:"Shokei Matsui",      p:"Japão"},
                {n:"Andy Hug",           p:"Suíça"},
                {n:"Akira Masuda",       p:"Japão"},
                {n:"Michael Thompson",   p:"Inglaterra"},
                {n:"Ademir da Costa",    p:"Brasil", br:true},
                {n:"Hiroki Kurosawa",    p:"Japão"},
                {n:"Y. Schichinohe",     p:"Japão"},
                {n:"Nicholas da Costa",  p:"Inglaterra"},
              ]},
              { ed:5,  ano:1991, places:[
                {n:"Kenji Midori",       p:"Japão"},
                {n:"Akira Masuda",       p:"Japão"},
                {n:"Hiroki Kurosawa",    p:"Japão"},
                {n:"Jean Riviere",       p:"Canadá"},
                {n:"Kenji Yamaki",       p:"Japão"},
                {n:"Yutaka Ishii",       p:"Japão"},
                {n:"Y. Schichinohe",     p:"Japão"},
                {n:"Johnny Kleyn",       p:"Holanda"},
              ], kanto:"Troféu Kanto-shô (garra): Francisco Filho – Brasil"},
              { ed:6,  ano:1995, places:[
                {n:"Kenji Yamaki",       p:"Japão"},
                {n:"Hajime Kazumi",      p:"Japão"},
                {n:"Francisco Filho",    p:"Brasil", br:true},
                {n:"Garry O'Neill",     p:"Austrália"},
                {n:"Nicholas Pettas",    p:"Dinamarca"},
                {n:"Hiroki Kurosawa",    p:"Japão"},
                {n:"Luciano Basile",     p:"Brasil", br:true},
                {n:"Glaube Feitosa",     p:"Brasil", br:true},
              ]},
              { ed:7,  ano:1999, places:[
                {n:"Francisco Filho",    p:"Brasil", br:true},
                {n:"Hajime Kazumi",      p:"Japão"},
                {n:"A. Pichkunov",       p:"Rússia"},
                {n:"Glaube Feitosa",     p:"Brasil", br:true},
                {n:"Nicholas Pettas",    p:"Dinamarca"},
                {n:"Yasuhiro Kimura",    p:"Japão"},
                {n:"Ryuta Noji",         p:"Japão"},
                {n:"Ryu Narushima",      p:"Japão"},
              ]},
              { ed:8,  ano:2003, places:[
                {n:"Hitoshi Kiyama",     p:"Japão"},
                {n:"Sergey Plekhanov",   p:"Rússia"},
                {n:"Ewerton Teixeira",   p:"Brasil", br:true},
                {n:"Glaube Feitosa",     p:"Brasil", br:true},
                {n:"Lechi Kurbanov",     p:"Rússia"},
                {n:"Yasuhiro Kimura",    p:"Japão"},
                {n:"Sergey Osipov",      p:"Rússia"},
                {n:"Hiroyuki Kidachi",   p:"Japão"},
              ]},
              { ed:9,  ano:2007, places:[
                {n:"Ewerton Teixeira",   p:"Brasil", br:true},
                {n:"Jan Soukup",         p:"Rep. Tcheca"},
                {n:"Artur Hovhannisian", p:"Armênia"},
                {n:"D. Sadvokasov",      p:"Cazaquistão"},
                {n:"Andrey Stepin",      p:"Rússia"},
                {n:"Alejandro Navarro",  p:"Espanha"},
                {n:"Eduardo Tanaka",     p:"Brasil", br:true},
                {n:"Tatsuya Murata",     p:"Japão"},
              ]},
              { ed:10, ano:2011, places:[
                {n:"T. Nikoleishvili",   p:"Rússia"},
                {n:"Ewerton Teixeira",   p:"Brasil", br:true},
                {n:"G. Kapanadze",       p:"Geórgia"},
                {n:"Makoto Akaishi",     p:"Japão"},
                {n:"Zahari Damyanov",    p:"Bulgária"},
                {n:"Nikolai Davydov",    p:"Rússia"},
                {n:"O. Ieromenko",       p:"Ucrânia"},
                {n:"Ilya Karpenko",      p:"Rússia"},
              ]},
              { ed:11, ano:2015, places:[
                {n:"Zahari Damyanov",    p:"Bulgária"},
                {n:"Djema Belkhodja",    p:"França"},
                {n:"D. Sadvokasov",      p:"Cazaquistão"},
                {n:"Kirill Kochnev",     p:"Rússia"},
                {n:"Ashot Zarinyan",     p:"Rússia"},
                {n:"Mikio Ueda",         p:"Japão"},
                {n:"Ivan Mezentsev",     p:"Rússia"},
                {n:"Shouki Arata",       p:"Japão"},
              ]},
              { ed:12, ano:2019, places:[
                {n:"Mikio Ueda",         p:"Japão"},
                {n:"A. Eremenko",        p:"Rússia"},
                {n:"Andrei Luzin",       p:"Rússia"},
                {n:"Yuta Takahashi",     p:"Japão"},
                {n:"K. Kovalenko",       p:"Rússia"},
                {n:"Ryunosuke Hoshi",    p:"Japão"},
                {n:"Igor Zagainov",      p:"Rússia"},
                {n:"Shouki Arata",       p:"Japão"},
              ]},
              { ed:13, ano:2023, places:[
                {n:"A. Eremenko",        p:"Rússia"},
                {n:"Kaito Nishimura",    p:"Japão"},
                {n:"Andrei Luzin",       p:"Rússia"},
                {n:"Antonio Tusseau",    p:"França"},
                {n:"Igor Zagainov",      p:"Rússia"},
                {n:"K. Kovalenko",       p:"Rússia"},
                {n:"Maksim Ekimov",      p:"Rússia"},
                {n:"Aleksei Fedoseev",   p:"Rússia"},
              ]},
            ];

            var ordinals = ["Campeão","2º","3º","4º","5º","6º","7º","8º"];
            var tabsEl = document.getElementById("champTabs");
            var panelsEl = document.getElementById("champPanels");

            data.forEach(function(c, i) {
              var btn = document.createElement("button");
              btn.className = "champ-ytab" + (i === 0 ? " active" : "");
              btn.textContent = c.ano;
              btn.onclick = function() {
                document.querySelectorAll(".champ-ytab").forEach(function(b) { b.classList.remove("active"); });
                document.querySelectorAll(".champ-panel").forEach(function(p) { p.classList.remove("active"); });
                btn.classList.add("active");
                document.getElementById("champ-panel-" + i).classList.add("active");
              };
              tabsEl.appendChild(btn);

              var top3 = c.places.slice(0, 3);
              var rest = c.places.slice(3);

              var podiumHtml = top3.map(function(pl, j) {
                var itemCls = j === 0 ? "champ-podium-item first" : "champ-podium-item";
                var nameCls = pl.br ? "champ-pname champ-br" : "champ-pname";
                var ctryCls = pl.br ? "champ-pctry champ-br" : "champ-pctry";
                return "<div class=\"" + itemCls + "\"><div class=\"champ-pos\">" + ordinals[j] + "</div><div class=\"" + nameCls + "\">" + pl.n + "</div><div class=\"" + ctryCls + "\">" + pl.p + "</div></div>";
              }).join("");

              var restHtml = rest.map(function(pl, j) {
                var nameCls = pl.br ? "champ-br" : "";
                var ctryCls = pl.br ? "champ-rctry champ-br" : "champ-rctry";
                return "<div class=\"champ-rest-row\"><span class=\"champ-rpos\">" + ordinals[j + 3] + "</span><span class=\"" + nameCls + "\">" + pl.n + "</span><span class=\"" + ctryCls + "\">" + pl.p + "</span></div>";
              }).join("");

              var kantoHtml = c.kanto ? "<div class=\"champ-kanto\">" + c.kanto + "</div>" : "";

              var div = document.createElement("div");
              div.className = "champ-panel" + (i === 0 ? " active" : "");
              div.id = "champ-panel-" + i;
              div.innerHTML = "<div class=\"champ-edition-label\">" + c.ed + "º Campeonato Mundial &nbsp;·&nbsp; Tokyo, Japão &nbsp;·&nbsp; " + c.ano + "</div>"
                + "<div class=\"champ-podium\">" + podiumHtml + "</div>"
                + "<div class=\"champ-rest\">" + restHtml + "</div>"
                + kantoHtml;
              panelsEl.appendChild(div);
            });
          })();
