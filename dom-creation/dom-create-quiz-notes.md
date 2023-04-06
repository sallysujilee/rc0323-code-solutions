# dom-creation-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Does the `document.createElement()` method insert a new element into the page?
No; you have to manually put it in
- How do you add an element as a child to another element?
use the `appendChild()` method
- What do you pass as the arguments to the `element.setAttribute()` method?
there are two arguments: the name of the attribute within a string, and the value of the attribute
- What steps do you need to take in order to insert a new element into the page?
create new element (`document.createElement()), make an attribute or content that you want to put into your element (i.e. `element.setAttribute()` or `element.textContent`), finally `appendChild()`
- What is the `textContent` property of an element object for?
it's to get or set the text content of the element
- Name two ways to set the `class` attribute of a DOM element.
1.`elemenet.setAttribute('class', 'my-class')`  2. setting `element.className = 'my-class'`
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
reusability and abstraction

ChatGPT:
No, the document.createElement() method does not insert a new element into the page. It only creates a new element node in memory.

To add an element as a child to another element, you can use the appendChild() method of the parent element. For example, if you have a parent element with an id of "parent" and a child element created with document.createElement("div"), you can add the child element to the parent element using document.getElementById("parent").appendChild(childElement).

The element.setAttribute() method takes two arguments: the name of the attribute as a string, and the value of the attribute as a string. For example, to set the src attribute of an image element to "image.jpg", you would use element.setAttribute("src", "image.jpg").

To insert a new element into the page, you need to take several steps. First, create the new element using document.createElement(). Next, set any attributes or content you want the new element to have using methods like element.setAttribute() or element.textContent. Finally, add the new element as a child of an existing element on the page using appendChild() or a similar method.

The textContent property of an element object is used to get or set the text content of the element. For example, if you have a div element with the text "Hello, world!" inside, you could get the text content using element.textContent, or set it to a new value using element.textContent = "Goodbye, world!".

Two ways to set the class attribute of a DOM element are:

Using the setAttribute() method: element.setAttribute("class", "my-class")
Directly setting the className property: element.className = "my-class"
Two advantages of defining a function to create a DOM tree are:

Reusability: By defining a function, you can easily create multiple instances of the same DOM tree throughout your code, without having to repeat the same code over and over again.
Abstraction: By hiding the implementation details of the DOM tree creation inside a function, you can create a higher-level abstraction that makes your code easier to read and maintain.

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
