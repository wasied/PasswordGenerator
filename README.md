# Password Generator
This node script is made to generate an randomized password in the most effective way.
Use it to secure your passwords (you have to!).

## Installation
First, clone this repo on your machine from the terminal by using
```
git clone https://github.com/MaaxIT/PasswordGenerator
```

After, use this to automatically install all dependencies
```
npm i
```
And that's it, you can go to the next step.
<br>

## How to use 
To generate a password, simply write
```
npm run generate <i_pwd_length=13> <b_use_uppercase=true> <b_use_digits=true> <b_use_symbols=true>
```
<br>

## Examples

Generate a password with 13 characters using uppercase letters, digits and symbols.
```
npm run generate 13
```

Generate a password with 16 characters using only lowercase letters, digits and symbols.
```
npm run generate 16 false true true
```

Generate a password with 217 characters using only lowercase letters.
```
npm run generate 217 false false false
```

Generate a password with 7 characters using uppercase letters and digits.
```
npm run generate 7 true true
```
<br>

# Having a question ?
Make an issue :)
