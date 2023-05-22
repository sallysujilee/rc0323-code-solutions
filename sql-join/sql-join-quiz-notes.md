# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
the column that contains the id numbers of each individual rows that represents the items in the table
- How do you join two SQL tables? (Provide at least two syntaxes.)
select *
  from "[insert name of table]"
  join "[insert name of table you want to join]" using ("[insert name of the column with the id numbers of each row]");
- How do you temporarily rename columns or tables in a SQL statement?
put `as` after what you want to rename followed by the name you want to replace the column or table with
- How do you create a one-to-many relationship between two tables?
you combine tables so that one particular table can have access to many other tables that pertain to the particular table

example:
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100)
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);
- How do you create a many-to-many relationship between two tables?
you need to introduce a junction table with foreign keys that holds the associations between the two tables
example:
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100)
);

CREATE TABLE StudentCourses (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
);

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
