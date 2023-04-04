# dom-manipulation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `className` property of element objects?
It's a property wher eyou take the `class` attribute and use its value or you can give it a value
- How do you update the CSS class attribute of an element using JavaScript?
Use .className and assign it with a new string with the CSS class you want to apply it with the element.
- What is the `textContent` property of element objects?
it's a string that is a placeholder for the directory file you want to use and all of its descendants
- How do you update the text within an element using JavaScript?
use .textContent and assign a new string value
- Is the `event` parameter of an event listener callback always useful?
no; if the function doesn't need the information connected to the parameter, then it's unnecessary.
- Would this assignment be simpler or more complicated if we didn't use a variable to keep track of the number of clicks?
complicated; imagine trying to have all these numbers go out and about just so you can be stuck with unorganized numbers and then you have to individually add a value for each number
- Why is storing information about a program in variables better than only storing it in the DOM?
Better efficiency and performance

ChatGPT:
The className property of element objects is a string that contains the value of the class attribute of the element. It can be used to get or set the value of the class attribute.

To update the CSS class attribute of an element using JavaScript, you can use the className property and assign it a new string value containing the name(s) of the CSS class(es) you want to apply to the element. For example, if you have an element with an ID of "myElement" and you want to add the CSS class "highlight" to it, you can use the following code: document.getElementById("myElement").className = "highlight";

The textContent property of element objects is a string that represents the text content of the element and all its descendants. It can be used to get or set the text content of an element.

To update the text within an element using JavaScript, you can use the textContent property and assign it a new string value representing the new text you want to display. For example, if you have a paragraph element with an ID of "myParagraph" and you want to change its text to "Hello, world!", you can use the following code: document.getElementById("myParagraph").textContent = "Hello, world!";

The event parameter of an event listener callback is not always useful, depending on the specific needs of the callback function. It is useful when the function needs to access information about the event that triggered it, such as the type of the event, the target element, or any data associated with the event. However, if the function does not need this information, the event parameter can be omitted.

The assignment would be more complicated if we didn't use a variable to keep track of the number of clicks. We would have to retrieve the current value of the element's text content, convert it to a number, increment it, convert it back to a string, and set the text content of the element to the new value. Using a variable simplifies this process by allowing us to manipulate the number directly in code and then update the element's text content with a single assignment.

Storing information about a program in variables is better than only storing it in the DOM because it makes the code more modular, easier to read and understand, and less error-prone. Variables allow us to give names to values and reuse them throughout the code, which makes it easier to change them if needed and to reason about the behavior of the program. On the other hand, storing information only in the DOM can make the code more difficult to maintain, as it can be hard to keep track of which elements hold which values and how they are related to each other.

## Notes

All student notes should be written here.


let = 0
$hotbButton.addEventListener('click, handleHOtButtonClick);

function handleHotButtonClick(event) {
  number of CLicks++')
  let temperature;
  if (numberOfCLicks <4) {
    temperature = 'cold';
  } else if (numberOfClicks < 7) {
    temperature = 'col'
  } else {
    temerapture = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCountDisplay.textContent = 'Clicks: ' + numberOfClicks;


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
