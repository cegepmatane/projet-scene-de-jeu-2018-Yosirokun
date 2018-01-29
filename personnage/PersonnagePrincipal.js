function PersonnagePrincipal(dessin)
{
  var personnagePrincipal = this;    
  var blop = new Image();
  this.estCharge = false;
  function initialiser()
   {
     blop.src = "personnagePrincipal.png";
        
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
    
   initialiser(); 
}