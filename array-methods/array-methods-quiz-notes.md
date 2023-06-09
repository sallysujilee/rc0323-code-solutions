# array-filter-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- `Array.forEach`:
    - What does `Array.forEach` do?

      Allows you to loop through an array and execute a function for each element in the array.

    - What should the callback function do?

     It should accept three arguments: the current element being processed, the index of the current element, and the array being traversed. The callback function can also be passed a second optional argument to set the this value when executing the callback.

    - What is `Array.forEach` useful for?
      It's useful when you want to perform a task on each element of an array, such as updating the value of each element, printing each element to the console, or any other operation that you want to apply to each element in the array.
- `Array.map`:
    - What does `Array.map` do?

      Allows you to loop through an array and execute a function for each element in the array and returns a new array with the results of the function applied to each element of the original array.

    - What should the callback function return?

      It should also accept three arguments: the current element being processed, the index of the current element, and the array being traversed. It should also return a new value for the current element that will be added to the new array that Array.map returns.

    - What is `Array.map` useful for?
      It's useful when you want to transform each element in an array into a new value and return a new array with those transformed values. For example, you might use Array.map to convert an array of numbers into an array of strings, or to extract a specific property from an array of objects.

- `Array.filter`:
    - What does `Array.filter` do?

      Allows you to loop through an array and filter out elements that do not meet a certain condition. The method returns a new array with only the elements that pass the test implemented by the provided function.

    - What should the callback function return?

      It should also accept three arguments: the current element being processed, the index of the current element, and the array being traversed. It should return a boolean value indicating whether the current element passes the test.

    - What is `Array.filter` useful for?

       It's useful when you want to extract a subset of elements from an array that meet a specific condition, such as filtering out negative numbers or finding all elements that contain a certain string.

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
