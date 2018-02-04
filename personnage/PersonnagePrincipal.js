function PersonnagePrincipal(dessin)
{
  var personnagePrincipal = this;    
  var blop = new Image();
  this.estCharge = false;
  
     blop.src = "personnage/blop.png";
    
    var spriteBlop = new createjs.SpriteSheet(
        {
            images:[blop],
            frames:{width:120,height:119},
            animations:
            {
                saute:[1,2,3,4,5,6]
            }
        }
    );
       
    this.animationBlop = new createjs.Sprite(spriteBlop, "saute");
       
    
        this.jouerAnimation = function(){
            animationBlop.play();
        }
        
  
   
   this.deplacerDroite = function()
   {
       this.x += 0.5;
       
   }
   this.deplacerGauche = function()
   {
       this.x -= 0.5;
       
   }
   this.sauter = function()
   {
       while(var i != 10)
       {
        if(i < 5)
            this.y += 0.1;
        else
            this.y -= 0.1;
        i++;   
       }

       
   }
   this.gobber = function()
   {
       
   }
   

}