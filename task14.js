var a = 2;
var b = 1;


var result = --a - --b + ++b + b--; /* --a = 1
                                       --a - --b= 1
                                       --a - --b + ++b = 2
                                       --a - --b + ++b + b-- = 3 */


document.write("Value of a is 2" + "<br>")
document.write("Value of b is 1" + "<br>") 
                                       
document.write("The Result of --a is 1" + "<br>");
document.write("The Result of --a - --b is 1" + "<br>");
document.write("The Result of --a - --b + ++b  is 2" + "<br>");
document.write("The Result of --a - --b + ++b + b--  is 3" + "<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("The answer of the --a - --b + ++b + b-- is" + result);
