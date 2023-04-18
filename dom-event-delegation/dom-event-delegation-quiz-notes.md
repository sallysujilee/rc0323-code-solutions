# dom-event-delegation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the `event.target`?
it's the element that is being chosen to enable to the assigned action
- Why is it possible to listen for events on one element that actually happen its descendent elements?
The descendent is a part of the parent element, so whatever the listen method is on, it can listen to the targetted element along with its children.
- What DOM element property tells you what type of element it is?
`tagName`
- What does the `element.closest()` method take as its argument and what does it return?
takes a CSS selector and it returns the 'closest' parent element of that chosen element
- How can you remove an element from the DOM?
`element.remove()`
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
put it in parent element

ChatGPT:
event.target refers to the element on which the event was originally triggered or the deepest element that originated the event, as it bubbles up the DOM tree. For example, if you click on a button element inside a div element, the event.target would be the button element.

Events in the DOM propagate from the target element up through its ancestor elements until it reaches the topmost element (usually the document object). This process is called event propagation or event bubbling. Because of this, it is possible to listen for events on a parent element that will also capture events that occur on its descendant elements.

The tagName property of a DOM element object returns the name of the tag that corresponds to the element in the HTML document. For example, for a div element, element.tagName would return the string "DIV".

The element.closest() method takes as its argument a CSS selector and returns the closest ancestor element of the current element that matches the selector. If the element itself matches the selector, it is returned. If no matching ancestor is found, the method returns null.

To remove an element from the DOM, you can use the remove() method of the element object, like this: element.remove();. This method removes the element from the DOM and also cleans up any event listeners or other resources associated with the element.

You can use event delegation to avoid adding an event listener to every new element individually. Event delegation involves attaching an event listener to a parent element that will handle events for its descendant elements. This way, you only need to attach one event listener to the parent element, and any new child elements that are added later will automatically be handled by the same listener. To implement event delegation, you can use the addEventListener() method on the parent element, and then use the event.target property inside the event handler to determine which child element triggered the event.
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
