function lengthLastWord(s)
{
let trims=s.trim();
let splits=trims.split(" ");
let len = splits.length;
console.log(splits[len-1].length);
}
lengthLastWord("Hello World");
lengthLastWord(" fly me to the moon ");
function isAnagram(x,y)
{
   let casex = x.trim().toLowerCase();
   let casey = y.trim().toLowerCase();
   let sortx = casex.split('').sort();
   let sorty = casey.split('').sort();
   console.log (sortx);
   console.log (sorty);
   if (sortx.length === sorty.length && sortx.every((val, index) => val === sorty[index]))
   {
    console.log("The given words are anagram");
   }
   else
   {
    console.log("The given words are not anagram");
   }
}
isAnagram("LISTEN","SILENT");
isAnagram("Hello","World");
