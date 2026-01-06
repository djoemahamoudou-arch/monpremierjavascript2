
function calculerAge() {
    const anneeNaissance = document.getElementById("anneeNaissance").value;
    const anneeActuelle = new Date().getFullYear();
    const nom = document.getElementById("nom").value;

    if ( anneeNaissance <= anneeActuelle) {
        const age = anneeActuelle - anneeNaissance;

        document.getElementById("age_calcule").textContent = age;
        document.getElementById("nom_affiche").textContent = nom;
//  c'est pour afficher l'alert sur ma page pour indiquer si cette personne est majeur ou mineur.
        if (age >= 18) {
            alert("Cette personne est majeure"); 
        } else {
            alert("Cette personne est mineure");
        }  
    }  
};






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













