
          (function() {

            // Sub-bloco 2: IKO1 por peso masculino e feminino
            var iko1Data = [
              {
                label: "Por Peso · Masculino",
                desc: "Campeonato Mundial por Categorias de Peso · Masculino · IKO Kyokushinkaikan",
                rows: [
                  {atleta:"Francisco Filho",  res:"1º", cat:"Super Pesado",  ano:"1997", local:"Osaka, Japão",       gold:true, champ:true},
                  {atleta:"Glaube Feitosa",   res:"2º", cat:"Super Pesado",  ano:"1997", local:"Osaka, Japão"},
                  {atleta:"Marcos Costa",     res:"3º", cat:"Médio",         ano:"1997", local:"Osaka, Japão"},
                  {atleta:"Ewerton Teixeira", res:"1º", cat:"Super Pesado",  ano:"2005", local:"Tokyo, Japão",       gold:true, champ:true},
                  {atleta:"Andrews Nakahara", res:"1º", cat:"Médio",         ano:"2005", local:"Tokyo, Japão",       gold:true, champ:true},
                  {atleta:"Fabiano da Silva", res:"3º", cat:"Pesado",        ano:"2005", local:"Tokyo, Japão"},
                  {atleta:"Felipe Kuwahara",  res:"4º", cat:"Leve",          ano:"2005", local:"Tokyo, Japão"},
                  {atleta:"Eduardo Tanaka",   res:"3º", cat:"Pesado",        ano:"2009", local:"Tokyo/Chiba, Japão"},
                ]
              },
              {
                label: "Por Peso · Feminino",
                desc: "Campeonato Mundial Feminino · IKO Kyokushinkaikan",
                rows: [
                  {atleta:"Fabiana P. Resende", res:"1º", cat:"+64 kg", ano:"1996", local:"Japão (cidade n/d)", gold:true, champ:true},
                  {atleta:"Elaine Ribeiro",      res:"4º", cat:"+64 kg", ano:"1996", local:"Japão (cidade n/d)"},
                  {atleta:"Katia Fukuma",        res:"2º", cat:"-64 kg", ano:"1997", local:"Japão (cidade n/d)"},
                ]
              },
            ];

            var iko1TabsEl   = document.getElementById("iko1Tabs");
            var iko1PanelsEl = document.getElementById("iko1Panels");

            iko1Data.forEach(function(cat, i) {
              var btn = document.createElement("button");
              btn.className = "champ-ytab" + (i === 0 ? " active" : "");
              btn.textContent = cat.label;
              btn.onclick = function() {
                iko1TabsEl.querySelectorAll(".champ-ytab").forEach(function(b){ b.classList.remove("active"); });
                iko1PanelsEl.querySelectorAll(".champ-panel").forEach(function(p){ p.classList.remove("active"); });
                btn.classList.add("active");
                document.getElementById("iko1-panel-" + i).classList.add("active");
              };
              iko1TabsEl.appendChild(btn);

              cat.rows.sort(function(a, b) {
                if (a.atleta < b.atleta) return -1;
                if (a.atleta > b.atleta) return 1;
                return parseInt(b.ano) - parseInt(a.ano);
              });

              var rows = cat.rows.map(function(r) {
                var posCls  = r.gold  ? "br-pos-gold" : "br-pos";
                var nameCls = r.champ ? "br-champ"    : "";
                return "<tr>"
                  + "<td class=\"" + nameCls + "\">" + r.atleta + "</td>"
                  + "<td class=\"" + posCls  + "\" style=\"white-space:nowrap;\">" + r.res + "</td>"
                  + "<td>" + r.cat + "</td>"
                  + "<td style=\"white-space:nowrap;\">" + r.ano + "</td>"
                  + "<td style=\"white-space:nowrap;color:#555;\">" + (r.local || "—") + "</td>"
                  + "</tr>";
              }).join("");

              var div = document.createElement("div");
              div.className = "champ-panel" + (i === 0 ? " active" : "");
              div.id = "iko1-panel-" + i;
              div.innerHTML = "<p class=\"text-muted small mb-3\">" + cat.desc + "</p>"
                + "<div style=\"overflow-x:auto;\">"
                + "<table class=\"br-table\"><thead><tr>"
                + "<th>Atleta</th><th>Colocação</th><th>Categoria</th><th>Ano</th><th>Local</th>"
                + "</tr></thead><tbody>" + rows + "</tbody></table></div>"
                + "<p class=\"br-note\">Fonte: prokyokushin.com · IKO Kyokushinkaikan</p>";
              iko1PanelsEl.appendChild(div);
            });

            // Bloco 3: Outras organizações — tabela direta
            var outrasRows = [
              {atleta:"Hellen Cristina",        res:"1º", cat:"+65 kg",                 ano:"2019", local:"Moscou, Rússia",  org:"Rengokai / KWU", gold:true, champ:true},
              {atleta:"Vitória Moreschi",  res:"1º", cat:"-60 kg",                 ano:"2019", local:"Santiago, Chile", org:"WKB World Cup",  gold:true, champ:true},
              {atleta:"Gabriela Reffatti",       res:"1º", cat:"15-17 anos, +60 kg",     ano:"2019", local:"Santiago, Chile", org:"WKB World Cup",  gold:true, champ:true},
              {atleta:"Vitor G. F. Barea",       res:"1º", cat:"15-17 anos, pesado",     ano:"2019", local:"Santiago, Chile", org:"WKB World Cup",  gold:true, champ:true},
              {atleta:"Pedro P. Placedino",      res:"3º", cat:"-65 kg",                 ano:"2019", local:"Santiago, Chile", org:"WKB World Cup"},
              {atleta:"Jeferson da Conceição", res:"3º", cat:"+80 kg",         ano:"2019", local:"Santiago, Chile", org:"WKB World Cup"},
              {atleta:"Heloisa B. de Oliveira",  res:"3º", cat:"-60 kg",                 ano:"2019", local:"Santiago, Chile", org:"WKB World Cup"},
              {atleta:"Renata Borba",            res:"1º", cat:"Fem. abs. médio",   ano:"2018", local:"Xangai, China",   org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Camila Sayuri Reis",      res:"1º", cat:"Juvenil feminino",        ano:"2018", local:"Xangai, China",   org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Renata Borba",            res:"1º", cat:"Peso médio",         ano:"2023", local:"Santiago, Chile", org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Hanna Aguiar",            res:"1º", cat:"Feminina leve",           ano:"2023", local:"Santiago, Chile", org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Pedro H. Américo",   res:"1º", cat:"14 anos, leve avançado", ano:"2023", local:"Santiago, Chile", org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Fabiano do Santos",       res:"3º", cat:"-70 kg",                 ano:"2023", local:"Santiago, Chile", org:"IKO Matsushima"},
              {atleta:"Renata Borba",            res:"1º", cat:"Peso médio",         ano:"2025", local:"Maebashi, Japão", org:"IKO Matsushima", gold:true, champ:true},
              {atleta:"Hanna Aguiar",            res:"1º", cat:"Feminina leve",           ano:"2025", local:"Maebashi, Japão", org:"IKO Matsushima", gold:true, champ:true},
            ];

            outrasRows.sort(function(a, b) {
              if (a.atleta < b.atleta) return -1;
              if (a.atleta > b.atleta) return 1;
              return parseInt(b.ano) - parseInt(a.ano);
            });

            var thead = "<thead><tr><th>Atleta</th><th>Colocação</th><th>Categoria</th><th>Ano</th><th>Local</th><th>Organização</th></tr></thead>";
            var tbody = "<tbody>" + outrasRows.map(function(r) {
              var posCls  = r.gold  ? "br-pos-gold" : "br-pos";
              var nameCls = r.champ ? "br-champ"    : "";
              return "<tr>"
                + "<td class=\"" + nameCls + "\">" + r.atleta + "</td>"
                + "<td class=\"" + posCls  + "\" style=\"white-space:nowrap;\">" + r.res + "</td>"
                + "<td>" + r.cat + "</td>"
                + "<td style=\"white-space:nowrap;\">" + r.ano + "</td>"
                + "<td style=\"white-space:nowrap;color:#555;\">" + r.local + "</td>"
                + "<td style=\"color:#aaa;font-size:11px;\">" + r.org + "</td>"
                + "</tr>";
            }).join("") + "</tbody>";

            document.getElementById("outrasTable").innerHTML = thead + tbody;

          })();
