# javascript-timers-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a "callback" function?
an argument that is passed to another function that's meant to be called later
- Besides adding an event listener callback function to an element or the `document`, what is one way to delay the execution of a JavaScript function until some point in the future?
`setTimeout()`
- How can you set up a function to be called repeatedly without using a loop?
use `setInterval()`
- What is the default time delay if you omit the `delay` parameter from `setTimeout()` or `setInterval()`?
0 milliseconds
- What do `setTimeout()` and `setInterval()` return?
an integer that represents an ID for the timer

ChatGPT:
A "callback" function is a function that is passed as an argument to another function and is meant to be called by that function at a later time. The callback function can be executed when a certain event occurs, when a particular condition is met, or when a task has completed. Callback functions are commonly used in asynchronous programming to handle responses from APIs, file I/O, and other types of operations.

One way to delay the execution of a JavaScript function until some point in the future is to use the setTimeout() function. You can pass the function to be executed as a callback function to setTimeout() along with a time delay in milliseconds. The function will then be executed after the specified delay.

You can set up a function to be called repeatedly without using a loop by using the setInterval() function. This function takes a callback function as its first argument and a time delay in milliseconds as its second argument. The function will be executed repeatedly at the specified interval until it is stopped with clearInterval().

If you omit the delay parameter from setTimeout() or setInterval(), the default time delay will be 0 milliseconds. This means that the function will be executed as soon as possible after the current execution context is finished.

setTimeout() and setInterval() return a numeric value that represents an ID for the timer that was created. This ID can be used to cancel the timer with the clearTimeout() or clearInterval() functions.

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
