//Calculate LCM of 2 numbers

const num1 = 12,num2 =14;
let max = 0,lcm = 0;

const calLCM = (no1,no2) =>{
    max = (no1>no2) ? no1:no2;

    for(let i = max;i <= no1*no2; i++)
    {
        if((i % no1 === 0) && (i % no2 === 0))
        {
            lcm = i;
            
            break;
        }
    }
    return lcm;
}

lcm = calLCM(num1,num2);
console.log("The LCM of "+ num1 + " and " + num2 +" is " + lcm);