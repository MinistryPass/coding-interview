## Coding Interview for Ministry Pass

#### Get the app running

1. `git clone <repo>`
2. `cd coding-interview`
3. `yarn install`
4. `yarn check` to get the tests running.

There are TWO problems to solve within the `functions.js` file

### Problem 1

#### Array Sum

> Goal: Find the sum given an array of integers.

For example, if the array = [1,2,3], then 1 + 2 + 6 = 6, so return `6`.

_Function Description_
Complete the function `sum` in the `functions.js` file. It must return the sum of the array elements as an integer.

`sum` has the following parameter(s):

- `numberArray`: an array of integers

### Problem 2

#### Super Digits

> Goal: Find the superDigit given integers `N` and `K`.

How to Calculate a Super Digit:

- If a given number has only one digit, then the super digit is the given number.
- Otherwise, the super digit of a given number is equal to the super digit of the sum of the split digits.

The superDigit for `9875` is calculated as follows:

```
superDigit(9875)   	9+8+7+5 = 29
superDigit(29) 	    2 + 9 = 11
superDigit(11)		1 + 1 = 2
superDigit(2)		= 2
```

_Function Description_
Complete the function `superDigit` in the `functions.js` file. It must return the calculated super digit as an integer.

`superDigit` has the following parameter(s):

- string `n`: a string representation of an integer
- int `k`: the times to concatenate `n` to make `p`

NOTE: The number `p` is created by concatenating the string `k` times.

_EXAMPLE_
n = '9875'
k = 4

The number `p` is created by concatenating the string `n(k)` times so the initial `p` = _9875987598759875_.

```
superDigit(p) = superDigit(9875987598759875)
        9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5 = 116
superDigit(p) = superDigit(116)
        1+1+6 = 8
superDigit(p) = superDigit(8)
```

All of the digits of `p` sum to 116. The digits of 116 sum to 8. 8 is only one digit, so it is the super digit.

## HELP

If at any moment you get stuck, or have a technical issues, feel free to reach out to anyone at Ministry Pass' development team. We are happy to assist!
