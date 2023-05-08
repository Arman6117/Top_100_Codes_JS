// Check given number is a prime number or not

const num = 23

const checkNum = (no) =>{
    let cnt = 0;
    for(let i = 2; i<no;i++)
    {
        if( no % i == 0)
        {
          cnt++;
        }
    }
    if(cnt > 0)
    {
        console.log("The given number is not a prime number");
    }
    else
    {
        console.log("The given number is a prime number");

    }
}

checkNum(num);