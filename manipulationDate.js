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



function afficherHeures() {
            const maintenant = new Date();

             // Heure locale (appareil)
    document.getElementById("heureLocale").textContent =
        maintenant.toLocaleTimeString("fr-FR", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        
             // Heure Paris
      document.getElementById("heureParis").textContent =
            maintenant.toLocaleTimeString("fr-FR", {
            timeZone: "Europe/Paris",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
         
            // Heure Tokyo
            document.getElementById("heureTokyo").textContent =
                maintenant.toLocaleTimeString("fr-FR", {
                    timeZone: "Asia/Tokyo",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                });
        }

        // Mise à jour chaque seconde
        afficherHeures();
        setInterval(afficherHeures, 1000);
    








