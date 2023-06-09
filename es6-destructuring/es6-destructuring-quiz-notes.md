# es6-destructuring-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is destructuring, conceptually?
It allows you to extract values from objects and arrays and assign them to variables easily.
- What is the syntax for `Object` destructuring?
There's a data structure on the right side, the object variable, with the properties that need to be destructured on the left side inside of a set of curly braces.
- What is the syntax for `Array` destructuring?
Declare the variable, following by the opening brackets with the indexes of each variable separated by commas, a closing bracket, an assignment operator, and then the name of the object.
- How can you tell the difference between destructuring and creating `Object`/`Array` literals?
If the curly braces/square brackets are on the right hand side of the operator, a new object/array literal is being created; whereas if it's on the left hand side, it's being destructured.

ChatGPT:
Destructuring is a feature in JavaScript that allows you to extract individual values from arrays or properties from objects and assign them to variables in a more concise and readable way.

The syntax for Object destructuring is to define a set of variables with the same names as the properties you want to extract from the object, wrapped in curly braces { }, and then assign the object to be destructured to the left of the equals sign =. Here is an example:

```const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

const { name, age, city } = person;```

The syntax for Array destructuring is similar to Object destructuring, but instead of using curly braces { }, you use square brackets [ ]. Here is an example:

```const numbers = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numbers;```

You can tell the difference between destructuring and creating Object/Array literals based on the syntax. When destructuring, you are assigning existing values from an object or an array to variables using the curly braces { } or square brackets [ ], respectively. When creating Object/Array literals, you are creating new objects or arrays using the curly braces { } or square brackets [ ], respectively. Here are some examples:

```// Destructuring an object
const person = { name: 'John Doe', age: 30 };
const { name, age } = person;

// Creating an object literal
const person = { name: 'John Doe', age: 30 };

// Destructuring an array
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = numbers;

// Creating an array literal
const numbers = [1, 2, 3, 4, 5];```

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
