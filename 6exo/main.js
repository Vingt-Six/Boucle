// Exo 1
// let multi = 5;
// for (let i = 0; i < 10; i++) {
//     console.log(multi + " x " + i + " = " + (multi*i));
// }


// Exo 2
// let multi = 5;
// for (let i = 0; i < 10; i+=2) {
//     console.log(multi + " x " + i + " = " + (multi*i));
// }


// Exo 3
// for (let i = 20; i >= 0; i-=2) {
//     console.log(i);
// }


// Exo 4
// let tab = ["Hedi", "Alixe","Isma", "Nassim", "Louis", "Walid", "Anthony", "Soufiane", "Steven", "Cyril", "Margaux", "Johnathan", "Stephan", "Johan", "Geoffrey"];
// let supcinq = []
// tab.forEach(element => {
//     if (element.length > 5) {
//         supcinq.push(element);
//     }
// });
// console.log(supcinq);


// Exo 5
// let sommes = [ 14 , 7 , 97 , 65 , 247 , 67 , 101 , 4 , 34 , 78 , 1 , 900 , 0 , 11 , 32 , 23 , 61 ];
// let grossesSommes = [];
// for (let i = 0; i < sommes.length; i++) {
//     if (sommes[i] > 60) {
//         grossesSommes.push(sommes[i]);
//         sommes.splice(i, 1);
//         i--
//     }    
// }
// console.log(sommes);
// console.log(grossesSommes);


// Exo 6

// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];
// for (let i = 0; i < donnees.length; i++) {
//     if (typeof donnees[i] == 'number') {
//         typeNumber.push(donnees[i])
//         donnees.splice(i, 1);
//         i--
//     } else if (typeof donnees[i] == 'string') {
//         typeString.push(donnees[i])
//         donnees.splice(i, 1);
//         i--
//     } else if (typeof donnees[i] == 'object') {
//         typeObject.push(donnees[i])
//         donnees.splice(i, 1);
//         i--
//     } else {
//         typeAutre.push(donnees[i])
//         donnees.splice(i, 1);
//         i--
//     }
// }
// 
// console.log(donnees);
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);


// Exo 6 (switch)
// let donnees = [14, 7 , 97, {} , "247" , 67 , 101 , true , 34 ,78 , [] ,'coding school' , 0, 11 , 32 , "italie" , 61,null,'cent',100];
// let typeString = [];
// let typeNumber = [];
// let typeObject = [];
// let typeAutre = [];
// for(let i = 0; i < donnees.length; i++){
//     switch (typeof(donnees[i])) {
//         case "string":
//             typeString.push(donnees[i]);
//             break;
//         case "number":
//             typeNumber.push(donnees[i]);
//             break;
//         case "object":
//             typeObject.push(donnees[i]);
//             break;
//         default:
//             typeAutre.push(donnees[i]);
//             break;
//     }
//     donnees.splice(i,1);
//     i--;
// }
// 
// console.log(donnees);
// console.log(typeString);
// console.log(typeNumber);
// console.log(typeObject);
// console.log(typeAutre);