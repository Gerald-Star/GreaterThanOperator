//Greater Than Operator
/*
Examples

5   >  3  // true <br>
7   > '3' // true <br>
2   >  3  // false <br>
'1' >  9  // false <br>
Add the greater than operator 
to the indicated lines so that the return 
statements make sense.

*/


function testGreaterThan(val) {
    if (val > 100) {  // Change this line
      return "Over 100";
    }
  
    if (val > 10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
 console.log(testGreaterThan(10));
 //output




//Greater Than or Equal To Operator >=
 /*

 The greater than or equal to operator (>=) 
    compares the values of two numbers. 
    If the number to the left is greater than or 
    equal to the number to the right, it returns true. 
    Otherwise, it returns false
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false

 */

/*Add the greater than or equal to operator to the 
indicated lines so that the return statements make sense.

*/


function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
      return "20 or Over";
    }
  
    if (val >= 10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  console.log(testGreaterOrEqual(10));


// Less Than Operator <

/*
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false

*/

  function testLessThan(val) {
    if (val < 25) {  // Change this line
      return "Under 25";
    }
  
    if (val < 55) {  // Change this line
      return "Under 55";
    }
  
    return "55 or Over";
  }
  
  console.log(testLessThan(10));


  // less than or Equal Comparison <=

  function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
      return "Smaller Than or Equal to 12";
    }
  
    if (val <= 24) {  // Change this line
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
  }
  
  console.log(testLessOrEqual(10)) ;


  //Logical and Operator &&
/*
  if (7 > 5) {
    if (7 < 10) {
      return "Yes";
    }
  }
  return "No"; 

  */

  //rewrite this using logical and operand operator &&
/*
    if (num > 5 && num < 10) {
        return "Yes";
}

  return "No";
  */


  //EXAMPLE

  /*
Replace the two if statements with one statement,
 using the && operator, which will return the string Yes.
  if val is less than or equal to 50 and greater than 
  or equal to 25. Otherwise, will return the string No.
  */

  function testLogicalAnd(val) {
    // Only change code below this line
  
    if (val <= 50) {
      if (val >= 25) {
        return "Yes";
      }
    }
  
    // Only change code above this line
    return "No";
  }
  console.log(testLogicalAnd(10));

  
  // Example rewrite with logical and operator &&

  function logicalAndOperator (check) {
    if (check <= 50 && check >= 25) {
        return "Yes";
    }
    return "No";
  }

  console.log(logicalAndOperator(40));

  /*
The logical AND (&&) operator compares both statements and returns true only 
if both are true or can be converted to true (truthy).
  */

// EXAMPLE STRICT EQUALITY OPERATOR

function strictEquality(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
 console.log(strictEquality(10));

//EXAMPLE 2 

function strictEqualityOperator(val) {
    if (val === 10) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
 console.log(strictEqualityOperator(10));



//LOGICAL OPERATOR||




 // TOPIC LOGICAL OR OPERATOR ||

 /*The logical or operator (||) returns true 
 if either of the operands is true. Otherwise, 
 it returns false.

 */

 //EXAMPLE 1 .where one is true - || for logical operator
function logicalOrOperator (num) {


 if (num > 10) {
    return "Yes";
  }
  if (num < 5) {
    return "Yes";
  }
  return "No";
}

console.log(logicalOrOperator (20)); 

//Rewrite
/*will return Yes only if num is between 5 and 10 
(5 and 10 included). The same logic can be written as:

*/
function logicalOperatorOr (num) {
    if (num > 10 || num < 5){
        return "Yes";
    }
    return "No";
}

console.log(logicalOperatorOr (20));



//EXAMPLE 2 where both are false

function logicalOrOperatorCheck (num) {


    if (num > 10) {
       return "No";
     }
     if (num < 5) {
       return "No";
     }
     return "Yes";
   }
   
   console.log(logicalOrOperatorCheck (7)); 
   
   //Rewrite
   /*will return Yes only if num is between 5 and 10 
   (5 and 10 included). The same logic can be written as:
   
   */
   function logicalOperatorOrRewrite (num) {
       if (num > 10 || num < 5){
           return "No";
       }
       return "Yes";
   }
   
   console.log(logicalOperatorOrRewrite (7));
   
   
   


//Example 1

/* Combine the two if statements into one statement
 which returns the string Outside if val is not between 
 10 and 20, inclusive. Otherwise, return the string inside*/

 // EXAMPLE 1: testLogicalOr(15) should return the string Inside

 function testLogicalOrReturn(val) {
    // Only change code below this line
  
    if (val < 10 ) {
      return "Outside";
    }
  
    if (val > 20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  console.log(testLogicalOrReturn(15));

  //REWRITE

  function OrLogicalOperator (val) {
    if ( val < 10 || val > 20 ) {
        return "Outside";
    }
    return "Inside";
  }
  console.log(OrLogicalOperator (15));


//EXAMPLE 2 testLogicalOr(9) should return the string Outside

function OrLogicalText (val) {
    if (val < 10) {
        return "Checked";
    }
    if (val > 20 ) {
        return "Checked";
    }
    return "Not Checked";
}

 console.log(OrLogicalText (9)); 

 //REWRITE
 function OrLogicalTextNow (val) {
    if (val < 10 || val > 20) {
        return "Checked";
    }
    return "Not Checked";
 }

 console.log(OrLogicalTextNow (9));


    //MORE EXAMPLES
// EXAMPLE 3:LogicalOr(10) should return the string Inside

//EXAMPLE 4 LogicalOr(19) should return the string Inside
//EXAMPLE 5. LogicalOr(20) should return the string Inside
//EXAMPLE 6 testLogicalOr(21) should return the string Outside
//EXAMPLE 7 LogicalOr(25) should return the string Outside




//TOPIC IF ESLE STATMENT

/*
if (num > 10) {
  return "Bigger than 10";
} else {
  return "10 or Less";
}
*/

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    if (val <= 5) {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  console.log(testElse(4));

  //Rewrite as If/ esle statmeent

  function testElseNow (val) {
    if (val > 5) {
        return "Bigger than 5";
    }
    else {
        return "5 or smaller";
    }
    }
    console.log(testElseNow(4));

    // MORE EXAMPLES

//    testElse(5) should return the string 5 or Smaller
//Waiting:testElse(6) should return the string Bigger than 5
//Waiting:testElse(10) should return the string Bigger than 5



// TOPIC ELSE IF STATEMENT

//EXAMPLE
/*
if (num > 15) {
    return "Bigger than 15";
  } else if (num < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 15";
  }
*/

  //EXAMPLE Else If
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    if (val < 5) {
      return "Smaller than 5";
    }
  
    return "Between 5 and 10";
  }
  
  console.log(testElseIf(7));


  // CONVERT TO ELSE IF

  function testElseIfNow(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
  
   return "Between 5 and 10";
    }
  }
  
  console.log(testElseIfNow(7));





  //TOPIC  Logical Order in If Else Statements

/*
Order is important in if, else if statements.

The function is executed from top to bottom so you will want to be careful of what statement comes first.

Take these two functions as an example.

Here's the first: */

function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
console.log(foo(1));
/* And the second just switches the order of the statements:*/

function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
console.log(bar(4));

/*While these two functions look nearly
 identical if we pass a number to both we 
 get different outputs.*/

foo(0)
bar(0)
foo(0) 

/* will return the string Less than one, and bar(0) 
will return the string Less than two.

Change the order of logic in the function so 
that it will return the correct statements in all cases.*/


function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  console.log(orderMyLogic(10));


// TOPIC Chaining If Else Statements

/* 
chaining if statement for complex logic.
*/

//EXAMPLE PATTERN
/*
if (condition1) {
    statement1
  } else if (condition2) {
    statement2
  } else if (condition3) {
    statement3

  } else {
    statementN
  }
*/

//EXAMPLE 1


/*
Write chained if/else if statements to fulfill the
 following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

*/
function testSize(num) {
    // Only change code below this line
  if (num < 5) {
    return "Tiny";
  } else if(num < 10) {
  return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
   return "Large";
  } else if  (num >= 20) {
  return "Huge";
  
  } else {
    return "Change Me"; 
  }
   
  }
  
 console.log(testSize(7)); 



 // TOPIC SWITCH STATEMENT

 /*
Remember that 
case values are tested with strict equality (===).

The break tells JavaScript to stop executing statements. 
If the break is omitted, the next statement will be executed.

EXAMPLE.
Write a switch statement which tests val and sets 
answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
 */

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
  
  
    // Only change code above this line
    return answer;
  }
  
  console.log(caseInSwitch(1));



  // TOPIC : DEFAULT OPTIONS IN SWITCH STATEMENT

  /*
  Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

switch statement you may not be able to specify 
all possible values as case statements. 

Instead, you can add the default statement
which acts as the las else.


A default statement should be the last case.

  */
/* debug this mistake


function switchOfStuff(val) {
    let answer = "";
  
    switch (val) {
      case "a":
        answer = "apple";
        break;
      case "b":
        answer = "bird";
        break;
      case "c":
        answer = "cat";
        break;
      default:
        answer = "stuff";
    }
  
    return answer;
  }
  console.log(switchOfStuff(b)); */






  // TOPIC MULTIPLE IDENTICAL SWITCH STATEMENT


  /*

  Multiple Identical Options in Switch Statements
If the break statement is omitted from a switch statement's
 case, the following case statement(s) are executed until 
 a break is encountered. If you have multiple inputs with 
 the same output, you can represent them in a switch 
 statement like this:

  */

  function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
    }
    // Only change code above this line
    return answer;
  }
  // Change this value to test
  console.log(sequentialSizes(1));




  //TOPIC ITERATE THROUGH ARRAYS GOLFSCORE

  /* 
  Hint 1
+number -number can be used to increase or decrease a 
parameter in your condition.

Hint 2
You use if / else if chains to return different
 values in different scenarios.

Hint 3
Control the flow of your function based on the tables 
order of priority - top (highest) to bottom (lowest) 
to return matching string values.

  */

//SOLUTION GOLFSCORE

//Using if/else method

function golfScoreIfElse(par, strokes) {
    // Only change code below this line
    if (strokes == 1){
      return "Hole-in-one!";
    } else if (strokes <= par -2){
      return "Eagle";
    } else if (strokes == par -1) {
      return "Birdie";
    } else if (strokes == par) {
      return "Par";
    } else if (strokes == par +1) {
      return "Bogey";
    } else if (strokes == par +2) {
      return "Double Bogey";
    } else {
      return "Go Home!";
  }
    // Only change code above this line
  }
  // Change these values to test
   console.log(golfScoreIfElse(5, 4));


//EXAMPLE 2 REVISTED with STRICT OPERATORS

//Using consts and seeting names in array method
const names = ["Hole-in-one!", "Eagle", 
"Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }
  // Only change code above this line
}

// Change these values to test
console.log(golfScore(5, 4));


// Note that using deeply nested ternaries 
//like this is discouraged in professional code.

/*
Code Explanation
Since we already have an array defined in the 
variable names we can take advantage of it and
 use it for our return statements using indexes 
 (eg: names[0] is the first one). 
 
 That way, if you ever need to change a specific 
 result you wouldn’t need to look for it inside 
 the function, it’d be at the beginning, in your array.

*/

//Solution 
//(Using Multiple Conditional (Ternary) Operators)

const tenary = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScoreTenary(par, strokes) {
  return strokes === 1
    ? tenary[0]
    : strokes <= par - 2
    ? tenary[1]
    : strokes === par - 1
    ? tenary[2]
    : strokes === par
    ? tenary[3]
    : strokes === par + 1
    ? tenary[4]
    : strokes === par + 2
    ? tenary[5]
    : tenary[6];
}
console.log(golfScoreTenary(5,4));




// TOPIC Replacing If Else Chains with Switch

/* If you have many options to choose from,
 a switch statement can be easier to write
  than many chained if/else if statements.*/

  function chainToSwitch(val) {
    let answer = "";
  if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch(7));


//Changing if/else if with switch statement


function chainSwitch(val) {
    let answer = "";
    // Only change code below this line
   switch (val) {
     case "bob":
     answer = "Marley";
     break;
  
     case 42:
     answer = "The Answer";
     break;
  
     case 1:
     answer = "There is no #1";
     break;
  
     case 99:
     answer = "Missed me by this much!";
     break;
  
     case 7:
     answer = "Ate Nine";
     break;
    
   }
    // Only change code above this line
    return answer;
  }
  
  console.log(chainSwitch(7));
  
  // QUESTION
  /*
  1. create simple switch statement:
  and add in this switch statement case
  add answer
  add break


    switch (val) {
        }
  */

// RETURN BOOLEAN COMPARISON FUNCTION VALUES FROM IF/ELSE 

//EXAMPLE

/*Problem Explanation
Instead of using an if/else block to compare variable 
we can do it right inside the return statement with a
 comparison operator and minmal code.

Fix the function isLess to remove the if...else statements.

*/

// With if/else

/*Sometimes people use an if/else statement 
to do a comparison,*/ 

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}

