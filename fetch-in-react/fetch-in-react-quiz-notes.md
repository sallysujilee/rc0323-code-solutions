# fetch-in-react-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How can `useEffect` be used to load data for a component?
it lets you synchronize a component with an external system
- What browser function can be used to make HTTP requests to a server in React?
Fetch API
- How do you use `useEffect` to load component data just once when the component mounts?
you pass an empty dependency array `[]` as teh second argument when using `useEffect`

i.e.
useEffect(() => {

}, []);
- How do you use `useEffect` to load component data every time the data key changes?
add in the `dataKey` in the second argument so that whenever the value changes, the effect will be re-triggered and the updated key can be fetched

i.e.
useEffect(() => {

}, [dataKey]);
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
Redux
MobX
GraphQL

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
