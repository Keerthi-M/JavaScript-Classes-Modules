/* Problem description:  The College “Cypher Source” needs your help to display few of their departments (Machine Learning, Networking, Gaming).
Instruction : Create an object with departments and display the departments using for in loop.
Sample Output : Departments in Cypher Source.
Machine Learning
Networking
Gaming 
Conditions :
 1.Objects must be created.
 2.To display departments in statement must be used. */

console.log("Departments in Cypher Source.");

//Objects can be created using variables too. Hence, It is been created using {name:value} pairs with values such as "Machine Learning", "Networking", "Gaming". And these values are assigned to the variable named "college" i.e. the object.
var college = { department: "Machine Learning", department1:  "Networking", department2: "Gaming" };

//"for in" loop is used with variablename "item" to access the object named "college" to display the departments and this loop continues till all the properties of the object are exhausted.
for (var item in college) {
   console.log(college[item]);     
}