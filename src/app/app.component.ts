import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
  
  title = 'projet';
 

}


function decompteur() {

function mafonction() {
                 var n = -5; // Nombre final du compteur
                 var cpt = 100; // Initialisation du compteur
                 var duree = 1500; // Durée en seconde pendant laquel le compteur ira de 100 à 0
                 var delta = 1000; // On calcule l'intervalle de temps entre chaque rafraîchissement du compteur (durée mise en milliseconde)
  var node = document.getElementById("decompteur"); // On récupère notre noeud où sera rafraîchi la valeur du compteur
                 
        function countdown() {
                   node.innerHTML = "<span >" + cpt + "$" + "</span>";
                   cpt = cpt - 5;
                 
                if (cpt > n) { // Si on est pas arrivé à la valeur finale, on relance notre compteur une nouvelle fois
                    setTimeout(countdown, delta);
                   }
                  
                }
                 
                 setTimeout(countdown, delta); }

  setTimeout(mafonction, 0);
}
setTimeout(decompteur, 50);
