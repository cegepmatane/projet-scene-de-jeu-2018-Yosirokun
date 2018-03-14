AttenteVue = function(){
    var corps;


    function initialiser()
    {
        corps = document.getElementsByTagName("body")[0];
    }

    this.afficher = function()
    {
        corps.innerHTML = AttenteVue.pageAttenteHTML;

    }

    initialiser();

}
AttenteVue.pageAttenteHTML = document.getElementById("page-attente-joueur").innerHTML;