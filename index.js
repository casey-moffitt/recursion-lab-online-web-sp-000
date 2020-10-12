function printString(myString) {
  console.log(string[0]);
 if (mystring.length > 1) {
   let mysubstring = mystring.substring(1,mystring.length);
   printString(mysubstring);
 } else {
   return true;
   }
 }
 printString("supercalifragilisticexpialidocious");
