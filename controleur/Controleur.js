function Controleur()
{
var serveur;
var configuration = {};
configuration.host = "127.0.0.1";
configuration.port = 8888;
configuration.zone = "Bloper";
configuration.debug = false;
configuration.room = 'caverne';
var connected = false;
var xJ1;
var yJ1;    
var xJ2;
var yJ2;    
var nomJ1;
var nomJ2;
var vieJ1;
var vieJ2;
var points;
var nombreJoueurActif;    


function initialiser()
{
    tracer('onload -> initialiser()', false);
    serveur = new SmartFox(configuration);

    serveur.addEventListener(SFS2X.SFSEvent.CONNECTION, executerApresOuvertureContactServeur, this);
    serveur.addEventListener(SFS2X.SFSEvent.LOGIN, executerApresOuvertureSession, this);
    serveur.addEventListener(SFS2X.SFSEvent.ROOM_JOIN, executerApresEntreeSalon, this);
    serveur.addEventListener(SFS2X.SFSEvent.ROOM_VARIABLES_UPDATE, executerApresVariableDeSalon, this);

    ouvrirContactServeur();
}
    function ouvrirContactServeur()
{
    serveur.connect();    
}


function executerApresOuvertureContactServeur(e)
{
    tracer("executerApresOuvrirContactServeur()");
    tracer("succes de la connection " + e.success);
    connected = true;
    
    
}
    this.getEtatConnection = function()
    {
        return connected
    }

this.ouvrirSession = function(nom)
{
    tracer("ouvrirSession(" + nom +")");
    serveur.send(new SFS2X.Requests.System.LoginRequest(nom));
}

function executerApresOuvertureSession(e)
{
    tracer("executerApresOuvertureSession()");
    tracer("l'usager " + e.user.name + " est dans la zone " + e.zone);
    entrerSalon();
}

function entrerSalon()
{
    tracer('entrerSalon()');
    estEnvoye = serveur.send(new SFS2X.Requests.System.JoinRoomRequest(configuration.room));
    tracer('demande d\'entrer dans le salon effectuee');
}

function executerApresEntreeSalon(e)
{
    tracer('executerApresEntreeSalon()');
    tracer('Entree dans le salon ' + e.room + ' reussie')
}

this.setVariable = function(variable, valeur)
{
  
    var listeVariables = [];
    //listeVariables.push(new SFS2X.Entities.Variables.SFSRoomVariable('test','autre valeur'));
    listeVariables.push(new SFS2X.Entities.Variables.SFSRoomVariable(variable, valeur));

    estEnvoyee = serveur.send(new SFS2X.Requests.System.SetRoomVariablesRequest(listeVariables));
    tracer('la nouvelle valeur est envoyee ' + estEnvoyee);
}

function executerApresVariableDeSalon(e)
{
    
    if(e.changedVars.indexOf('salutation') != -1)
    {
        tracer('salutation == ' + e.room.getVariable('salutation').value, true);
    }

}

function tracer(message, alerte)
{
    console.log(message);
    if(alerte) alert(message);
}
initialiser();
}