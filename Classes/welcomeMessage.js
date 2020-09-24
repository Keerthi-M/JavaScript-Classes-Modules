/* Problem Description : The community “Cypher Source” needs your help to welcome their new member with warm content.
Instruction : Obtain the name of the member as input and pass it to the method which is inside the class “CySo” and now console a calm welcome message to their new member.
Sample Input : Hey buddy! Your name Please..? Riya
Sample Output : Welcome Riya! Cypher Source is glad to connect with you.
Conditions :
1.Class must be used.
2.Input must be obtained through readline() method.
3.UserName must be stored in dynamic. */

// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class.
// Class named "CySo" is defined using "class" keyword.
class CySo { 

// Method named "Welcome" is declared and user input is passing through this method.
   Welcome(username) {

// "this" keyword refers to the object "community".
    this.community = username;
    
   console.log(" Welcome " + this.community + "! Cypher Source is glad to connect with you !");
  }
}
  var userdetails = new CySo( );
// Object named "community" is declared globally. 
  var community;

// readline() method is used to get the user input dynamically .
process.stdin.resume();
process.stdin.setEncoding('utf8');
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Hey buddy ! Your name please.. ?', name => {
  this.community = name;
  userdetails.Welcome(this.community)

  readline.close();
});


