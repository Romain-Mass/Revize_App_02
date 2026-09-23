"use strict";

document.addEventListener("DOMContentLoaded", function () {
	const utilisateur = RevizeAuth.recupererUtilisateurConnecte();

	if (!utilisateur) {
		window.location.href = "./inscription.html";

		return;
	}

	const zoneNom = document.getElementById("userName");
	const zoneEmail = document.getElementById("userEmail");
	const revizCours = document.getElementById("reviz");
	const boutonDeconnexion = document.getElementById("logoutButton");

	if (zoneNom) {
		zoneNom.textContent = utilisateur.prenom;
	}

	if (zoneEmail) {
		zoneEmail.textContent = utilisateur.email;
	}

	/* ========================================================
	   Affichage dynamique des scores depuis l'utilisateur
	   ======================================================== */
	// Liste exacte des identifiants (id) de vos spans dans votre tableau HTML
	const listeIdsMatieres = [
		"html",
		"css",
		"js",
		"enseignement",
		"fra",
		"hg",
		"maths",
		"anglais",
	];

	listeIdsMatieres.forEach(function (idMatiere) {
		const elementSpan = document.getElementById(idMatiere);

		if (elementSpan) {
			// On vérifie si l'utilisateur possède un score pour cet identifiant
			if (utilisateur.scores && utilisateur.scores[idMatiere] !== undefined) {
				elementSpan.textContent = utilisateur.scores[idMatiere];
			} else {
				elementSpan.textContent = "0"; // Score par défaut si vide
			}
		}
	});
	/* ======================================================== */

	if (revizCours) {
		revizCours.addEventListener("click", () => {
			window.location.href = "./choice.html";
		});
	}

	if (boutonDeconnexion) {
		boutonDeconnexion.addEventListener("click", function () {
			RevizeAuth.seDeconnecter();

			window.location.href = "./inscription.html";
		});
	}
});
