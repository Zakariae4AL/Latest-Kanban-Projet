
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Le challenge

Les utilisateurs doivent pouvoir :

- Afficher la disposition optimale de l'application en fonction de la taille de l'écran de leur appareil
- Voir les états de survol pour tous les éléments interactifs de la page
- Créer, lire, mettre à jour et supprimer des tableaux et des tâches
- Recevez des validations de formulaire lorsque vous essayez de créer/modifier des tableaux et des tâches
- Marquer les sous-tâches comme terminées et déplacer les tâches entre les colonnes
- Masquer/afficher la barre latérale du tableau

Comportement attendu :

- Planches
   - En cliquant sur différents tableaux dans la barre latérale, vous passerez au tableau sélectionné.
   - Cliquer sur "Créer un nouveau tableau" dans la barre latérale ouvre le modal "Ajouter un nouveau tableau".
   - Cliquer dans le menu déroulant « Modifier le tableau » ouvre le modal « Modifier le tableau » où les détails peuvent être modifiés.
   - Des colonnes sont ajoutées et supprimées pour les modaux Ajouter/Modifier un tableau.
   - La suppression d'un tableau supprime toutes les colonnes et tâches et nécessite une confirmation.
- Colonnes
   - Un tableau a besoin d'au moins une colonne avant de pouvoir ajouter des tâches. S'il n'existe aucune colonne, le bouton « Ajouter une nouvelle tâche » dans l'en-tête est désactivé.
   - Cliquer sur "Ajouter une nouvelle colonne" ouvre le modal "Modifier le tableau" où les colonnes sont ajoutées.
- Tâches
   - L'ajout d'une nouvelle tâche l'ajoute en bas de la colonne correspondante.
   - La mise à jour du statut d'une tâche déplacera la tâche vers la colonne appropriée.

Bonus:

- Les tâches peuvent être glissées et déposées dans une nouvelle colonne.





### Built with

- [TailwindCSS](https://tailwindcss.com/) - CSS Framework
- Drag and Drop API
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - State management tool


