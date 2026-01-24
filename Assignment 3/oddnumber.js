function printOddNumbers(a,b)
{
    for (let i=a;i<=b;i++)
    {
        if(i%2!==0)
        {
            console.log(i);
        }
    }
}
let startNum = 1;
let endNum = 25;
printOddNumbers(startNum,endNum);
