
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

let elementListeCommune = document.querySelector("#listecommune");
console.log(elementListeCommune);

for(let i = 0;  i< elementListeCommune.length; i++){
    console.log(elementListeCommune[i]);
}

// la j'ai afficher ma liste .
// ensuite j'ai mis un autre console.log pour ajouter textecontent qui va s'afficher en bas de mon premier realisation

let elementClassCommune = document.querySelectorAll(".commune");
console.log(elementClassCommune);

for(let i = 0; i< elementClassCommune.length; i++){
    console.log(elementClassCommune[i]);
    console.log(elementClassCommune[i].textContent);
    
}

// J'insère une élèment qui s'appellle balise nomé dans le fichier html
let elementSection = document.createElement("section");

let elementBody = document.querySelector('body');
elementBody.appendChild(elementSection);







// deja faut selectionner un balise sur html la ou on va stocker mon texte
let elementArticle = document.querySelector("article");
// ensuite cree sont balise de title
let nouveautitres = document.createElement("h4");

// ecrire ce que je vais mettre a l'interieure de mon texte
nouveautitres.textContent = "Mon article";
//appeller ma selection pour mettre le niveau title. 
elementArticle.appendChild(nouveautitres);


// je mis une image sur ma page en javascript.
let elementImg = document.querySelector('body');

let nouveauImg = document.createElement("img");
nouveauImg.src = "html.jpg";
elementImg.setAttribute("alt" , "Mon html");
elementImg.className = "image-oiseau";
elementImg.classList.add("image" , "image3");

elementImg.classList.remove("image3");

elementBody.appendChild(nouveauImg);













