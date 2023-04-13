# javascript-view-swapping-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
it's the selected element that is being used to start the action that it is being assigned to
- What is the affect of setting an element to `display: none`?
it hides the element from the user; it's still there but the user will not see it
- What does the `element.matches()` method take as an argument and what does it return?
it takes a selector string as an argument and returns 'true' if it coincides with the selector or 'false' if it doesn't
- How can you retrieve the value of an element's attribute?
`getAttribute()`
- At what steps of the solution would it be helpful to log things to the console?
any steps; it's good to keep checking to make sure each code is running smoothly and so it's not a struggle later down the line to see which one is causing the problem
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
use `addEventListener` to each `tab` and `view` elements
- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
write statements to either show or hide each view element based on its ID

ChatGPT:
event.target refers to the DOM element that triggered the event. For example, if a user clicks on a button, the event target would be the button element.

Setting an element to display: none hides the element from view and removes it from the normal flow of the page layout. The element is still present in the DOM, but it is not visible to the user.

The element.matches() method takes a selector string as an argument and returns true if the element matches the selector, or false if it does not. This method can be useful for checking if an element matches a specific CSS selector.

You can retrieve the value of an element's attribute using the getAttribute() method. For example, to get the value of the src attribute of an img element, you can use the following code: const srcValue = myImgElement.getAttribute('src');

It can be helpful to log things to the console during the development process to debug any issues that may arise. For example, you might want to log the value of a variable to ensure that it has the expected value, or log a message to indicate that a certain function has been called.

Without event delegation, you would need to add event listeners to each individual tab and view element. This would result in much more verbose code and make it more difficult to manage the event listeners.

Without using a loop, you would need to write individual statements to show or hide each view element based on its ID. This would also result in more verbose code and make it more difficult to maintain if you needed to add or remove views in the future.

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
