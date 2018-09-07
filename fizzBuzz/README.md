# FizzBuzz

```javascript
function fizzBuzz(num) {

}
```

## Rules
* Given the above function, log the numbers 1 to and including 'num'.
* For each number divisible by 3, log 'Fizz' instead.
* For each number divisible by 5, log 'Buzz' instead.
* For a number that is divisible by 3 & 5, log FizzBuzz.

## My Solution
```javascript
function fizzBuzz (num) {
    for (let i = 1; i <= num; i++) {
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
```

