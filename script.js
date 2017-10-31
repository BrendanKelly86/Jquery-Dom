$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	
	$("p").click(function(){
	$("p").addClass("highlight_p");//when clicking on <p> run this code
	});

	$("h2").hover(function(){
		$("h2").addClass("h2_hover");
	});
	
	$("#hr_html").hover(function(){
		$("#hr_html").addClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jqery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
	});
	
		$("#hr_mysql").hover(function(){
		$("#hr_mysql").addClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jqery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
	});
		$("#hr_python").hover(function(){
		$("#hr_python").addClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_jqery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
	});
		$("#hr_jqery").hover(function(){
		$("#hr_jqery").addClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
	});
		$("#hr_django").hover(function(){
		$("#hr_django").addClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jqery").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
	});
		$("#hr_css").hover(function(){
		$("#hr_css").addClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jqery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
	});
	
	$(".bottom_button").mouseenter(function(){
		$("body").css("background-color","black");
	});
	
	$(".bottom_button").mouseleave(function(){
		$("body").css("background-color", "grey");
	});
	
	$("p").click(function(){
		$(this).children("a").css("background-color", "yellow");
	});
	
$("img").click(function(){
	$(this).next().children('p').slideDown();	 
});
}); 