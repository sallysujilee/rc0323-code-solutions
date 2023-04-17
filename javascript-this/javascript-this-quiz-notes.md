# javascript-this-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is `this` in JavaScript?
it's an implicit parameter
- What does it mean to say that `this` is an "implicit parameter"?
it can be used even without being defined within the code block
- _When_ is the value of `this` determined in a function; **call time** or **definition time**?
call time
- What does `this` refer to in the following code snippet?
    ```js
    const character = {
      firstName: 'Mario',
      greet: function () {
        const message = 'It\'s-a-me, ' + this.firstName + '!';
        console.log(message);
      }
    };
    ```
character object
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    character.greet();
    ```
'It's-a-me, Mario!'
Greet is called, therefore the concatenated sentence appears
- Given the above `character` object, what is the result of the following code snippet? Why?
    ```js
    const hello = character.greet;
    hello();
    ```
'It's-a-me, undefined!'
Greet is called which shows the concatenated sentence but there is no first name with the hello variable.
- How can you tell what the value of `this` will be for a particular function or method **definition**?
the value of this is determined when the function is called, not when it is defined. By default, when you call a function, it's this will be given the value of the global window object.
- How can you tell what the value of `this` is for a particular function or method **call**?
Find where the function is called and look for an object to the left of the dot. If you can't see where the function (or method) is called, then you cannot say for sure what the value of this is.

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
