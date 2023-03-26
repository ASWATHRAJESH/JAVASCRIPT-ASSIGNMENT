// define an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function checkDivisibility()
{
  // loop through the array and print the numbers divisible by 3
  for (let i = 0; i < numbers.length; i++) 
  {
    if (numbers[i] % 3 === 0) 
    {
      console.log(numbers[i]);
    }
  }
}

checkDivisibility();