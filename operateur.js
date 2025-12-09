//addition

let prixUnitaire = 13;
let valeurAjouter = 7;
let valeurReduction = 5;

//Première technique d'addiction
let prixAdditionnel= 50+7;
//j'afffiche la valeur de la variable prixadditionnel
console.log("prixAdditionnel:",prixAdditionnel,"prixUnitaire:",prixUnitaire);


// j'ai calculer avec les variable prixunitaire(3)+valeurAjouter(7)
let prixadditionne2 = prixUnitaire + valeurAjouter;
console.log("prixadditionne2:",prixadditionne2);

// addition des chaines de caracères
//Exemple : "fatima" + "Amina"; Résultat attendu est "fatima Amina"
// le (+) va les assembler on appelle sa concatenation
 // le (+""+) va espacé fatima et amina (console.log(eleve1 + eleve2);
let eleve1 = "fatima";
let eleve2 = "Amina";
console.log(eleve1 +" "+ eleve2);


// je declare l'adddition
let elevecombo = eleve1 + " " + eleve2;
console.log("elevecombo:",elevecombo);


// je declare la soustration
let prixReduit = prixUnitaire - valeurReduction;
console.log("resultat prix reduit : ",prixReduit);



// je déclare la multiplication
let prixMultiplie = prixUnitaire * valeurAjouter;
console.log("resultat prixMultiplie",prixMultiplie);




// je declare la division
let prixDivise = prixUnitaire / valeurAjouter;
console.log("resultat prixDivise",prixDivise);



// les opérateurs de comparaison
// Nous allons comparer les valeur stocker dans les variables.
// Allons-y!

// je vérifie que les deux variable ont la même valeur
// la mm type de valeur

let village2 = "Mamoudzou";
let commune2 = "MAMOUDZOU";
console.log("Réponse de village et commune :",village2 === commune2);
console.log("Réponse de village et commune :",village2 == commune2);


// (superieur(>)/inferieure(<)s'est signe vont montrer qui est grand et qui est petit  
let superieure = 7;
let inferieure = 3;
console.log("reponse",superieure < inferieure);

//ici il nous montre que les valeur ne sont po les même 

let age1 = 15;
let distanceparcourue = 12;
console.log("reponsed'égale",age1 == distanceparcourue);

//ici il nous montre que les valeur sont les même avec le signe

let age2 = 15;
let distanceparcouru = 15;
console.log("reponsed'égale",age2 === distanceparcouru);


