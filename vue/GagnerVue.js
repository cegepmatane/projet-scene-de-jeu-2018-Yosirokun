GagnerVue = function(){
	var corps;
    
	
	function initialiser()
	{
		corps = document.getElementsByTagName("body")[0];
	}

	this.afficher = function()
	{
		corps.innerHTML = GagnerVue.pageGagnerHTML;
       
	}
	
	initialiser();
	
}
GagnerVue.pageGagnerHTML = document.getElementById("page-gagner").innerHTML;