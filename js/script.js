$(document).ready(function() {
 


	$("#mybutton").mouseenter(function() {
		$("#para").fadeTo(1000,0.5);
	
	});
	
		$("#mybutton").mouseleave(function() {
		$("#para").fadeTo(1000,1);
	
	});

	$("#mybutton2").click(function() {
		$("#para2").fadeToggle(3000);
	
	});
	
		$("#mybutton3").click(function() {
		$("#para3").slideToggle('fast');
	
	});


	



}); 
