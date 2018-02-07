(function()
{
var dessin = document.getElementById("dessin");
    

    
//var ennemi = new Ennemi(dessin);  
var scene = new createjs.Stage(dessin);   
createjs.Ticker.addEventListener("tick", rafraichirJeu);
createjs.Ticker.setInterval(0);
createjs.Ticker.setFPS(10);
     function rafraichirJeu(evenement)
    {
        scene.update();
    }    

var hero = new PersonnagePrincipal(dessin);    
scene.addChild(hero.animationBlop);
hero.jouerAnimation();
    
    var TOUCHE_GAUCHE = 37; 
    var TOUCHE_DROITE = 39;
    var TOUCHE_ESPACE = 32;
    var TOUCHE_CONTROLE = 17;

    function gererTouche(evenement)
    {
        
     switch(evenement.keyCode)
            {
                case TOUCHE_GAUCHE:
                   
                    hero.deplacerGauche();
                break;
                case TOUCHE_DROITE:
                  
                    hero.deplacerDroite();
                break;
                case TOUCHE_ESPACE:
                    
                    hero.sauter();
                break;
                case TOUCHE_CONTROLE:
                    
                    hero.gobber();
                break;
            }
        
            scene.update();   
    }
    
    this.document.onkeydown = gererTouche;

    
})();