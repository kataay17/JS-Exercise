$(document).ready(function(){
	

	//navigation dropdown

	$("li").mouseleave(function(){
		$(this).find("ul>li").slideUp(1000);

	});

	$("li").mouseenter(function(){
		$(this).find("ul>li").slideDown(500);
	});

	$("li.dropdown").mouseenter(function(){
		$("img.arrow").toggleClass("toggle1");
	});

	$("li.dropdown").mouseleave(function(){
		$("img.arrow").toggleClass("toggle1");

	});




	$("#lightbox a").click(function(){

		$("html").css( "overflow", "hidden" );

		// console.log( $(this).html()  )

		$(".backdrop").show();
		$(".box, .punk-rock").animate({"opacity" : "1.00"}, 300, "linear");
		$(".backdrop, .box, .punk-rock").css("display", "block");
		$(".box #imgPlaceholder").css("width", "100%");

		$(".box #imgPlaceholder").html( $(this).html() )
		

	});




	$(".close-button").click(function(){
		$("html").css( "overflow", "scroll" );
			$(".backdrop").fadeOut();

	});


	
});
