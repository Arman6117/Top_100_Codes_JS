// Reverse the given number
const num = 123;

const revNum  = (no) =>{
    let digits;
    let rev = 0;
    while(no != 0)
    {
        rem = no % 10;
        rev = rev * 10 + rem;
        no = Math.floor(no/10);
    };
    console.log(rev);
}

revNum(num);