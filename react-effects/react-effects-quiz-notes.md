# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
when it's initially rendered and inserted into document
- What is a React Effect?
function that allows you to perform events like data fetching or manually changing the DOM.
- When should you use an Effect and when should you not use an Effect?
use it when you need to perform side effects or things like fetching data (where you have to interact with data outside of what VS Code provides like APIs)
Don't use it for simple calculations, rendering, or state updates, especially with other React features
- When do Effects run?
after components are rendered and DOM updates
- What function is used to declare an Effect?
useEffect
- What are Effect dependencies and how do you declare them?
values that are used within the effect and determine when the effect should be re-run
- Why would you want to clean up from an Effect?
cleaning up helps avoid memory leaks and prevents stale data or orphaned processes from affecting the application's behavior
- How do you clean up from an Effect?
return function from effect function (aka cleanup function)
- When does the cleanup function run?
before effect runs again

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
