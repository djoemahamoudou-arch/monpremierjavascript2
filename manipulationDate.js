const annee = new Date().getFullYear();
document.getElementById("anneeActuelle").textContent = annee;



// Créer un objet Date
const d = new Date();

// getMonth() renvoie 0 à 11, donc on ajoute +1
const moisChiffre = d.getMonth() + 0;

// Afficher dans le span
document.getElementById("moisActuelle").textContent = moisChiffre;

// Créer un objet Date
const Datecomplet = new Date();

// Jour, mois et année
const jour = Datecomplet.getDate().toString().padStart(2, '0'); // jour avec 0 devant si <10
const mois = (Datecomplet.getMonth() + 1).toString().padStart(2, '0'); // mois 1-12 avec 0
const année = Datecomplet.getFullYear();

// Afficher dans le span
document.getElementById("datecomplet").textContent = jour + "/" + mois + "/" + annee;






const maintenant = new Date();

    // Récupérer heures, minutes et secondes
    const heures = String(maintenant.getHours()).padStart(2, '0');
    const minutes = String(maintenant.getMinutes()).padStart(2, '0');
    const secondes = String(maintenant.getSeconds()).padStart(2, '0');

    // Afficher dans le span
    document.getElementById("affichageHeure").textContent = heures + ':' + minutes + ':' + secondes;





// Créer un objet Date pour l'instant actuel
const maintenant2 = new Date();

// Convertir la date pour le fuseau Paris
const heureParis = maintenant2.toLocaleTimeString('fr-FR', { 
    timeZone: 'Europe/Paris',   // fuseau Paris
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false                // format 24h
});

// Afficher dans le span
document.getElementById("affichageHeure2").textContent = heureParis;
 




// Créer un objet Date pour l'instant actuel
const maintenant3 = new Date();

// Convertir la date pour le fuseau Tokyo
const heureTokyo = maintenant3.toLocaleTimeString('fr-FR', { 
    timeZone: 'Asia/Tokyo',   // fuseau Tokyo
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: false              // format 24h
});

// Afficher dans le span
document.getElementById("heureTokyo").textContent = heureTokyo;










