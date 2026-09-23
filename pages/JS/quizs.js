"use strict";

/* =========================
   Tableau des quiz
========================= */

const quizsParDefaut = [
	{
		id: "html-01",
		matiere: "HTML",
		titre: "Quiz sur les bases du HTML",
		questions: [
			{
				id: 1,
				question: "À quoi sert le HTML ?",
				reponses: [
					"À créer la structure d'une page",
					"À créer uniquement des animations",
					"À gérer une base de données",
				],
				bonneReponse: 0,
				explication:
					"Le HTML sert à créer la structure et le contenu d'une page.",
			},

			{
				id: 2,
				question: "Quel élément contient le contenu visible d'une page ?",
				reponses: ["head", "body", "title"],
				bonneReponse: 1,
				explication: "L'élément body contient le contenu visible de la page.",
			},

			{
				id: 3,
				question: 'Peut ton mettre plusieurs "h1" sur la même page ?',
				reponses: ["Oui", "Non"],
				bonneReponse: 1,
				explication:
					"L'élément h1 ne peut pas être mis sur une même page mais tous les autres titre si",
			},

			{
				id: 4,
				question: "Quel élément permet de créer une liste à puces ?",
				reponses: ["ul", "li", "ol"],
				bonneReponse: 2,
				explication: "L'élément ol permet de créer une liste numéroté.",
			},
		],
	},

	{
		id: "css-01",
		matiere: "CSS",
		titre: "Quiz sur les bases du CSS",
		questions: [
			{
				id: 1,
				question: "À quoi sert le CSS ?",
				reponses: [
					"À styliser une page",
					"À créer une base de données",
					"À structurer la page HTML",
				],
				bonneReponse: 0,
				explication: "Le CSS sert à gérer l'apparence et la mise en page.",
			},

			{
				id: 2,
				question: "Quelle propriété permet de changer la couleur du texte ?",
				reponses: ["background-color", "font-size", "color"],
				bonneReponse: 2,
				explication:
					"La propriété color permet de modifier la couleur du texte.",
			},

			{
				id: 3,
				question: "Quelle propriété pour ajouter une ombre a un élément ?",
				reponses: ["text-shadow", "shadow-box", "box-shadow"],
				bonneReponse: 1,
				explication:
					"La propriété shadow-box sert a ajouter une ombre autour a un élément ?",
			},

			{
				id: 4,
				question:
					"Quelle propriété pour mettre une boite au centre de la page ?",
				reponses: ["display", "flex-direction", "justify-content"],
				bonneReponse: 2,
				explication:
					"La propriété justify-content sert a centrer une div au centre de l'écran.",
			},

			{
				id: 5,
				question: "Quelle est la propriété css pour créer une ligne du grid ?",
				reponses: [
					"grid-template-columns",
					"tr",
					"grid-template-rows",
					"align-content",
				],
				bonneReponse: 2,
				explication:
					"La propriété grid-template-rows sert a créer une ligne de tableau dans un contenaire.",
			},

			{
				id: 6,
				question: "Que fait la propriété align-self dans un tableau ?",
				reponses: [
					"aligner la div au centre du main",
					"aligner les éléments au centre dans le tableau",
					"rien",
				],
				bonneReponse: 1,
				explication:
					"La propriété galign-self sert a aligner les éléments au centre dans le tableau.",
			},
		],
	},

	{
		id: "javascript-01",
		matiere: "JavaScript",
		titre: "Quiz sur les bases de JavaScript",
		questions: [
			{
				id: 1,
				question: "À quoi sert JavaScript ?",
				reponses: [
					"À ajouter de l'interactivité",
					"À créer uniquement des images",
					"À remplacer le navigateur",
				],
				bonneReponse: 0,
				explication: "JavaScript permet de rendre une page interactive.",
			},

			{
				id: 2,
				question: "Quel mot-clé permet de créer une constante ?",
				reponses: ["constant", "const", "fixed"],
				bonneReponse: 1,
				explication: "Le mot-clé const permet de déclarer une constante.",
			},

			{
				id: 3,
				question: "Quel signe JavaScrit est utilisé pour faire un modulo ?",
				reponses: ["+", "%", "&"],
				bonneReponse: 1,
				explication: "Le signe % permet de calculer un modulo.",
			},

			{
				id: 4,
				question:
					"Quel signe JavaScrit est utilisé pour faire une multiplication ?",
				reponses: ["/", "%", "*"],
				bonneReponse: 2,
				explication:
					"Le signe * permet de faire une multipliation de deux nombres.",
			},

			{
				id: 5,
				question:
					"Quel mot-clé pour déclarer une variable qui est modifiable ?",
				reponses: ["fix", "let", "modif", "dest"],
				bonneReponse: 1,
				explication:
					"Le mot-clé let permet de déclarer une variable modifiable.",
			},

			{
				id: 6,
				question:
					"Quel type d'ouverture de code pour créer un tableau en JavaScript ?",
				reponses: ["[ ]", "( )", "{ }"],
				bonneReponse: 0,
				explication:
					"Le mot-clé let permet de déclarer une variable modifiable.",
			},
		],
	},

	{
		id: "enseignement-01",
		matiere: "Enseignement",
		titre: "Quiz d'enseignement",
		questions: [
			{
				id: 1,
				question: "Quel est la définition de CNV ?",
				reponses: [
					"Compétences Nouvelles Valueurs",
					"Communication Non Violente",
					"Coummunication Sans Violence",
				],
				bonneReponse: 1,
				explication: "La Communication Non Viloente à été créer pour",
			},
		],
	},

	{
		id: "francais-01",
		matiere: "Français",
		titre: "Quiz de français",
		questions: [
			{
				id: 1,
				question: "Qu'est-ce qu'un nom commun ?",
				reponses: [
					"Un mot qui désigne une personne, un objet ou une idée",
					"Un nombre",
					"Une couleur uniquement",
				],
				bonneReponse: 0,
				explication:
					"Un nom commun désigne une personne, un objet, un lieu ou une idée.",
			},
		],
	},

	{
		id: "maths-01",
		matiere: "Mathématiques",
		titre: "Quiz de mathématiques",
		questions: [
			{
				id: 1,
				question: "Combien font 2 + 2 ?",
				reponses: ["3", "4", "5"],
				bonneReponse: 1,
				explication: "2 + 2 est égal à 4.",
			},
		],
	},

	{
		id: "anglais-01",
		matiere: "Anglais",
		titre: "Quiz d'anglais",
		questions: [
			{
				id: 1,
				question: "Que signifie le mot « hello » ?",
				reponses: ["Au revoir", "Merci", "Bonjour"],
				bonneReponse: 2,
				explication: "Hello signifie bonjour en français.",
			},
		],
	},

	{
		id: "histoire-01",
		matiere: "Histoire",
		titre: "Quiz d'histoire",
		questions: [
			{
				id: 1,
				question: "Qu'étudie principalement l'histoire ?",
				reponses: [
					"Les événements du passé",
					"Les planètes",
					"Les formules mathématiques",
				],
				bonneReponse: 0,
				explication: "L'histoire étudie les événements du passé.",
			},
		],
	},

	{
		id: "geographie-01",
		matiere: "Géographie",
		titre: "Quiz de géographie",
		questions: [
			{
				id: 1,
				question: "Que peut étudier la géographie ?",
				reponses: [
					"Les territoires et les populations",
					"Uniquement les verbes",
					"Uniquement les calculs",
				],
				bonneReponse: 0,
				explication:
					"La géographie étudie les territoires, les populations et leurs relations.",
			},
		],
	},
];

