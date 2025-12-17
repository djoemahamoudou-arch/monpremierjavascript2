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
let elementSpanNomUtilisateur = document.querySelector("#messageUtilisateur");
elementSpanNomUtilisateur.textContent = messageSalutation;


elementInputNom2.addEventListener("change" , (event) => {
    console.log(event.target.value);
    messageSalutation = `Bonjour ${event.target.vallue}`;
});
