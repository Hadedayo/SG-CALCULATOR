
console.log("Hi there! Welcome to my calculator");
  var interest=prompt( "Is it Regular or Advanced? ");

if (interest=="R" ||interest=="R") {
   var x=parseInt(prompt("value1"));
   var y=parseInt(prompt("value2"));
   var input= prompt("Which operations do you want, (add, subtract, divide or multiply)");

  if (input=="add") {
    console.log( x + y);
   }
   else if (input=="subtract") {
   console.log( x - y);
    }
   else if (input=="multiply") {
    console.log(x * y);
   }
  else if (input=="divide") {
  console.log(x / y);
  }
  else {
  console.log("Nothing else to do");
 }
}

//FOr the Advanced calculation
else if (calc=="Advanced" ||interest=="A") {
  var value1=parseInt(prompt("value1"));
  // var value2=parseInt(prompt("value2"));
  var input1=prompt("Which operation do you want? (squareroot or power)");

 if (input1=="squareroot") {
  console.log("The squareroot is", Math.sqrt(value1) );
 }
 else if (input1=="power") {
  console.log("The answer is", Math.pow (value1,2));
 }
 else {
  console.log("Nothing else to do,Can't help you here ");
    }
 }
