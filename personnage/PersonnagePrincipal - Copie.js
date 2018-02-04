function PersonnagePrincipal(dessin)
{
  var personnagePrincipal = this;    
  var blop = new Image();
  this.estCharge = false;
  function initialiser()
   {
     blop.src = "personnage/personnagePrincipal.png";
        
     blop.onload = noterFinChargement;
 
   }
    function noterFinChargement()
    {
       personnagePrincipal.estCharge = true; 
    }
    
   this.afficher = function()
   {
     dessin.drawImage(blop, 10,10);   
   }
   
   this.deplacerDroite = function()
   {
       
   }
   this.deplacerGauche = function()
   {
       
   }
   this.sauter = function()
   {
       
   }
   this.gobber = function()
   {
       
   }
    
   initialiser(); 
}