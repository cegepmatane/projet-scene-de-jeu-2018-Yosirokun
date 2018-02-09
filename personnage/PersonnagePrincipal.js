function PersonnagePrincipal(scene)
{
    var personnagePrincipal = this;    
    var blop = new Image();
    this.estCharge = false;
    var animationBlop;
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
                frames:{width:120,height:119, count:6},
                framerate: 1,
                animations:
            {
                idle:[0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
            }
                
                    
                
            }
        );

        animationIdle = new createjs.Sprite(spriteBlop, "idle");
        animationSaute = new createjs.Sprite(spriteBlop, "saute");
        personnagePrincipal.estCharge = true;   
        etatCourant = Etat.enAttente;
    }



    this.afficher = function()
    {
        scene.addChild(animationIdle);
    }
    this.deplacer = function(deplacement)
    {
        switch(etatCourant){
            case Etat.enDeplacementDroit:
                animationIdle.x += deplacement;
                break;

            case Etat.enDeplacementgauche:
                animationBlop.x -= deplacement;
                break;
            case Etat.enAttente:
                break;
        }



    }




    this.deplacerDroite = function()
    {
        etatCourant = Etat.enDeplacementDroit;            
    }
    this.deplacerGauche = function()
    {
        etatCourant = Etat.enDeplacementgauche;
    }
    this.metreEnAttente = function()
    {
        etatCourant = Etat.enAttente;
    }
    this.sauter = function()
    {
        var i = 0;
        while(i != 10)
        {
            if(i < 5)
            {this.animationBlop.y += 30;}
            else
            {this.animationBlop.y -= 30;}
            i++;   
        }


    }
    this.gobber = function()
    {

    }


}