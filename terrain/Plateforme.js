function Plateforme(scene)
{
    
    var texture = new Image();
    var charge = false;
    var tilebitmap;
    this.x = 0;
    this.y = 0;


    function initialiser()
    {
        texture.src = "terrain/tiles/ground0.png";
        texture.onload = gererChargementTile; 
    }




    function gererChargementTile(event)
    {
        var image = event.target;
        tilebitmap = new createjs.Bitmap(image); 
        charge = true;



    }

    this.estCharge = function()
    {
        return charge;    
    }

    this.afficher = function()
    {

        scene.addChild(tilebitmap);


    }
    this.setPosition = function()
    {
        tilebitmap.x = this.x;
        tilebitmap.y = this.y;
       
    }


    this.getRepresentation = function()
    {
        return modifierRectangle(tilebitmap.getBounds());
    }

    function modifierRectangle(rectangle)
    {
        rectangle.x = tilebitmap.x;
        rectangle.y = tilebitmap.y;
        return rectangle;
    }
    initialiser();
    
}