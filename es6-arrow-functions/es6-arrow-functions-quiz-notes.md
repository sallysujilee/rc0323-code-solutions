# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
You have the parameter followed by an arrow returning the expression
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
If there are no curly braces, it would be parantheses, thus returning only a single value
- When using _concise body syntax_, how do you return an object literal?
an example to return an object literal with concise body syntax is:
const getObject = () => ({ key1: value1, key2: value2 });
- In the expression
    ```js
    foo(() => 42);
    ```
  - Identify the arrow function
() => 42
  - How many arguments does the arrow function take?
no arguments
  - What value does it return?
42
  - How many arguments are passed to the function `foo`?
one (foo)
  - What type of argument is passed to the function `foo`?
foo
- In the expression
    ```js
    bar((y) => {
      console.log(`4y = ${4 * y}`);
    });
    ```
  - Identify the arrow function
(y) => { console.log(4y = ${4 * y}); }

  - How many arguments does the arrow function take?
one (y)
  - What value does it return?
no return value
  - How many arguments are passed to the function `bar`?
one (bar)
  - What type of argument is passed to the function `bar`?
function
  - When does the arrow function's code get executed?
executed after called by function `bar`
- How does the value of `this` differ between standard functions and arrow functions?
It's determined at the time of declaration and never changes

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
```

for HTML:
```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:
```css
div {
  width:100%
}
```
