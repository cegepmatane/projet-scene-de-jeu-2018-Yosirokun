(function()
 {
    var dessin = document.getElementById("dessin");



    //var ennemi = new Ennemi(dessin);  
    var scene = new createjs.Stage(dessin);   
    
    createjs.Ticker.setFPS(30);
    function rafraichirJeu(evenement)
    {
        var deplacementActuel = evenement.delta / 1000 * 200; 
        hero.deplacer(deplacementActuel);
        scene.update(evenement);
    }    

    var hero = new PersonnagePrincipal(scene);  
    var monInterval = setInterval(
        function() {
            if(hero.estCharge){
                hero.afficher();            
                createjs.Ticker.addEventListener("tick", rafraichirJeu);            
            }
        });
    

    var TOUCHE_GAUCHE = 37; 
    var TOUCHE_DROITE = 39;
    var TOUCHE_ESPACE = 32;
    var TOUCHE_CONTROLE = 17;

    function gererToucheEnfoncee(evenement)
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

           
    }
    
     function gererToucheRelachee(evenement)
    {

        switch(evenement.keyCode)
        {
            case TOUCHE_GAUCHE:

                hero.metreEnAttente();
                break;
            case TOUCHE_DROITE:

                hero.metreEnAttente();
                break;
            case TOUCHE_ESPACE:

                hero.metreEnAttente();
                break;
            case TOUCHE_CONTROLE:

                hero.metreEnAttente();
                break;
        }

           
    }
    
    

    this.document.onkeydown = gererToucheEnfoncee;
    this.document.onkeyup = gererToucheRelachee;
    


})();