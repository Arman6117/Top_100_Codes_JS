// Convert given octal number into decimal

const octal = 512;
let decimal = 0;

const convNum = (o) =>
{
    let digit = 0,sum = 0,ex =0;
    
    while(o != 0)
    {
        digit = o % 10;
        sum = sum + ( digit * Math.floor(Math.pow(8,ex)));
        ex++;
        o = Math.floor(o / 10);
    }
    return sum;
}

decimal = convNum(octal);
console.log("The conversion of given octal number "+ octal + " in decimal is "+ decimal);