/* =========================
   Gestion du localStorage
========================= */

const versionQuiz = "4";

const versionSauvegardee = localStorage.getItem("revize_quizs_version");

let dataQuizs;

if (versionSauvegardee !== versionQuiz) {
	dataQuizs = quizsParDefaut;

	localStorage.setItem("revize_quizs", JSON.stringify(dataQuizs));

	localStorage.setItem("revize_quizs_version", versionQuiz);
} else {
	const quizsSauvegardes = localStorage.getItem("revize_quizs");

	try {
		dataQuizs = JSON.parse(quizsSauvegardes);

		if (!Array.isArray(dataQuizs)) {
			dataQuizs = quizsParDefaut;
		}
	} catch (erreur) {
		console.error("Impossible de charger les quiz sauvegardés.", erreur);

		dataQuizs = quizsParDefaut;
	}
}

/* =========================
   Initialisation de la page
========================= */

document.addEventListener("DOMContentLoaded", function () {
	/* =========================
       Affichage de l'avatar
    ========================= */

	const utilisateurSauvegarde = localStorage.getItem("revize_utilisateur");

	const avatar = document.getElementById("User");

	if (utilisateurSauvegarde && avatar) {
		try {
			const utilisateur = JSON.parse(utilisateurSauvegarde);

			if (utilisateur.prenom) {
				const premiereLettre = utilisateur.prenom
					.trim()
					.charAt(0)
					.toUpperCase();

				avatar.textContent = premiereLettre;
			}
		} catch (erreur) {
			console.error("Impossible de charger l'utilisateur.", erreur);
		}
	}

	/* =========================
       Bouton retour au choix
    ========================= */

	const boutonRetourChoix = document.getElementById("retourChoix");

	if (boutonRetourChoix) {
		boutonRetourChoix.addEventListener("click", function () {
			window.location.assign("./choice.html");
		});
	}

	/* =========================
       Récupération de la matière
    ========================= */

	const parametres = new URLSearchParams(window.location.search);

	const matiereDemandee = parametres.get("matiere");

	const quizSelectionne = dataQuizs.find(function (quiz) {
		return quiz.matiere === matiereDemandee;
	});

	/* =========================
       Éléments HTML
    ========================= */

	const titreQuiz = document.getElementById("titreQuiz");

	const compteurQuestion = document.getElementById("compteurQuestion");

	const texteQuestion = document.getElementById("texteQuestion");

	const listeReponses = document.getElementById("listeReponses");

	const feedback = document.getElementById("feedback");

	const boutonQuestionSuivante = document.getElementById("questionSuivante");

	const resultatFinal = document.getElementById("resultatFinal");

	const scoreFinal = document.getElementById("scoreFinal");

	if (
		!titreQuiz ||
		!compteurQuestion ||
		!texteQuestion ||
		!listeReponses ||
		!feedback ||
		!boutonQuestionSuivante ||
		!resultatFinal ||
		!scoreFinal
	) {
		console.error("Un ou plusieurs éléments HTML du quiz sont introuvables.");

		return;
	}

	if (!quizSelectionne) {
		titreQuiz.textContent = "Quiz introuvable";

		texteQuestion.textContent = "Aucun quiz ne correspond à cette matière.";

		compteurQuestion.textContent = "";

		return;
	}

	/* =========================
       Variables du quiz
    ========================= */

	let indexQuestion = 0;
	let score = 0;
	let aRepondu = false;
	let resultatSauvegarde = false;

	/* =========================
       Afficher une question
    ========================= */

	function afficherQuestion() {
		const questionActuelle = quizSelectionne.questions[indexQuestion];

		titreQuiz.textContent = quizSelectionne.titre;

		compteurQuestion.textContent =
			"Question " +
			(indexQuestion + 1) +
			" sur " +
			quizSelectionne.questions.length;

		texteQuestion.textContent = questionActuelle.question;

		listeReponses.textContent = "";

		feedback.textContent = "";

		texteQuestion.hidden = false;

		compteurQuestion.hidden = false;

		listeReponses.hidden = false;

		feedback.hidden = false;

		resultatFinal.hidden = true;

		boutonQuestionSuivante.hidden = true;

		aRepondu = false;

		questionActuelle.reponses.forEach(function (reponse, indexReponse) {
			const boutonReponse = document.createElement("button");

			boutonReponse.type = "button";

			boutonReponse.className = "reponse-button";

			boutonReponse.textContent = reponse;

			boutonReponse.addEventListener("click", function () {
				verifierReponse(indexReponse, boutonReponse);
			});

			listeReponses.appendChild(boutonReponse);
		});
	}

	/* =========================
       Vérifier une réponse
    ========================= */

	function verifierReponse(indexReponseChoisie, boutonClique) {
		if (aRepondu) {
			return;
		}

		aRepondu = true;

		const questionActuelle = quizSelectionne.questions[indexQuestion];

		const boutonsReponses = listeReponses.querySelectorAll("button");

		boutonsReponses.forEach(function (bouton) {
			bouton.disabled = true;
		});

		const bonneReponse = boutonsReponses[questionActuelle.bonneReponse];

		if (indexReponseChoisie === questionActuelle.bonneReponse) {
			score++;

			boutonClique.style.backgroundColor = "green";

			boutonClique.style.color = "white";

			feedback.textContent = "Bonne réponse ! " + questionActuelle.explication;
		} else {
			boutonClique.style.backgroundColor = "crimson";

			boutonClique.style.color = "white";

			if (bonneReponse) {
				bonneReponse.style.backgroundColor = "green";

				bonneReponse.style.color = "white";
			}

			feedback.textContent =
				"Mauvaise réponse. " + questionActuelle.explication;
		}

		boutonQuestionSuivante.hidden = false;

		if (indexQuestion === quizSelectionne.questions.length - 1) {
			boutonQuestionSuivante.textContent = "Voir le résultat";
		} else {
			boutonQuestionSuivante.textContent = "Question suivante";
		}
	}

	/* =========================
       Question suivante
    ========================= */

	boutonQuestionSuivante.addEventListener("click", function () {
		const derniereQuestion =
			indexQuestion === quizSelectionne.questions.length - 1;

		if (derniereQuestion) {
			afficherResultat();

			return;
		}

		indexQuestion++;

		afficherQuestion();
	});

	/* =========================
       Afficher le résultat
    ========================= */

	function afficherResultat() {
		compteurQuestion.hidden = true;

		texteQuestion.hidden = true;

		listeReponses.textContent = "";

		feedback.hidden = true;

		boutonQuestionSuivante.hidden = true;

		resultatFinal.hidden = false;

		scoreFinal.textContent =
			"Tu as obtenu " +
			score +
			" bonne(s) réponse(s) sur " +
			quizSelectionne.questions.length +
			".";

		sauvegarderResultat();
	}

	/* =========================
       Sauvegarder le résultat
    ========================= */

	function sauvegarderResultat() {
		if (resultatSauvegarde) {
			return;
		}

		resultatSauvegarde = true;

		const anciennesDonnees = localStorage.getItem("revize_resultats");

		let resultats = [];

		if (anciennesDonnees) {
			try {
				resultats = JSON.parse(anciennesDonnees);

				if (!Array.isArray(resultats)) {
					resultats = [];
				}
			} catch (erreur) {
				console.error("Impossible de lire les résultats.", erreur);

				resultats = [];
			}
		}

		const nouveauResultat = {
			id: Date.now(),
			quizId: quizSelectionne.id,
			matiere: quizSelectionne.matiere,
			score: score,
			total: quizSelectionne.questions.length,
			pourcentage: Math.round((score / quizSelectionne.questions.length) * 100),
			date: new Date().toISOString(),
		};

		resultats.push(nouveauResultat);

		localStorage.setItem("revize_resultats", JSON.stringify(resultats));

		console.log("Résultat sauvegardé :", nouveauResultat);
	} /* =========================
       Démarrage du quiz
    ========================= */

	afficherQuestion();
});
