# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
special function that allows you to use state and other React features in function components
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
1.Hooks should only be called at the top level of a React functional component or custom hook (not inside loops, conditions, or nested functions)
2.Hooks should be called in the same order every time a component renders
- What is the purpose of state in React?
to store and manage mutable data that affects the rendering and behavioral of a component
- Why can't we just maintain state in a local variable?
because they do not trigger component re-renders
re-renders are handled by React automatically
- What two actions happen when you call a `state setter` function?
1.state value updates with new value that is passed to the setter function
2.any components that depend on updated state value will receive new value and update its output accordingly
- When does the local `state variable` get updated with the new value?
during next render cycle

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
