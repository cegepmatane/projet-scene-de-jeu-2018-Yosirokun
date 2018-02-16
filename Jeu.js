(function()
 {
    var dessin = document.getElementById("dessin");
    var deplacementActuel
    var background = new Image();
    background.src = "terrain/background.png";
    var tiles = new Array();

    //var ennemi = new Ennemi(dessin);  
    var scene = new createjs.Stage(dessin);
    background.onload = gererChargementBackground;

    function gererChargementBackground(event)
    {
        var image = event.target;
        var bitmap = new createjs.Bitmap(image);
       // scene.addChild(bitmap);


    }
    var tile = new Plateforme(scene);
   var interval = setInterval(
        function() {
            console.log(tile.estCharge());
            if(tile.estCharge()){
                tile.afficher();
                
                
            }
        },20);




    createjs.Ticker.setFPS(30);
    function rafraichirJeu(evenement)
    {
        deplacementActuel = evenement.delta / 1000 * 200; 
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

                hero.sauter(deplacementActuel);
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