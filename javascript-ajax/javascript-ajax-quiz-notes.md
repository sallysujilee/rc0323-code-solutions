# javascript-ajax-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is AJAX?
technique where web pages can update without having to refresh everytime
- What does the AJAX acronym stand for?
Asynchronous JavaScript and XML
- Which object is built into the browser for making HTTP requests in JavaScript?
`XMLHttpRequest` object
- What event is fired by `XMLHttpRequest` objects when they are finished loading the data from the server?
`readystatechange` event
- **Bonus Question**: An `XMLHttpRequest` object has an `addEventListener()` method just like DOM elements. How is it possible that they both share this functionality?
both are implemented as objecets in the javascript runtime environment

ChatGPT:
AJAX stands for Asynchronous JavaScript and XML. It is a technique used in web development that allows web pages to update content asynchronously without the need to refresh the entire page. Instead, the browser can send and receive data from the server in the background, and update only the necessary parts of the page.

The built-in browser object for making HTTP requests in JavaScript is the XMLHttpRequest object. This object allows developers to make HTTP requests to a server from JavaScript, and retrieve data without needing to reload the entire page.

When an XMLHttpRequest object finishes loading data from the server, it fires the readystatechange event. Developers can listen for this event and respond accordingly, such as by updating the page with the new data.

As for the bonus question, XMLHttpRequest objects and DOM elements share many similarities because they are both implemented as objects in the JavaScript runtime environment. Both types of objects can have properties, methods, and events. Therefore, it makes sense for them to share similar functionality, such as the addEventListener() method.

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
