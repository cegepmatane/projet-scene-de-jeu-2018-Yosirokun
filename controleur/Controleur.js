function Controleur(jeu)
{
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
    console.log("se connecte");
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
function actualiserVariable()
{
    if(e.changedVars.indexOf('nomJ1') != -1)
    {
        nomJ1 = e.room.getVariable('nomJ1').value;
    }
    else if(e.changedVars.indexOf('nomJ2') != -1)
    {
        nomJ2 = e.room.getVariable('nomJ2').value;
    }
    else if(e.changedVars.indexOf('vieJ1') != -1)
    {
        vieJ1 = e.room.getVariable('vieJ1').value;
    }
    else if(e.changedVars.indexOf('vieJ2') != -1)
    {
        vieJ2 = e.room.getVariable('vieJ2').value;
    }
    else if(e.changedVars.indexOf('points') != -1)
    {
        points = e.room.getVariable('points').value;
    }
    else if(e.changedVars.indexOf('nomJ1') != -1)
    {
        nomJ1 = e.room.getVariable('nomJ1').value;
    }
    else if(e.changedVars.indexOf('nombreJoueurActif') != -1)
    {
        nombreJoueurActif = e.room.getVariable('nombreJoueurActif').value;
    }
    else if(e.changedVars.indexOf('xJ1') != -1)
    {
        xJ1 = e.room.getVariable('xJ1').value;
    }
    else if(e.changedVars.indexOf('yJ1') != -1)
    {
        yJ1 = e.room.getVariable('yJ1').value;
    }
    else if(e.changedVars.indexOf('xJ2') != -1)
    {
        xJ2 = e.room.getVariable('xJ2').value;
    }
    else if(e.changedVars.indexOf('yJ2') != -1)
    {
        yJ2 = e.room.getVariable('yJ2').value;
    }
}


function executerApresVariableDeSalon(e)
{
    actualiserVariable
    jeu.metreAJourVariable();

}

function tracer(message, alerte)
{
    console.log(message);
    if(alerte) alert(message);
}
this.getNomJ1 = function ()
{
    return nomJ1;
}
this.getNomJ2 = function ()
{
    return nomJ2;
}
    this.getVieJ1 = function ()
    {
        return vieJ1;
    }
    this.getVieJ2 = function ()
    {
        return vieJ2;
    }
    this.getPoints = function ()
    {
        return points;
    }
    this.getJoueurActif = function()
    {
        return nombreJoueurActif;
    }



initialiser();
}