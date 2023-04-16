# javascript-local-storage-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you store data in `localStorage`?
localStorage.setItem('insert a key', 'insert the value')
- How do you retrieve data from `localStorage`?
assign the key from the localStorage with an argument to the value you want to retrieve from
- What data type can `localStorage` save in the browser?
any data type can be stored as long as it can be a string
- When does the `'beforeunload'` event fire on the `window` object?
when user leaves the page

ChatGPT:
To store data in localStorage, you can use the setItem() method of the localStorage object. The setItem() method takes two arguments: a key and a value, both of which should be strings. Here's an example of how to store a key-value pair in localStorage:
`localStorage.setItem('myKey', 'myValue');`
To retrieve data from localStorage, you can use the getItem() method of the localStorage object. The getItem() method takes one argument: the key of the item you want to retrieve. Here's an example of how to retrieve a value from localStorage:
`const myValue = localStorage.getItem('myKey');`
localStorage can save data as strings, so you can save any data that can be serialized as a string, including strings, numbers, booleans, arrays, and objects. However, when retrieving data from localStorage, you will need to deserialize the string back into its original data type.

The 'beforeunload' event fires on the window object when the user navigates away from the current page or closes the browser tab/window. This event can be used to prompt the user to confirm whether they want to leave the page without saving changes.

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
