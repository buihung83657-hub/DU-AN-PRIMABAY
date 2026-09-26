document.getElementById('prima-lead-form').addEventListener('submit', function(e){
          e.preventDefault();
          var form = e.target;
          var name = document.getElementById('lead-name').value;
          var phone = document.getElementById('lead-phone').value;
          var email = document.getElementById('lead-email').value;
          var note = document.getElementById('lead-note').value;

          var data = new FormData();
          data.append('entry.1521644140', name);   // Họ và tên
          data.append('entry.1525090336', phone);  // Số điện thoại
          data.append('entry.239557218', email);   // Email quý khách
          data.append('entry.414245279', note);    // Nhu cầu quan tâm

          fetch('https://docs.google.com/forms/d/e/1FAIpQLSdy2HBUU9Z6ylKGMaKQsMam_FrD08031WeGTYt4fZWIEdQG1g/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: data
          }).then(function(){
            form.reset();
            alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
          }).catch(function(){
            alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.');
          });
        });
