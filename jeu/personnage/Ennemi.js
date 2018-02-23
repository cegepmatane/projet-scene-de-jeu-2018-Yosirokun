function Ennemi(scene)
{
    var ennemi = this;    
    var monstre = new Image();
    var spriteBlopEnnemi;
    var animationIdleBlop;
    this.estCharge = false;
    function initialiser()
    {
        monstre.src = "jeu/personnage/ennemi/blobIdle.png";
        monstre.onload = terminerChargement;




    }
    function terminerChargement()
    {
        ennemi.estCharge = true; 
        spriteBlopEnnemi = new createjs.SpriteSheet(
            {
                images:[monstre],
                frames:{width:120,height:120},
                framerate: 8,
                animations:
                {
                    idle:
                    {
                        frames: [0,1,2,3,4,5,6,7]
                    }
                }
            }
        );

        animationIdleBlop = new createjs.Sprite(spriteBlopEnnemi, "idle");

    }

    this.afficher = function()
    {
        scene.addChild(animationIdleBlop);
        
        animationIdleBlop.x = 1150;
        animationIdleBlop.y = 180; 
           
    }

    this.getRepresantation = function()
    {

        return modifierBound(animationIdleBlop.getBounds());

    }
    function modifierBound(rectangle)
    {
        rectangle.x = animationIdleBlop.x;
        rectangle.y = animationIdleBlop.y;


        return rectangle;
    }
    
   
    initialiser(); 
}