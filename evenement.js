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

