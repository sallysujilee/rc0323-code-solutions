# javascript-constructors-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What does the `new` operator do?
Creates an instance of a constructor function or class
- What property of JavaScript functions can store shared behavior for instances created with `new`?
prototype property
- What does the `instanceof` operator do?
it returns a boolean statement depending on whether or not the the object is an instance of a specific constructor function

ChatGPT:
The new operator in JavaScript creates an instance of a constructor function or a class. It creates a new object, sets the prototype of that object to the prototype of the constructor function, and calls the constructor function with the newly created object as the this context. The new operator returns the newly created object unless the constructor function returns an object explicitly.

The prototype property of JavaScript functions can store shared behavior for instances created with new. Any methods or properties assigned to the prototype property will be available to instances of the function created with the new operator.

The instanceof operator in JavaScript tests whether an object is an instance of a particular constructor function. It returns true if the object is an instance of the constructor function or one of its descendants, and false otherwise. The syntax is object instanceof constructorFunction.

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
