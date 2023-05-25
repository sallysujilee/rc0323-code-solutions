# react-sharing-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are two ways React components can interact?
props and shared state
- How can multiple React components share state?
Chat GPT:
1.Identify the common state: Determine the data that needs to be shared among the components. This could be any piece of information that multiple components need to access or update.

2.Lift the state up: Find a common ancestor component that is above all the components that need access to the shared state. Move the state and related functions from the individual components to this common ancestor component.

3.Pass state as props: Once the state is lifted to the common ancestor component, you can pass it down to the child components as props. Each child component receives the shared state as a prop and can use it as needed.

4.Update state through callbacks: To update the shared state, define callback functions in the common ancestor component. Pass these functions down to the child components as props. When a child component needs to modify the shared state, it can call the callback function provided by the ancestor component, which will update the state accordingly.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
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
