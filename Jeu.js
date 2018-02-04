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
    
    

    
})();