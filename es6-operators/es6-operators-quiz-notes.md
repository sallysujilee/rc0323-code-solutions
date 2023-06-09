# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
&& (logical AND) and || (logical OR) are Boolean operators in programming languages that operate on two Boolean values and return a Boolean value
&& operator returns true if both of its operands are true, else returns false
|| operator returns true if at least one of its operands is true, else returns false
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
behavior of Boolean operators that allows them to avoid evaluating unnecessary expressions when the result of an operation can be determined without them
When using the && operator, if the first operand is false, the second operand is not evaluated at all, since the result of the operation is already known to be false. Similarly, when using the || operator, if the first operand is true, the second operand is not evaluated, since the result of the operation is already known to be true.
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
The ?? (nullish coalescing) operator is a new operator introduced in ECMAScript 2020 that provides a convenient way to check for null or undefined values and provide a default value if they are encountered. The operator returns the left-hand operand if it is not null or undefined, otherwise it returns the right-hand operand. The main difference between ?? and || is that ?? checks for null or undefined values specifically, whereas || considers falsy values such as 0, '', and false to be false.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
The ?: (ternary) operator is a shorthand way of writing an if/else statement in a single line of code. The operator takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false. The main difference between ?: and if/else is that ?: is an expression that returns a value, whereas if/else is a statement that controls the flow of program execution.

- What is the `?.` (optional chaining) operator? When would you use it?
The ?. (optional chaining) operator is a relatively new operator that allows you to safely access properties or methods of an object without causing a runtime error if the object is null or undefined. The operator works by chaining property or method calls with a ?. between them. If any of the properties or methods in the chain are null or undefined, the entire expression evaluates to undefined instead of throwing an error.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
The ... (spread) syntax is a feature in JavaScript that allows you to expand an iterable (such as an array or a string) into multiple elements. With arrays, it can be used to copy the elements of one array into another array, or to pass the elements of an array as arguments to a function. With objects, it can be used to copy the properties of one object into another object.
- What data types can be spread into an array? Into an object?
With arrays, any iterable can be spread into an array, including other arrays, strings, and objects with a Symbol.iterator property. With objects, only objects with a Symbol.iterator property can be spread into an object.
- How does spread syntax differ from rest syntax?
Rest syntax is similar to spread syntax, but it works in the opposite direction: it collects multiple elements into an array or object. In function definitions, rest syntax allows you to collect the remaining arguments into an array or object, and in object or array destructuring, it allows you to collect the remaining elements into a single variable. Rest syntax is denoted by the use of ... followed by a variable name.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```js
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
