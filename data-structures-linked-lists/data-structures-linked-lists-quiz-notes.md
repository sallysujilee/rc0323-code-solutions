# data-structures-linked-lists-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How are linked lists different from an array?
array has elements that are accessed via index numbers whereas linked lists , arrays have a fixed size when they're declared whereas linked list is able to grow or shrink as elements are added or removed, you have to do a lot of shifting for arrays where as you can just update the references to insert or delete elements in linked lists
- How would you access an arbitrary node in a linked list (not just the "head")?
ChatGPT:
Start at the head node of the linked list.
Initialize a counter variable to 0.
Iterate through the list by following the references (links) from one node to the next until you reach the desired position or the end of the list.
If the desired position is found, return the node.
If the end of the list is reached before reaching the desired position, the position is invalid (out of bounds).

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
