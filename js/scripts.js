// business logic
//var CountVowel = function(vowels) {
  // for(var i =0; i < result.length; i++){
  // if ( result[i] == vowels){
  //   result += ;
  // } else {
  //   return false;

function getVowels(str){
  var vowelsCount = 0;
  //var upperVowels = ["A", "E", "I", "O", "U"]
  var result = str.toString();

  for(var i = 0; i <= result.length -1 ;i++){
    if(result.charAt(i)=="a" || result.charAt(i) == "e" || result.charAt(i) == "i" || result.charAt(i) == "o" || result.charAt(i) == "u"){
      //if(result.charAt(i)== upperVowels){
      //result = result.replace(result[i], "-");
      vowelsCount +=1;
    }

  }
  $(".count").text(vowelsCount);
}




// user interface logic
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var result = $("#Vowels").val().toLowerCase();
    var userResult = getVowels(result);
    //$(".count" + userResult).text(vowelsCount);
    //$(".count").text(vowelsCount);
    $("#result").show();
  });
});
