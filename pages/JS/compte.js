document.addEventListener('DOMContentLoaded', function () {
  const utilisateurSauvegarde = localStorage.getItem('revize_utilisateur');

  const avatar = document.getElementById('User');

  const zoneNom = document.getElementById('userName');

  const zoneEmail = document.getElementById('userEmail');

  const revizeChoice = document.getElementById('reviz');

  const boutonDeconnexion = document.getElementById('logoutButton');

  if (!utilisateurSauvegarde) {
    console.log('Aucun utilisateur sauvegardé.');

    window.location.href = 'inscription.html';
    return;
  }

  const utilisateur = JSON.parse(utilisateurSauvegarde);

  console.log('Utilisateur chargé :', utilisateur);

  if (zoneNom) {
    zoneNom.textContent = utilisateur.prenom;
  }

  if (zoneEmail) {
    zoneEmail.textContent = utilisateur.email;
  }

  if (avatar && utilisateur.prenom) {
    const premiereLettre = utilisateur.prenom.trim().charAt(0).toUpperCase();

    avatar.textContent = premiereLettre;
  }

  if (boutonDeconnexion) {
    boutonDeconnexion.addEventListener('click', function () {
      localStorage.removeItem('revize_utilisateur');

      window.location.href = 'inscription.html';
    });
  }

  if (revizeChoice) {
    revizeChoice.addEventListener('click', function () {
      window.location.href = './choice.html';
    });
  }
});
