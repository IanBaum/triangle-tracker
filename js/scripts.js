$(document).ready(function(){
  $("#triangle").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#sideOne").val());
    var number2 = parseInt($("#sideTwo").val());
    var number3 = parseInt($("#sideThree").val());

    if((number1 + number2) > (number3 / 2) && (number2 + number3) > (number1 / 2) && (number1 + number3) > (number2 / 2)){ //are all numbers valid--can it make a triangle

      if(number1 === number2 && number1 === number3){
        $("#triangleType").text("Equilateral"); //.text in this case is to remove the current text and replace it with whatever follows in quotes.  triangleType determines where we replace the text in the html. (nested within first if statement)
      }
      else if(number1 === number2 || number1 === number3 || number2 === number3){
        $("#triangleType").text("Isoscelese");
      } //check to see if two sides are equal
      else {
        $("#triangleType").text("Scalene");
      } //if none are equal

    }else{
      $("#triangleType").text("Not a Triangle");
    }//if all numbers are invalid and cannot make a triangle, this else statement runs.  (connected to first "if" statement)

  });

});
