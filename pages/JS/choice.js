'use strict';

document.addEventListener('click', function (event) {
  const bouton = event.target.closest('.quiz-button');

  if (!bouton) {
    return;
  }

  event.preventDefault();

  const matiere = bouton.dataset.matiere;

  if (!matiere) {
    console.error('Le bouton ne possède pas de matière.');

    return;
  }

  console.log('Matière sélectionnée :', matiere);

  const matiereEncodee = encodeURIComponent(matiere);

  window.location.assign('./quiz.html?matiere=' + matiereEncodee);
});
