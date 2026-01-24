function numberType(abc)
{
    let num = abc;
    if (num>0)
    {
        console.log("The number is positive");
    }
    else if (num<0)
    {
        console.log("the number is negative");

    }
    else 
    {
        console.log("The number is zero");
    }
}

numberType(10);
numberType(-10);
numberType(0);
