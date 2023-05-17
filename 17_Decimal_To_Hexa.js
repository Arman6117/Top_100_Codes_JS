// Convert given number into hexadecimal

const dec = 1457;

const convNum = (d) =>
{

     let hex = [], i = 0 ,rem = 0;

     while(d != 0)
     {
        rem = d % 16;
        if ( rem < 10)
        {
            hex[i] = String.fromCharCode(rem + 48)
            i++;
        }
        else{
          hex[i] = String.fromCharCode(rem + 55);
          i++;
        }

       d = Math.floor(d / 16)
     }
     for(let j = i - 1;  j >= 0; j-- )
     {
         console.log(hex[j]);
     }
}

convNum(dec)