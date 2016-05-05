$(document).ready(function(){
	var seatNum;
	var selectSeat;
	var yourName;

	$(".available").on("click", function(){
		$(".greyish").show("slow");
		selectSeat = $(this);
		seatNum = $(this).attr("id");
		$("#seat").text(seatNum);
	});

	$("#btn").on("click", function() {
		yourName = $("input#nameInput").val();
		$(selectSeat).removeClass("available").addClass("reserved").text("This seat is reserved for " + yourName + ".");
	});

});

