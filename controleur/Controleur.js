function Controleur(jeu) {
	var controleur = this;
	var serveur;
	var configuration = {};
	configuration.host = "127.0.0.1";
	configuration.port = 8888;
	configuration.zone = "Bloper";
	configuration.debug = false;
	configuration.room = 'caverne';
	var connected = false;
	var etatJ1;
	var etatJ2;
	var xJ1;
	var xJ2;
	var yJ1;
	var yJ2;
	var nomJ1;
	var nomJ2;
	var vieJ1 = 10;
	var vieJ2 = 10;
	var points = 0;
	var nombreJoueurActif = 0;


	function initialiser() {
		tracer('onload -> initialiser()', false);
		serveur = new SmartFox(configuration);

		serveur.addEventListener(SFS2X.SFSEvent.CONNECTION, executerApresOuvertureContactServeur, this);
		serveur.addEventListener(SFS2X.SFSEvent.LOGIN, executerApresOuvertureSession, this);
		serveur.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, executerApresEntreeSalon, this);

		serveur.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, executerApresVariableDeSalon, this);
		setNumeroJoueur();

		ouvrirContactServeur();
	}

	function ouvrirContactServeur() {
		console.log("se connecte...");
		serveur.connect();

	}


	function executerApresOuvertureContactServeur(e) {
		tracer("executerApresOuvrirContactServeur()");
		tracer("succes de la connection " + e.success);
		controleur.ouvrirSession(jeu.nomJoueur);
		connected = true;



	}
	this.getEtatConnection = function() {
		return connected;
	}

	this.ouvrirSession = function(nom) {
		tracer("ouvrirSession(" + nom + ")");
		serveur.send(new SFS2X.Requests.System.LoginRequest(nom));
	}

	function executerApresOuvertureSession(e) {
		tracer("executerApresOuvertureSession()");
		tracer("l'usager " + e.user.name + " est dans la zone " + e.zone);
		entrerSalon();
	}

	function entrerSalon() {
		tracer('entrerSalon()');
		estEnvoye = serveur.send(new SFS2X.Requests.System.JoinRoomRequest(configuration.room));
		tracer('demande d\'entrer dans le salon effectuee');
	}

	function executerApresEntreeSalon(e) {
		tracer('executerApresEntreeSalon()');
		tracer('Entree dans le salon ' + e.room + ' reussie');

		tracer("le nombre de joueur est de :" + nombreJoueurActif);
	}

	this.setVariable = function(variable, valeur) {

		var listeVariables = [];
		//listeVariables.push(new SFS2X.Entities.Variables.SFSRoomVariable('test','autre valeur'));
		listeVariables.push(new SFS2X.Entities.Variables.SFSRoomVariable(variable, valeur));

		estEnvoyee = serveur.send(new SFS2X.Requests.System.SetRoomVariablesRequest(listeVariables));
		tracer('la nouvelle valeur() est envoyee ' + estEnvoyee);
	}

	function actualiserSalon(salon) {
		nomJ1 = salon.getVariable('nomJ1').value;

		nomJ2 = salon.getVariable('nomJ2').value;

		vieJ1 = salon.getVariable('vieJ1').value;

		vieJ2 = salon.getVariable('vieJ2').value;

		points = salon.getVariable('points').value;


		nomJ1 = salon.getVariable('nomJ1').value;


		nombreJoueurActif = salon.getVariable('nombreJoueurActif').value;


		xJ1 = salon.getVariable('xJ1').value;


		yJ1 = salon.getVariable('yJ1').value;


		xJ2 = salon.getVariable('xJ2').value;


		yJ2 = salon.getVariable('yJ2').value;

	}


	function executerApresVariableDeSalon(e) {
		actualiserSalon(e.room);
		
		jeu.metreAJourVariable();

	}

	function setNumeroJoueur() {
		console.log("ca rentre dans la fonction numero joueur");
		if (nombreJoueurActif == 1)
			jeu.setNumeroJoueur(1);

		else if (nombreJoueurActif == 2)
			jeu.setNumeroJoueur(2);

	}

	function tracer(message, alerte) {
		console.log(message);
		if (alerte) alert(message);
	}
	this.getNomJ1 = function() {
		return nomJ1;
	}
	this.getNomJ2 = function() {
		return nomJ2;
	}
	this.getVieJ1 = function() {
		return vieJ1;
	}
	this.getVieJ2 = function() {
		return vieJ2;
	}
	this.getPoints = function() {
		return points;
	}
	this.getJoueurActif = function() {
		return nombreJoueurActif;
	}
	this.getXJ1 = function() {
		return xJ1;
	}
	this.getYJ1 = function() {
		return yJ1;
	}
	this.getXJ2 = function() {
		return xJ2;
	}
	this.getYJ2 = function() {
		return yJ2;
	}



	initialiser();
}