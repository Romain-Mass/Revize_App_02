document.addEventListener('DOMContentLoaded', function () {
  const utilisateur = RevizeAuth.recupererUtilisateurConnecte();

  if (!utilisateur) {
    window.location.href = './inscription.html';

    return;
  }

  const zoneNom = document.getElementById('userName');

  const zoneEmail = document.getElementById('userEmail');

  const boutonDeconnexion = document.getElementById('logoutButton');

  if (zoneNom) {
    zoneNom.textContent = utilisateur.prenom;
  }

  if (zoneEmail) {
    zoneEmail.textContent = utilisateur.email;
  }

  if (boutonDeconnexion) {
    boutonDeconnexion.addEventListener('click', function () {
      RevizeAuth.seDeconnecter();

      window.location.href = './inscription.html';
    });
  }
});
