

var weight = parseFloat(prompt("Enter a weight in pounds:"));
var height = parseFloat(prompt("Enter a height in inches:"));
var bmi = function(weight , height) {return (weight / (height*height))*(703)}

var bmiResult=bmi(weight, height);

if(bmiResult < 18.5){
	alert("You are underweight");
} else if(bmiResult < 25 && bmiResult > 18.5 ){
alert("You are normal weight");

} else if(bmiResult <30 && bmiResult > 25 ){
alert("You are overweight");
}else if (bmiResult >30 ){

  alert("You are Obese");

  }
