
function calculerAge() {
    const anneeNaissance = parseInt(document.getElementById("anneeNaissance").value);
    if (!anneeNaissance) return;

    const anneeActuelle = new Date().getFullYear();
    const age = anneeActuelle - anneeNaissance;
    
    // Sélectionne l’élément HTML qui a l’id="age" value qui veut dire la valeur (en général un champ <input>)
    document.getElementById("age").value = age >= 0 ? age : "";
}

// J'utilise l'identifiant pour trouver le bon élément.
let elementBoutonValider = document.getElementById("boutonValider");
// J'ai récuperer une balise html pour le monter dans mon page sur la partie console.
console.log(elementBoutonValider);

// ajouter d'autre fonction on mettant le point apres avoir mis la balise.
console.log(elementBoutonValider.clientHeight);

// j'ai récuperer la balise "unput" puis l'idi "nom" sur html pour le mettre sur javscript pour ensuite afficher dans mon page.
let elementInputNom = document.querySelector("#nom");
console.log(elementInputNom);
console.log(document.head);
console.log(document.title);

// 
let elementDivMayotte = document.querySelector("#mayotte");
console.log(elementDivMayotte);
