let genderType = "female";
function printGender (genType)
{
    var colour = "brown";
    if (genType.startsWith("female"))
    {
        var age = 30;
        let colour = "pink";
        console.log ("The color inside if block is ",colour);
    }
    console.log ("The color outside if block is", colour);
    console.log("The value of age outside if block is ", age);
}
printGender (genderType);
console.log("The gender type is ", genderType);
