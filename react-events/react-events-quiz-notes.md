# react-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is an "event" in React?
a user action when interacting with anything on the web application
- What is an "event handler"? Which component declares the handler?
event handler = function that is executed in response to an event
usually written in camelCase
- How do you pass an event handler to a React component?
pass it as a prop (i.e. `onClickHandler` in `<Button onClickHandler={handleClick}` />)
- What is the naming convention for event handlers?
use prefix "on" before event name (i.e. `onClick`)
- What is an "event handler prop"? Which component declares the prop?
event handler prop = prop that is specifically designed to accept an event handler function
the component that declares an event handler prop is typically the one that needs to handle the event, such as a parent component passing additional event handling logic down
- What are some custom event handler props a component may wish to define?
an example could be when you hover your mouse over and you want an action to occur, you can make a custom event handler prop like `onHover`
- What is the naming convention for custom event handler props?
"on" is a common prefix to use for custom event handler props (i.e. `onSubmit`)

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
