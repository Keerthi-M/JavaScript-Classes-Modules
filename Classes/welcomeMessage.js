/* Problem Description : The community “Cypher Source” needs your help to welcome their new member with warm content.
Instruction : Obtain the name of the member as input and pass it to the method which is inside the class “CySo” and now console a calm welcome message to their new member.
Sample Input : Hey buddy! Your name Please..? Riya
Sample Output : Welcome Riya! Cypher Source is glad to connect with you.
Conditions :
1.Class must be used.
2.Input must be obtained through readline() method.
3.UserName must be stored in dynamic. */

// Variable named "community" is declared globally.
var community;

// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
// Class named "CySo" is defined using "class" keyword.
class CySo { 

// Passing user input "name" inside the method "Welcome"
   Welcome (name) {

// "this" keyword refers to the object "community" that belongs to the method "Welcome".
    this.community = Welcome;
  }
}

// readline() method is used to get the user input dynamically .
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Hey buddy ! Your name please.. ?', name => {

   console.log(" Welcome " + CySo.Welcome + "! Cypher Source is glad to connect with you !");

  readline.close();
});


