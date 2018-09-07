/* Provided function:
function fizzBuzz(num) {

} */

//fizzBuzz(20); Returns numbers 1-20 on seperate lines.

/* Rules
For each number divisible by 3, log the word 'Fizz' instead.
For each number divisible by 5, log the word 'Buzz' instead.
For each number divisible by 3 & 5, log the word 'FizzBuzz'.
*/

/* Personal Notes
- Suspect I need a for-loop to write the numbers 1-num
- Conditional if-statements to resolve if num is divisible by 3 or 5
*/

function fizzBuzz (num) {
    for (i = 1; i <= num; i++) { //while 'i' is <= to num, execute.
        if (i % 3 == 0 && i % 5 == 0) {
            console.log('FizzBuzz');
        } else if (i % 3 == 0) {
            console.log('Fizz');
        } else if (i % 5 == 0) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20);

//Success! Executed as expected.