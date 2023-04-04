# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
To ensure the code is running smoothly and there aren't any errors.
- What is the purpose of events and event handling?
Events are the actions done by a user in the browser. Event handling is the process of writing code that fulfills the actions.
- Are all possible parameters required to use a JavaScript method or function?
No
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
`addEventListener()`
- What is a callback function?
It's a function that is passed as an argument that occurs when one function is done and moves on as the other function.
- What object is passed into an event listener callback when the event fires?
`event object`
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
it's a property of the event object that is directly pulled from its main directory, very specifically
- What is the difference between these two snippets of code?
    ```js
    element.addEventListener('click', handleClick)
    ```
    ```js
    element.addEventListener('click', handleClick())
    ```
The first one calls for the `handleClick`function when the specific event happens whereas the second function passes its return value as the addEventListener callback

We log things to the console in JavaScript for debugging purposes. By logging messages, variables, or objects to the console, we can better understand what our code is doing and find errors or issues in our code.

Events are actions or occurrences that happen in the browser, such as a user clicking on a button or the browser finishing loading a page. Event handling refers to the process of writing code that responds to those events. Event handling is used to add interactivity to web pages and make them more dynamic.

Not all parameters are required to use a JavaScript method or function. Some parameters may have default values, or a function may be able to work without all of its parameters being supplied. However, some parameters may be required for the function to work as intended, and failing to supply those parameters could result in errors or unexpected behavior.

The addEventListener() method of element objects lets you set up a function to be called when a specific type of event occurs. For example, you could use element.addEventListener('click', handleClick) to set up a click event listener that calls the handleClick() function when the element is clicked.

A callback function is a function that is passed as an argument to another function and is called by that function when a certain event occurs or when the function has completed its task. Callback functions are commonly used in event handling and asynchronous programming in JavaScript.

When an event fires, an event object is passed into the event listener callback. This object contains information about the event that occurred, such as the type of event, the target element that triggered the event, and any additional data related to the event.

event.target is a property of the event object that refers to the element that triggered the event. It can be used to access information about the element or to manipulate it. To check what event.target is, you could log it to the console within an event listener callback. You could also look up more information about it in the JavaScript documentation or online resources.

The first snippet of code adds an event listener to the element that listens for a click event and calls the handleClick function when the event occurs. The second snippet of code adds an event listener to the element that immediately calls the handleClick function and passes its return value as the event listener callback. This is not typically what you want, as you want to pass the function reference as the callback, not the return value of the function.

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
  width: 100%;
}
```
