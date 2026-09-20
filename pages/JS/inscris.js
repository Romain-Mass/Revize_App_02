document.addEventListener('DOMContentLoaded', function () {
  const formulaire = document.getElementById('inscriptionForm');

  if (!formulaire) {
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

    const resultat = RevizeAuth.creerUtilisateur(prenom, email);

    if (!resultat.succes) {
      alert(resultat.message);

      return;
    }

    console.log('Compte créé :', resultat.utilisateur);

    window.location.href = './compte.html';
  });
});
