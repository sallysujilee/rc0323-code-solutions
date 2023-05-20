# sql-insert-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do you add a row to a SQL table?
insert into [name of directory] ("category title")
values ('insert what you want to put in')
returning *;

- What is a tuple?
permament, unchangeable, data structure that creates lists where it helps group together related data and represent a single entity
- How do you add multiple rows to a SQL table at once?
add a comma outside of the parentheses of the first set and then in the next line, repeat with parentheses with the content necessary inside

insert into [name of directory] ("category title")
values ('insert what you want to put in'),
       ('insert what you want to put in')
returning *;
- How do you get back the row being inserted into a table without a separate `select` statement?
use `returning *` after `values`

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
