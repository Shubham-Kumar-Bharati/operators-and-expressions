// 1.Add two Numbers
const AddTwoNumbers = (a,b) => {
    const result=a+b;
    return result;
};

// 2.Find if the conditions are obeyed or not?
const Is_Valid = (a,b) => {
    return (a<10&&a>b)?true:false;
  };

//   3.Check the conditons
const Check = (A, B) => 
{
    return (A%10==0 && B%10==0)||(A%10==0 || B%10==0)? true:false;
};

// 4.Find the first digit of a 4 digit number
const First_Digit = (n) => {
    result = (n-n%1000)/1000;
    return result;
 };

//  5.Find the last digit of a 4 digit number
const Last_Digit = (n) => {
    const result=n%10;
    return(result);
 };

//  6.Find the remainder
const Find_the_remainder = (a,b) => {
    const result=b%a;
    return(result);
};

// 7.Multipy two Numbers
const Multiply_two_number = (a,b) => {
    const result=a*b;
    return(result);
};

// 8.Marks Calculator
const Sum = (A, B, C) => 
{
 let result=(A+B+C);
 return(result);
};

const Average = (A, B, C) => 
{
 let result=(A+B+C)/3;
 return(result);
};

