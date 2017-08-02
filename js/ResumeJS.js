$( window ).load(function(){

	peticionContenido("/contenido/inicio.html");
	
	agregaLinksMenu();
	ajustaLinksMenu();
	
	//agregaScrollMenu();
	
	
});

function colocaContenidoPorID(id){
	fileName = id.toLowerCase().replace("link", "") + ".html";
	console.log("nombre de archivo: " + fileName);
	peticionContenido("/contenido/" + fileName)
	$("#pestana").fadeIn(500);	
};

function sustituyeLinkActivo(selector){
	$(".active").removeClass("active");
        $(selector).addClass("active");
};

function ajustaLinksMenu(){
	
	var acumulador = 0;
	$(".linkMenu").each(function(index, value){
		acumulador += $(this).outerWidth();
	});
	
	console.log("ancho acumulado de Links: " + acumulador);
	var anchoPadre = $(".nav.nav-tabs").width();
	if(acumulador < anchoPadre){
	        var numeroLinks = $(".linkMenu").length;
		var margen = (anchoPadre - acumulador)/(numeroLinks + 1);
		$(".linkMenu").css({"margin-right": "0", "margin-left": margen.toString() + "px"});
	}
};

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

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};