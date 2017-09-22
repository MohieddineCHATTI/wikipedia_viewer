$(document).ready(function(){
	


$("#search").click(function(){


var key_word = $("#key_word").val();
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+key_word+"&format=json&callback=?";

$.ajax({
	type : "GET",
	url:url,
	dataType: "json",
	success: function(data){
			$("#key_word").val('');
			var target= "blank";
			if (data[1].length>10){


				for (var i =9; i >=0; i--) {
			 


			$("#results").prepend("<li><a href="+data[3][i]+" target="+target+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");

		}
			}
			else{

			for (var i =data[1].length-1; i >=0; i--) {
			 


			$("#results").prepend("<li><a href="+data[3][i]+" target="+target+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");

		}
}


			
		

},



	error: function(errorMessage){
		alert('error');
	}



});




});

$("#key_word").keypress(function(k){

	if(k.which==13){


	$("#search").click();

   }


 });






});