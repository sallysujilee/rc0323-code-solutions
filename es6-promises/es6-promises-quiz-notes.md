# es6-promises-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the three states a Promise can be in?
1.Pending: This is the initial state of a Promise. It means that the Promise is neither fulfilled nor rejected yet. In this state, the Promise is still waiting for the asynchronous operation to complete.

2.Fulfilled: This state means that the asynchronous operation associated with the Promise has completed successfully, and the result is available. When a Promise is fulfilled, it triggers the execution of the then() method with the resolved value as its argument.

3.Rejected: This state means that the asynchronous operation associated with the Promise has failed or encountered an error. When a Promise is rejected, it triggers the execution of the catch() method with the reason for rejection as its argument.

- How do you handle the fulfillment of a Promise?
To handle the fulfillment of a Promise, you can attach a then() method to it, which takes a callback function as its argument. The callback function is executed when the Promise is fulfilled. The resolved value of the Promise is passed as an argument to this callback function.

- How do you handle the rejection of a Promise?
To handle the rejection of a Promise, you can attach a catch() method to it, which takes a callback function as its argument. The callback function is executed when the Promise is rejected. The reason for rejection is passed as an argument to this callback function.

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
