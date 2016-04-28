$(document).ready(function(){
	var changeRes;
	var nameInput = $("#nameInput").value;

	$(".available").on("click", function(){
		$(".greyish").show("slow");
		console.log("This works!");
		
	});

	$("#btn").on("click", function() {
		$("#F4").removeClass("available").addClass("reserved");
		$("#F4").text($("form").serialize());


	});

});

