PerduVue = function(){
	var corps;
    
	
	function initialiser()
	{
		corps = document.getElementsByTagName("body")[0];
	}

	this.afficher = function()
	{
		corps.innerHTML = PerduVue.pagePerduHTML;
       
	}
	
	initialiser();
	
}
PerduVue.pagePerduHTML = document.getElementById("page-perdu").innerHTML;