console.log(isEqual(5, 5));

//Fix the function isLess to remove the if...else statements.

function isEqualIf(a, b) {
    return a === b;
  }

  console.log(isEqualIf(5, 5));

  //EXAMPLE

  /*Fix the function isLess to 
  remove the if/else statements.

  */

  function isLess(a, b) {
  
    if (a < b) {
      return true;
    } else {
      return false;
    }
    
  }
  
  
  console.log(isLess(10, 15));


  //REWERITE WITH A RETURN VALUE BY REMOVING IF/ELSE

  function isLessCodeWithReturn(c, d) {
    return c <= d;
  }

  console.log(isLessCodeWithReturn(10, 15));


  //MODIFY A FUNCTION TO RETURN UNDEFINED

  /* Modify the function abTest so that if a or b 
  are less than 0 the function will immediately
   exit with a value of undefined.*/

   function abTest(a, b) {
    // Only change code below this line
  if (a < 0 || b < 0) {
    return undefined;
  }
  
  
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
console.log(abTest(2,2)) ;


// TOPICS OBJECTS IN JAVASCRIPT

//Here's a sample cat object:
//  you access the data in objects through what are called properties.


const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

console.log(cat("name", "tails"));

//EXAMPLE TWO

const anotherObject = {
    make: "Ford",
    5: "five",
    "model": "focus"
  };

  console.log(anotherObject(5));


  //EXAMPLE

  const myDogData = {
    // Only change code below this line
  name: "Man",
  legs: 4,
  tails: 2,
  friends: ["Emeka", "Nne"],
    // Only change code above this line
  };
  console.log(myDogData("legs"));


  //ACCESING OBJECTS THROUGH DOT NOTATION (.)
  /*
  const myObj = {
    prop1: "val1",
    prop2: "val2"
  };
  
  const prop1val = myObj.prop1;
  const prop2val = myObj.prop2;
*/
  //prop1val would have a value of the string val1, 
  //and prop2val would have a value of the string val2