// Convert Decimal To Octal

const num = 148;

const convNum = (d) =>
{
    let i = 0,rem = 0, octal = [];

     while(d != 0)
     {
        rem = d % 8;
        octal[i++] = rem;
        d = Math.floor(d / 8);
     }

     for(let j = i-1; j>= 0; j--)
     {
        console.log(octal[j]);
     }
}

console.log("The octal number of given decimal is: " + convNum(num));
