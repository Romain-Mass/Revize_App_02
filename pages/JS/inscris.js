document.addEventListener('DOMContentLoaded', function () {
  const formulaire = document.getElementById('inscriptionForm');

  if (!formulaire) {
    console.log('Formulaire introuvable.');
    return;
  }

  formulaire.addEventListener('submit', function (event) {
    event.preventDefault();

    const prenom = document.getElementById('firstName').value.trim();

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();

    if (prenom === '' || email === '' || password === '') {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    const utilisateur = {
      prenom: prenom,
      email: email,
      dateCreation: new Date().toISOString(),
    };

    localStorage.setItem('revize_utilisateur', JSON.stringify(utilisateur));

    console.log('Utilisateur sauvegardé :', utilisateur);

    window.location.href = './compte.html';
  });
});
