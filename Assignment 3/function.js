function userProfile (name)
{
    console.log(`Hello, ${name}!`);
}
userProfile("Pradeepa");
let double = (a)=>a*2;
console.log("The double value is", double(2));
let anony = function (){
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds");
    }, 2000);
}
anony();
function getUserData (callback)
{
    setTimeout(() => {
        callback();
    }, 3000);
}
function callback()
{
    console.log("Call back function");
}
getUserData(callback);

