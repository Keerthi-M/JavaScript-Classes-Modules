/*Problem description :
Geetha needs to login a website, She don't know whether the password and name she entered is correct or incorrect and here she
needs your hand to code.

Instruction:
Create a separate module to check the password and name
and return "Success" if both were matched orelse return "Not
Matched, Try again" . No need to get the input, You can store name
and password in static.

Conditions:
1. module must be created.
2. UserName and Password must be passed to the module. */

// As any application grows bigger, we may need to split into multiple files, so called “modules”. A module may contain a class or a library of functions for a specific purpose.
// require() method is used to include the module "checkPassword.js" and ./ is used to locate the module that is present in the same folder. 

var Login = require('./checkPassword.js');
var UserName = "M.Keerthi";
var password = "dt09102000";
console.log(Login.Password(UserName ,password));