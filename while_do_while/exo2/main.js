/////////////////////////////Exo 1
// let tab = ["Alixe", "Hedi", "Isma", "Johan", "Louis", "Walid", "Jonathan", "Stephan", "Soufiane"];
// let i = 0
// while (i < 9) {
//     console.log("Bonjour " + tab[i]);
//     i++
// }


/////////////////////////////Exo 2
// let tab = ["pomme", "poire", "fraise", "ananas", "cerise", "orange"];
// while (tab.length > 0) {
//     tab.pop();
// }
// console.log(tab);


/////////////////////////////Exo 3
// let panierLegumes = ["courgette", "carotte", "aubergine", "navet"];
// let taille = panierLegumes.length;
// let caisseLegumes = [];
// while (panierLegumes.length > 0) {
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift();
// }
// console.log(panierLegumes);
// console.log(taille);
// console.log(caisseLegumes);


/////////////////////////////Exo 4
// let question = prompt("Combien font 2 + 2");
// let reponse = 4;
// while (question != reponse) {
//     question = prompt("Mauvaise réponse");
// }
// alert("bien joué");


/////////////////////////////Exo 5
// let question = prompt("Le ciel est ?");
// let reponse = "bleu";
// do {
//     question = prompt("mauvaise réponse")
// } while (question != reponse);
// console.log("Bien joué");


/////////////////////////////Exo 6
// let date = new Date;
// let year = date.getFullYear();
// let random = Math.floor(Math.random() * 51) + 1970;
// let reponse;
// let essaie = 3;

// while (essaie > 0) {
//     reponse = prompt(`Si je suis née en ${random} , quel âge ai-je aujourd'hui ?`);
//     if (parseInt(reponse)) {
//         if (reponse != year-random) {
//             alert(`Encore ${essaie - 1} essaies`);
//             essaie--
//         } else {
//             alert(`Bravo tu as trouver`)
//             break
//         }
//     } else {
//         alert("Veuillez rentrer une réponse");
//     }
// }


/////////////////////////////Exo 7
// let panier = [];

// while(panier.length < 8){
//     panier.push((prompt("Veuillez rajouter un fruit\n" + panier.length + "/8")).toLowerCase());
//     panier[panier.length - 1] = panier[panier.length - 1].charAt(0).toUpperCase() + panier[panier.length - 1].substring(1);
// }

// let satisfait = false;
// let retirer;
// let index;

// while(!satisfait){
//     retirer = (prompt(panier + "\nVoulez-vous retirer un fruit?")).toLowerCase();
//     retirer = retirer.charAt(0).toUpperCase() + retirer.substring(1);
//     index = panier.findIndex(fruit => fruit == retirer);
//     if(index >= 0){
//         panier.splice(index,1);
//     }
//     else{
//         satisfait = true;
//         alert("Bon appétit");
//     }
// }
// alert(panier);