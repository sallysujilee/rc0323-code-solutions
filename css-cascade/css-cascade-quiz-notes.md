# css-cascade-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the four components of "the Cascade".
Origin, specificity, importance, and order.
- What does the term "source order" mean with respect to CSS?
It refers to the order of the source...?
A way I was told by Nolan (LF TA):
Imagine a waterfall. You will feel the force of the waterfall at the very bottom. That is where all the power is.
With that in mind, whatever is at the bottom of the css code, the last one that is typed, will be the main used code.
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
The styles cascade down through each directories like genetics. Once one has one, it'll continue to be passed down along. However it's just the children; grandchildren don't matter.
- List the three selector types in order of increasing specificity.
Type, class, ID
- Why is using `!important` considered bad practice?

All answers source: ChatGPT

"The Cascade" in the context of CSS refers to the process of determining the final style rules that will be applied to an element, based on the various sources of styles that may be applicable. The four components of the Cascade are as follows:

Origin: the source of the style rule (e.g. author, user, browser default).
Specificity: how specific the selector is in targeting the element.
Importance: the priority level of the style rule (e.g. using !important).
Order: the order in which the style rules appear in the stylesheet or HTML document.
"Source order" refers to the order in which CSS rules are written in the stylesheet or HTML document. In CSS, when multiple rules apply to the same element, the one that appears later in the source order takes precedence.

When styles are applied to an element, they are automatically inherited by that element's child elements. This is because styles cascade down the document tree by default. However, this behavior can be overridden by using the "inherit" or "initial" keywords in the CSS rule.

The three selector types in order of increasing specificity are:

Type selectors (e.g. div, p, ul)
Class selectors (e.g. .my-class)
ID selectors (e.g. #my-id)
Using the !important keyword in CSS is considered bad practice because it can make it difficult to maintain and update the styles of a website. When multiple styles with !important are used, it can lead to unexpected and difficult-to-debug behavior. Additionally, it can make it harder to override styles later on if needed. It's generally better to use specificity to ensure that the correct style is applied, rather than relying on !important.

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
