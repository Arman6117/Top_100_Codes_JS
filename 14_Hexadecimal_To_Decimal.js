// Convert given hexadecimal number into decimal

const Hex = "c9";
let v = 0;

const convertHex = (hex) =>
{
    const digit = "0123456789ABCDEF";
    let val = 0;
    hex = hex.toUpperCase();
    for(let i = 0; i<hex.length;i++)
    {
        const c = hex.charAt(i);
        const d = digit.indexOf(c);
        val = val * 16 + d
    }
    return val;
}

v = convertHex(Hex);
console.log("The decimal conversion of given hexadecimal number "+ Hex + " is " + v);