// "exports" keyword is used to make the variables and functions accessible from outside the current module.
// A function named "Password" is defined with two arguments "username" and "password" and "exports" keyword is used to make accessible of this file in someother module.
exports.Password = function (Username , password)
{

// AND operator is used and this code will execute if one and only both the conditions defined are true.
    if(Username != "M.Keerthi" && password != "dt09102000")
   {
       return "Sorry,Your password is incorrect. Please try again later :) ";
   }
    else
    {
         return "You are logged in successfully !";
    }
}