// Find Highest Common Factor of given numbers

const no1 = 36, no2 = 60;
let hcf = 1;

const findHCF = (num1,num2) =>{
    for(let i = 1; i <= num1 || i <=  num2; i++)
    {
        if(num1 % i == 0 && num2 % i == 0)
        {
            if(i > hcf)
            {
                hcf = i;
            }
        }
    }
   console.log("The HCF of "+ num1 +" and "+num2+" is "+hcf);
}

findHCF(no1,no2);