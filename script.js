document.addEventListener('DOMContentLoaded', function() {
    
    let formulaire = document.getElementById('contactForm');
    
    if (formulaire) {
        formulaire.addEventListener('click', function(e) {
            e.preventDefault();
            
            let nom = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let message = document.getElementById('message').value;
            
            var estValide = true;
            
           
            if (nom == '') {
                document.getElementById('nameError').textContent = 'Le nom est requis';
                document.getElementById('nameError').style.display = 'block';
                estValide = false;
            }

            if (email == '' || !email.includes('@')) {
                document.getElementById('emailError').textContent = 'Email invalide';
                document.getElementById('emailError').style.display = 'block';
                estValide = false;
            }
            
            if (message == '') {
                document.getElementById('messageError').textContent = 'Le message est requis';
                document.getElementById('messageError').style.display = 'block';
                estValide = false;
            }
            
            if (estValide) {
                document.getElementById('successMessage').textContent = 'Message envoyé avec succès !';
                document.getElementById('successMessage').style.display = 'block';
                formulaire.reset();
            }
        });
    }
});