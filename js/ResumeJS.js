$( window ).load(function(){	
	clickOnLink();
});

function agregaScrollMenu(){
        var altura = $("#header").outerHeight(true);
        console.log("Altura del header: " + altura);
	$( window ).bind('scroll', function(){
	        console.log("Scroll dado: " + $(window).scrollTop());
		if( $(window).scrollTop() > altura ){
			$( "#containerMenu" ).addClass("fixed");
			console.log($("#containerMenu").outerHeight(true));
			$("#pestana").css("margin-top", $("#containerMenu").outerHeight(true).toString() + "px");
		} else {
			$( "#containerMenu" ).removeClass("fixed");
			$("#pestana").css("margin-top", "0");
		}
	});
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
};

function clickOnLink(){
	$("#mySidenav a").bind("click", closeNav);
};