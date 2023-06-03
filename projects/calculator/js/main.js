// let area = document.querySelector("form input")
// let buttons = document.querySelectorAll(".btn")
// let clear = document.querySelector(".btn-clear")
// let equal = document.querySelector(".btn-equal")

// buttons.forEach(function (el) {
//     el.addEventListener("click", function() {
//         area.value += el.getAttribute("data-num")
//     })
// })

// clear.addEventListener("click", function() {
//     area.value = ""
// })

// equal.addEventListener("click", function() {
//     let result = eval(area.value) // eval() is unsafe
// })



// function solve(expression) {
//     let expression1 = "2+45"
//     let exp =  expression1.split("") 
//     console.log(exp)
// }
// solve()






































function getHistory(){
	return document.getElementById("history-value").innerText.replace("÷","/").replace("×","*");
}
function printHistory(num){
	document.getElementById("history-value").innerText = num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result= eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}





















// //Wrap code in an IIFE
// (function(){
  
//     let screen = document.querySelector('.screen');
//     let buttons = document.querySelectorAll('.btn');
//     let clear = document.querySelector('.btn-clear');
//     let equal = document.querySelector('.btn-equal');
    
//     //retrieve data from numbers that are clicked
//     buttons.forEach(function(button){
//       button.addEventListener('click', function(e){
//         let value = e.target.dataset.num;
//         screen.value += value;
//       })
//     });
    
//     equal.addEventListener('click', function(e){
//       if(screen.value === ''){
//         screen.value = 'Please Enter a Value';
//       } else {
//         let answer = eval(screen.value);
//         screen.value = answer;
//       }
//     })
    
//     clear.addEventListener('click', function(e){
//       screen.value = '';
//     })
   
//   })(); //end IIFE
  