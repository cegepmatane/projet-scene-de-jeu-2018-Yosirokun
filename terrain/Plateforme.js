function Plateforme(scene)
{

    var texture = new Image();
    var charge = false;
    var tilebitmap;


    var indice = Math.floor((Math.random() * 9));

    function initialiser()
    {
        texture.src = "terrain/tiles/ground" + indice + ".png";
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
    console.log(this.plateforme);

    initialiser();

}