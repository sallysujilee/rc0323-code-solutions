# javascript-prototypes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What kind of inheritance does the JavaScript programming language use?
prototype-based inheritance
- What is a prototype in JavaScript?
object used as a template to create other objects
- How is it possible to call methods on strings, arrays, and numbers even though those methods don't actually exist on strings, arrays, and numbers?
They are all considered objects, therefore a prototype object already comes along with it
- If an object does not have it's own property or method by a given key, where does JavaScript look for it?
in hte objet's prototype chain

ChatGPT:
JavaScript uses prototype-based inheritance, where objects can inherit properties and methods from other objects.

In JavaScript, a prototype is an object that is used as a template for creating other objects. Every object in JavaScript has a prototype, which is either null or another object. The prototype of an object is used to share properties and methods among objects.

In JavaScript, strings, arrays, and numbers are objects, and they have prototype objects that define their methods. When you call a method on a string, array, or number, JavaScript looks for that method in its prototype object. If the method is not found there, JavaScript looks for it in the prototype object's prototype, and so on up the chain of prototypes, until it reaches the top level Object.prototype.

If an object does not have its own property or method by a given key, JavaScript looks for it in the object's prototype chain. JavaScript starts by looking for the property or method in the object's own prototype, then in its prototype's prototype, and so on, until it reaches the top level Object.prototype. If the property or method is not found in any of the prototypes in the chain, JavaScript returns undefined.

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
