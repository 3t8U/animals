$(document).ready(function() {


 $(".form-control").submit(function(event) {
   event.preventDefault();
  var animal = $("#animal option:selected").val();


// console.log(animal);

if (animal === "1") {
  $(".horse").show();
  $(".goat, .chickens").hide();
} else if (animal === "2") {
  $(".goat").show();
  $(".horse, .chickens").hide();
} else if (animal === "3") {
  $(".chickens").show();
  $(".horse, .goat").hide();
} else if (animal === "0"){
  $(".horse, .goat, .chickens").hide();
} else {
  console.log("error");
}



  });
});
