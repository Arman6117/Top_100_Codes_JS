//Convert given binary number in octal number

const binary = 1011;

const convNum = (d) =>{
    let rem = 0,ex= 0,dec = 0, num= 0;

    while(d != 0)
    {
        rem = d % 10;
        num = (rem * Math.floor(Math.pow(2,ex)));
        dec = dec + num;
        ex++;
        d = Math.floor(d / 10);
    }
   convDec(dec);
}

const convDec = (d) =>{
  
    let rem = 0, oct = [];
    while(d != 0)
    {
       rem = d % 8;
       oct.push(rem);
       d = Math.floor(d / 8);
    }
    for(let i = oct.length-1; i>= 0; i--)
    {
        console.log(oct[i]);
    }
}

convNum(binary)