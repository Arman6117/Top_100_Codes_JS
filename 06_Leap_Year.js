// Check given year is leap year or not

const  year = 2024;

const checkYear = (y) =>{
    if(y % 400 == 0)
    {
        console.log("The given year is a leap year");
        
    }
    else if(y % 4 == 0 && y % 100 != 0)
    {
        console.log("The given year is a leap year");
    }
    else
    {
        console.log("The given  year is not a leap year");

    }
}
checkYear(year)