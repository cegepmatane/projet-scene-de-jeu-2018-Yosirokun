(function()
 {
    var dessin = document.getElementById("dessin");
    var deplacementActuel
    var tileEnCollision = 0;
    var background = new Image();
    background.src = "terrain/background.png";
    var tiles = new Array();
    var level = [
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,1,0,1,0,0,
        1,1,1,1,1,1,1,1,1,1
    ];

    //var ennemi = new Ennemi(dessin);  
    var scene = new createjs.Stage(dessin);
    background.onload = gererChargementBackground;

    function gererChargementBackground(event)
    {
        var image = event.target;
        var bitmap = new createjs.Bitmap(image);
        scene.addChild(bitmap);


    }




    createjs.Ticker.setFPS(30);
    function rafraichirJeu(evenement)
    {
        deplacementActuel = evenement.delta / 1000 * 200; 
        hero.deplacer(deplacementActuel);
        hero.arretChute();

        for(i = 0; i != tiles.length; i++)
        {
            if(hero.getRepresantation().intersects(tiles[i].getRepresentation()))
            {
                tileEnCollision++;
            }
        }
        if(tileEnCollision > 0)
        {
            hero.setGrounded(true);
        }
        else
        {
            hero.setGrounded(false);
        }
        tileEnCollision = 0;
        



        scene.update(evenement);
        console.log("Hero " + hero.getRepresantation());
        console.log("tiles" + tiles[0].getRepresentation());
        console.log(hero.getGrounded());
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
                break;
            case TOUCHE_CONTROLE:

                hero.metreEnAttente();
                break;
        }


    }



    this.document.onkeydown = gererToucheEnfoncee;
    this.document.onkeyup = gererToucheRelachee;
    function creerNiveau()
    {   
        var i ;
        var j ;
        var x = 0;
        var y = 0;
        var indiceLevel = 0;
        var indiceTiles = 0;
        for(i = 0; i < 6; i++)
        {
            for(j = 0 ; j < 10; j++)
            {
                if(level[indiceLevel] == 1)
                {
                    tiles[indiceTiles] = new Plateforme(scene);
                    tiles[indiceTiles].x = x;
                    tiles[indiceTiles].y = y;
                    indiceTiles += 1;
                }
                x += 128;
                indiceLevel += 1;
            }
            y += 128;
            x = 0;
        }
        setInterval(
            function(){
                var nombre = 0;

                for(i = 0 ; i < tiles.length; i++)
                {
                    if(tiles[i].estCharge())
                        nombre++;
                }

                if(nombre == tiles.length)
                {
                    for(i = 0; i != tiles.length; i++)
                    {
                        tiles[i].setPosition();
                        tiles[i].afficher();
                    }
                    clearInterval();
                }



            }, 500);

    }

    creerNiveau();
    console.log (tiles);

})();