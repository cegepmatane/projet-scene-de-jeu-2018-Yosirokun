function PersonnagePrincipal(scene)
{
    var personnagePrincipal = this;    
    var blop = new Image();
    this.estCharge = false;
    var animationBlop;
    var animationActuel;
    var xActuel;
    var yActuel;
    var Etat = {
        enDeplacementDroit:"EN DEPLACEMENT DROIT",
        enDeplacementgauche:"EN DEPLACEMENT GAUCHE",
        enSautHaut:"EN SAUT HAUT",
        enSautBas:"EN SAUT BAS",
        enAttente:"EN ATTENTE"
    }
    var etatCourant;
    blop.onload = terminerChargement;
    blop.src = "personnage/blop.png";

    function terminerChargement()
    {
        var spriteBlop = new createjs.SpriteSheet(
            {
                images:[blop],
                frames:{width:120,height:119 },
                framerate: 8,
                animations:
            {
                idle:
                {
                    frames: [0,1]
                },
                jump:{
                    frames: ["idle",3,4,5]
                },
                move:{
                    frames:[0,1,2]
                }
            }
                
                    
                
            }
        );

        animationIdle = new createjs.Sprite(spriteBlop, "idle");
        animationSaute = new createjs.Sprite(spriteBlop, "saute");
        animationMove = new createjs.Sprite(spriteBlop, "move");
        personnagePrincipal.estCharge = true;   
        etatCourant = Etat.enAttente;
        animationActuel = animationIdle;
    }



    this.afficher = function()
    {
        scene.addChild(animationActuel);
    }
    function changerAnimation(animation)
    {
        xActuel = animationActuel.x;
        yActuel = animationActuel.y;
        scene.removeChild(animationActuel);
        animationActuel = animation;
        animationActuel.x = xActuel;
        animationActuel.y = yActuel;
        scene.addChild(animationActuel);
        
        
    }
    this.deplacer = function(deplacement)
    {
        switch(etatCourant){
            case Etat.enDeplacementDroit:
                animationActuel.x += deplacement;
                break;

            case Etat.enDeplacementgauche:
                animationActuel.x -= deplacement;
                break;
            case Etat.enAttente:
                break;
        }



    }




    this.deplacerDroite = function()
    {
        etatCourant = Etat.enDeplacementDroit;
        changerAnimation(animationMove);
    }
    this.deplacerGauche = function()
    {
        etatCourant = Etat.enDeplacementgauche;
        changerAnimation(animationMove);
    }
    this.metreEnAttente = function()
    {
        etatCourant = Etat.enAttente;
        changerAnimation(animationIdle);
    }
    this.sauter = function()
    {
       etatCourant = Etat.enSautHaut
    }
    this.gobber = function()
    {

    }


}