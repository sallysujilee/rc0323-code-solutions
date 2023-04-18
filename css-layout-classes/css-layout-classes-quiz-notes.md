# css-layout-classes-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do two div elements "vertically stack" on one another by default?
By default, div elements have a display property set to block, which means they take up the full width of their container and start on a new line below the previous element. This is why two div elements will stack vertically on top of one another by default.
- What is the default `flex-direction` of an element with `display: flex`?
The default flex-direction of an element with display: flex is row. This means that the child elements of the flex container will be arranged in a horizontal row.
- What are the three primary components of a page layout? (Which helper classes do you need?)
The three primary components of a page layout are the header, content, and footer. Depending on the design, additional components such as navigation, sidebars, and sections may also be included. Helper classes such as .header, .content, and .footer can be used to target these components in CSS.
- What is the minimum number of **columns** that you should put in a **row**?
The minimum number of columns that should be put in a row depends on the design and the content being displayed. In general, it's best to use as few columns as possible to avoid clutter and make the content easier to read. A common practice is to use one or two columns for most content, with three or more columns reserved for more complex layouts.
- What is the purpose of a **container**?
The purpose of a container is to provide a fixed width for the content within it and to center that content on the page. A container is typically a div element that has a set width and margin set to auto so that it's centered horizontally. This helps to ensure that the content looks consistent and is easy to read on different screen sizes and devices. Additionally, a container may be used to apply styles to a specific section of the page without affecting other sections.

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
