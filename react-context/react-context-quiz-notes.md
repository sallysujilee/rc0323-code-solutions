# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
provide a way to share data between components without having to pass props manually at every level of the component tree
- What values can be stored in context?
can be any type of data as long as it is serializable (able to convert to JSON string)
- How do you create context and make it available to the components?
use `createContext` function and then wrap it to the component tree with `Context.Provider`
- How do you access the context values?
use the `useContext` hook -> { useContext }
- When would you use context? (in addition to the best answer: "rarely")
whenever you have data that needs to be accessed by multiple components through the different parts of the component tree, like the deeply nested components for example

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
