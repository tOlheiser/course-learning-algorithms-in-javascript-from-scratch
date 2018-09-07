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

## Instructor Solution
```javascript
function fizzBuzz(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) console.log('FizzBuzz');
        else if (i % 3 === 0) console.log('Fizz');
        else if (i % 5 === 0) console.log('Buzz');
        else console.log(i);
    }
}
```

### Personal Observations
* He used a stict comparison operator.
* i % 15 is more concise than i % 3 && i % 5
* The console.log() statement was inline with the if/else statements. This threw me off a bit, so I read into it.

### From javascript.info: The 'if' statement
https://javascript.info/ifelse#the-if-statement

> If there is more than one statement to be executed, we have to wrap our code block inside curly braces.
> It is recommended to wrap your code block with curly braces {} every time with if, even if there is only one statement. That improves readability.

_This implies that if there is a single statement, you can do without the curly braces. However, like he said above, curly braces are preferred to improve readability._
