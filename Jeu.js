(function()
{
var dessin = document.getElementById("dessin").getContext("2d");    
var hero = new PersonnagePrincipal(dessin);
var ennemi = new Ennemi(dessin);   
    setTimeout(function(){
      if(hero.estCharge) hero.afficher();
       if(ennemi.estCharge) ennemi.afficher(); 
    }, 1000);
    
})();