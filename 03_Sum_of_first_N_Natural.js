// Calculate the sum of first n natural numbers

let No = 10

const calSum = (no) =>
{
    let sum = 0
    for(let i = 1;i<= no;i++)
    {
       sum += i;
    }
    return sum;
}

let sumN = calSum(No);
console.log("The sum of  1st 10 natural numbers is: "+ sumN);
