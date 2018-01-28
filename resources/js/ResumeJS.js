$( window ).load(function(){	
	clickOnLink();
	animateFlotingMenu();
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
    document.getElementById("navSidebar").style.width = "250px";
};

function closeNav() {
    document.getElementById("navSidebar").style.width = "0";
};

function clickOnLink(){
	$("#navSidebar a").bind("click", function(){
		$(".active").toggleClass("active");
		$( this ).toggleClass("active");
		closeNav();
	});

	$("#navSidebar a:not(.closebtn)").click(function(){
		$("html, body").animate({
			scrollTop: $("[ng-view]").offset().top
		}, 2000);
	});
};

function animateFlotingMenu(){
	$(window)
	.scroll(function(){
		var headerHeight = $("#header").outerHeight(true);
		var scrollDoc = $(document).scrollTop()
		var selectorMenu = $("span.burger");
		if (scrollDoc >= headerHeight){
			topCSS = scrollDoc - headerHeight + 15 + "px";
			selectorMenu.css({"position": "relative", "top": topCSS});
		}else{
			selectorMenu.css({"position": "static"});
		}
		console.log();
	});
};