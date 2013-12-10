$(document).ready(function(){
	$(".key").each(function(i){
		$(this).attr("id", "key"+i);
	});

	$(".key").on("click", function(){
		var id = $(this).attr("id");
		var input = prompt("Enter your bind for this key");
		$(this).append("<div class='outerContainer'><div class='innerContainer'><div class='element'><span>"+input+"</span></div> </div></div>");
	});
});