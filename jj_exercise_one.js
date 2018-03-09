$(document).ready(function() {
	$("#heart").mouseenter(function(){
		$("#heart").animate({width:"130px"},500);
	});
	$("#heart").mouseleave(function(){
		$("#heart").animate({width:"100px"},200);
	});
	
	$("#heart").click(function(){
		$("#heart").animate({
			width:"100%",
			opacity:0
		},500);

		$("#text").delay(500).animate({
			opacity:1},500);

		$("#bg").delay(200).animate({
			opacity:1},500);

		$(".heart").delay(500).animate({
			opacity:1},500);

		$("#clicktxt").animate({
			opacity:0},500);

	});

});