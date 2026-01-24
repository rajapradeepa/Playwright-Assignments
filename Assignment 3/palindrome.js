let str = "madam";
let len = str.length;
let charstr = str.split('');
let reversedstr="";
for (let index=len-1; index>=0;index--)
{
    reversedstr+=charstr[index];
}
console.log("The reversed string is", reversedstr);
palindrome (str,reversedstr);
function palindrome(a,b)
{
    if(a===b)
    {
        console.log("The given string is a palindrome");
    }
    else
    {
        console.log("The given string is not a palindrome");
    }
}
