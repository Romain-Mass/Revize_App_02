"use strict";

window.RevizeAuth = {
	lireUtilisateurs: function () {
		const donnees = localStorage.getItem("revize_users");

		if (!donnees) {
			return [];
		}

		try {
			const utilisateurs = JSON.parse(donnees);

			if (Array.isArray(utilisateurs)) {
				return utilisateurs;
			}

			return [];
		} catch (erreur) {
			console.error("Impossible de lire les utilisateurs.", erreur);

			return [];
		}
	},

	sauvegarderUtilisateurs: function (utilisateurs) {
		localStorage.setItem("revize_users", JSON.stringify(utilisateurs));
	},

	genererId: function () {
		if (window.crypto && crypto.randomUUID) {
			return crypto.randomUUID();
		}

		return Date.now().toString(36) + Math.random().toString(36).substring(2);
	},

	creerUtilisateur: function (prenom, email) {
		const utilisateurs = this.lireUtilisateurs();

		const emailNormalise = email.trim().toLowerCase();

		const utilisateurExistant = utilisateurs.find(function (utilisateur) {
			return utilisateur.email === emailNormalise;
		});

		if (utilisateurExistant) {
			return {
				succes: false,
				message: "Un compte existe déjà avec cette adresse e-mail.",
			};
		}

		const nouvelUtilisateur = {
			id: this.genererId(),
			prenom: prenom.trim(),
			email: emailNormalise,
			dateCreation: new Date().toISOString(),
			scores: {}, // Initialisation d'un espace vide pour les futurs scores
		};

		utilisateurs.push(nouvelUtilisateur);

		this.sauvegarderUtilisateurs(utilisateurs);

		localStorage.setItem("revize_current_user_id", nouvelUtilisateur.id);

		return {
			succes: true,
			utilisateur: nouvelUtilisateur,
		};
	},

	recupererUtilisateurConnecte: function () {
		const utilisateurId = localStorage.getItem("revize_current_user_id");

		if (!utilisateurId) {
			return null;
		}

		const utilisateurs = this.lireUtilisateurs();

		const utilisateur = utilisateurs.find(function (utilisateur) {
			return utilisateur.id === utilisateurId;
		});

		return utilisateur || null;
	},

	obtenirInitiale: function (utilisateur) {
		if (!utilisateur || !utilisateur.prenom) {
			return "?";
		}

		return utilisateur.prenom.trim().charAt(0).toUpperCase();
	},

	seDeconnecter: function () {
		localStorage.removeItem("revize_current_user");
	},

	// AJOUT : Sauvegarder le pourcentage d'une matière pour l'utilisateur connecté
	sauvegarderScoreMatiere: function (idMatiere, score) {
		const utilisateurId = localStorage.getItem("revize_current_user_id");
		if (!utilisateurId) return;

		const utilisateurs = this.lireUtilisateurs();
		const index = utilisateurs.findIndex(function (u) {
			return u.id === utilisateurId;
		});

		if (index !== -1) {
			// Sécurité si l'objet scores n'existe pas encore
			if (!utilisateurs[index].scores) {
				utilisateurs[index].scores = {};
			}

			// Enregistrement du score sous l'id de la matière
			utilisateurs[index].scores[idMatiere] = score;

			// Sauvegarde globale dans le localStorage
			this.sauvegarderUtilisateurs(utilisateurs);
		}
	},
};
