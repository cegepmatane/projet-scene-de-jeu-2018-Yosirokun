AccueilVue = function(joueur)
{
	var corps;
	var formAccueil;
    var champNom;
    var boutonJouer;
	
	function initialiser()
	{
		corps = document.getElementsByTagName("body")[0];
	}
	
	function enregisterNom(evenement)
    {
        joueur.nom = champNom.value;
    }

	this.afficher = function()
	{
		corps.innerHTML = AccueilVue.pageAccueilHTML;
	    formAccueil = document.getElementById("form-accueil");
		formAccueil.addEventListener("submit", 
									 function(evenement){
										evenement.preventDefault(); 
										return false;
									 });
        boutonJouerSolo = document.getElementById("bouton-jouer-solo");
        boutonJouerCoop = document.getElementById("bouton-jouer-coop");
        champNom = document.getElementById("nom");
		boutonJouerSolo.addEventListener("click", enregisterNom);
        boutonJouerCoop.addEventListener("click", enregisterNom);
	}
	
	initialiser();
	
}

AccueilVue.pageAccueilHTML = document.getElementById("page-accueil").innerHTML;











