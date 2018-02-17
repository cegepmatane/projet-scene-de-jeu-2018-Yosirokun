function Ennemi(dessin)
{
  var ennemi = this;    
  var monstre = new Image();
  this.estCharge = false;
  function initialiser()
   {
     monstre.src = "personnage/ennemi.png";
        
     monstre.onload = noterFinChargement;
 
   }
    function noterFinChargement()
    {
       ennemi.estCharge = true; 
    }
    
   this.afficher = function()
   {
     dessin.drawImage(monstre, 50,10);   
   }
    
   initialiser(); 
}