
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const btnText = document.getElementById('btnText');
      const btnSpinner = document.getElementById('btnSpinner');
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnSpinner.style.display = 'inline-block';
      const phone = document.getElementById('phone').value || 'Não informado';
      const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        phone: phone,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        reply_to: document.getElementById('email').value
      };
      emailjs.send('service_g9xpnqk', 'template_a4grtbd', templateParams)
        .then(function(response) {
          console.log('✅ E-mail enviado!', response.status, response.text);
          submitBtn.disabled = false;
          btnText.style.display = 'inline';
          btnSpinner.style.display = 'none';
          const successModal = new bootstrap.Modal(document.getElementById('successModal'));
          successModal.show();
          document.getElementById('contactForm').reset();
        }, function(error) {
          console.error('❌ Erro ao enviar:', error);
          submitBtn.disabled = false;
          btnText.style.display = 'inline';
          btnSpinner.style.display = 'none';
          alert('Erro ao enviar mensagem: ' + JSON.stringify(error) + '\n\nPor favor, tente novamente ou entre em contato diretamente pelo WhatsApp: +55 12 9 9650-9299');
        });
    });
