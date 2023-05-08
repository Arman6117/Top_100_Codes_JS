// Check whether given number is positive or negative

const readline = require('readline');

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

r1.question("Enter a number: ",(no)=>{
    if(no < 0)
    {
        console.log("The given number is a negative number");
    }
    else if(no > 0)
    {
        console.log("The given number is a positive number");

    }
    else
    {
        console.log("The number is zero");
    }
r1.close()

})
