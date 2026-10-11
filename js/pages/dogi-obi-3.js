
    // Função para abrir o modal da Hakama
    function openHakamaModal() {
      document.getElementById('hakamaModal').style.display = 'flex';
      document.body.style.overflow = 'hidden'; // Previne scroll da página de fundo
    }

    // Função para fechar o modal da Hakama
    function closeHakamaModal(event) {
      // Se event existe e o clique foi no backdrop (não no conteúdo)
      if (!event || event.target.id === 'hakamaModal') {
        document.getElementById('hakamaModal').style.display = 'none';
        document.body.style.overflow = 'auto'; // Restaura scroll da página
      }
    }

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        closeHakamaModal();
      }
    });
