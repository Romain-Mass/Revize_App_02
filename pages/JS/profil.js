document.addEventListener("DOMContentLoaded", function () {
	const utilisateur = RevizeAuth.recupererUtilisateurConnecte();

	const avatar = document.getElementById("User");

	if (!utilisateur) {
		console.log("Aucun utilisateur connecté.");

		window.location.href = "./inscription.html";

		return;
	}

	if (avatar) {
		avatar.textContent = RevizeAuth.obtenirInitiale(utilisateur);
	}

	console.log("Utilisateur récupéré :", utilisateur);
});
