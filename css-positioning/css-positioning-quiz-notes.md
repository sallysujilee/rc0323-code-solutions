# css-positioning-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the **default** value for the `position` property of HTML elements?
Default value of the `position` property is static.
-ChatGPT
- How does setting `position: relative` on an element affect document flow?
Own words:
In `position: relative`, the editing file is not removed from the document flow.

Setting position: relative on an element does not remove it from the document flow, but it allows the element to be positioned relative to its normal position in the flow. This means that the element's position can be adjusted using the top, bottom, left, and right properties.
-ChatGPT
- How does setting `position: relative` on an element affect where it appears on the page?
Own words:
The file is able to be moved to whichever space on the webpage by manually adding in specific coordinates for placement.

Setting position: relative on an element does not necessarily affect where it appears on the page, but it does allow the element's position to be adjusted relative to its normal position. So, if the element's position is adjusted using the top, bottom, left, and right properties, it will appear in a different location on the page.
-ChatGPT
- How does setting `position: absolute` on an element affect document flow?
Own words:
The file becomes removed from the document flow. Now non-absolute files are trying to fill up any unused space.

Setting position: absolute on an element removes it from the document flow, which means that it no longer takes up space in the normal flow of the document. This can cause other elements to move to fill the empty space left by the absolutely positioned element.
-ChatGPT
- How does setting `position: absolute` on an element affect where it appears on the page?
Own words:
If, let's say an image, was to have a `position: absolute` in its css code, it will not be where it was originally occupying on the page space.

Setting position: absolute on an element allows it to be positioned relative to its nearest positioned ancestor, or relative to the initial containing block if no positioned ancestor exists. This means that an absolutely positioned element can appear in a different location on the page than where it would normally appear in the document flow.
-ChatGPT
- How do you constrain an absolutely positioned element to a containing block?
Own words:
By creating a coordinate position with the `top`, `bottom`, `left`, and `right` properties, you can constrain the absolutely positioned element.

To constrain an absolutely positioned element to a containing block, you can set the containing block to have a position value other than static (such as relative or absolute), and then set the absolutely positioned element's top, bottom, left, and right properties relative to the containing block.
-ChatGPT
- What are the four box offset properties?
Own words:
`top`, `bottom`, `left`, `right`

The four box offset properties are top, right, bottom, and left. These properties allow you to specify the offset of an element from the top, right, bottom, and left edges of its containing block, respectively. They are used in conjunction with the position property to position an element on the page.
-ChatGPT

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
