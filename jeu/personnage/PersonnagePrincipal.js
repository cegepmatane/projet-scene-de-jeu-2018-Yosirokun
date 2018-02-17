/*
To DO

funtion sauter() qui va utiliser le ticker pour la duree du saut;


*/


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
        enAttente:"EN ATTENTE",
        enGobe:"EN TRAIN DE GOBBER"
    }
    var estGrounded = false;
    var etatCourant;
    blop.onload = terminerChargement;
    blop.src = "jeu/personnage/blop.png";

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
        animationActuel.x = 0;
        animationActuel.y = 531;

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
                if(!estGrounded && animationActuel.y > 531)
                    animationActuel.y += deplacement;   
                break;
            case Etat.enSautHaut:
                animationActuel.y -= deplacement + 5;
                break;
            case Etat.enSautBas:
                animationActuel.y += deplacement;
                if(estGrounded)
                {changerAnimation(animationIdle);}
                break;
            case Etat.enGobe:
                animationActuel.scaleX += 0.2;
                animationActuel.scaleY += 0.2;
                animationActuel.x += 0.2;
                animationActuel.y += 0.2;
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
    {   if(estGrounded)
    {
        changerAnimation(animationSaute);
        etatCourant = Etat.enSautHaut;
        setTimeout(mettreEnChute, 500);
    }
    }
    this.gobber = function()
    {
        etatCourant = Etat.enGobe; 
    }

    this.getRepresantation = function()
    {

        return modifierBound(animationActuel.getBounds());

    }
    function modifierBound(rectangle)
    {
        rectangle.x = animationActuel.x;
        rectangle.y = animationActuel.y;

        return rectangle;

    }

    function mettreEnChute()
    {

        etatCourant = Etat.enSautBas;

    }
    this.getGrounded = function()
    {
        return estGrounded;
    }
    this.setGrounded = function(etat)
    {
        estGrounded = etat;
    }
    this.arretChute = function(){
        if(estGrounded && etatCourant == Etat.enSautBas)
            etatCourant = Etat.enAttente
            }

}