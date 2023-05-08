// Calculate the sum of numbers in given range
let range = 5;

const calSum = (no) =>{
    let sum = 0
    for(let  i = 1; i<= range;i++)
    {
       sum += i;
    }
    return sum;
}

let sumR = calSum(range);
console.log("The sum of number in given range is: "+ sumR);