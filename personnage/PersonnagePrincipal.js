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
            this.animationBlop.play();
        }
        
  
   
   this.deplacerDroite = function()
   {
       this.animationBlop.x += 20;
       
   }
   this.deplacerGauche = function()
   {
       this.animationBlop.x -= 20
       
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