// je programes les evenement qui sont déclanchés du coté HTML
let elementBoutonValiderDate = document.querySelector("#validerDate");
let elementBoutonValiderDate2 = document.querySelector("#dateDuJourFormat2")

const maDate = new Date();

// c'est pour déclarer la date et aussi l'heure
 elementBoutonValiderDate.addEventListener("click" , function() {
    console.log("## je suis dans le bouton Valider date##");
    elementBoutonValiderDate.innerHTML = Date();
    // Ensuite il me met un autre date en bas ('elementBoutonValiderDate2.textContent = maDate.toDateString();').
    elementBoutonValiderDate2.textContent = maDate.toDateString();
});

// 1. Tout d'abord , je récupère l'élement html qui sera associé a l'évenement keydown
let elementkeydown = document.querySelector("#boutonflech");
// 2.J'associe l'évenement KEYDOWN mon élément html en utilisant la méthode addEventListener(). A l'intérieur de la méthod eAddEvent listener(), je passe une fonction fléchée comme suit '() => {}'


elementkeydown.addEventListener("keydown", (event) => {
    console.log("#je suis dans l'évenement keydown");
    console.log("clé event :" ,event.key);
});



let elementInputNom2 = document.querySelector("#nom");
let messageSalutation; // je déclare une variable vide.

let elementSpanNomUtilisateur = document.querySelector("#age_calcule");
elementSpanNomUtilisateur.textContent = messageSalutation;

// je récupère l'input nom
elementInputNom2.addEventListener("change" , (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.vallue}`;
});

// Envoyer le formulaire
// je vais récupérer les données saisies sur le formule :
/*
-nom
-prénom
-situation
-année de naissance

*/
// je récupere la balise <forme></forme>
let elementForm = document.querySelector('form');

console.log(elementForm);



elementForm.addEventListener("submit" , (event) => {
    event.preventDefault();
    console.log("formulaire:");

    const nom = document.querySelector("#nom").value;
    const prenom = document.querySelector("#prenom").value;
    const select = document.querySelector("#projet").value;
    const année = document.querySelector("#anneeNaissance").value;
    const age = document.querySelector("#age_calcule").value;
   


    console.log(nom);
    console.log(prenom);
    console.log(select);
    console.log(année);
    console.log(age);
});