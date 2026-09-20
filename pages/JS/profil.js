function afficherProfil() {
  const utilisateurSauvegarde = localStorage.getItem('revize_utilisateur');

  const avatar = document.getElementById('User');

  if (!utilisateurSauvegarde || !avatar) {
    return;
  }

  const utilisateur = JSON.parse(utilisateurSauvegarde);

  if (utilisateur.prenom) {
    avatar.textContent = utilisateur.prenom.trim().charAt(0).toUpperCase();
  }
}

window.addEventListener('pageshow', afficherProfil);
