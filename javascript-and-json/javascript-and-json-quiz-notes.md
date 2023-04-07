# javascript-and-json-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is JSON?
Data format that like the layman term for coding that makes it easy for a user to write the code and the computer to understand and generate the code.
- What are serialization and deserialization?
serialization - process of converting objects into a storable format
deserialization - process of converting the stored format into its original form
- Why are serialization and deserialization useful?
easily moved from one storage to another and modify to fit other formating for different applications/systems
- How do you serialize a data structure into a JSON string using JavaScript?
`JSON.stringify()`
- How do you deserialize a JSON string into a data structure using JavaScript?
`JSON.parse()`

ChatGPT:
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is a text-based format that is commonly used for transmitting data between a web application and a server.

Serialization is the process of converting an object or data structure into a format that can be stored or transmitted. Deserialization is the process of converting a serialized object or data structure back into its original form. These processes are commonly used in computer programming to save and transmit data between different applications or systems.

Serialization and deserialization are useful because they allow data to be easily transmitted and stored in a format that can be understood by different applications or systems. For example, a web application may need to send data to a server or receive data from a server in a standardized format, and JSON provides a common format for this purpose.

To serialize a data structure into a JSON string using JavaScript, you can use the JSON.stringify() method. This method takes an object as an argument and returns a string in JSON format. For example:
javascript
```const data = { name: 'John', age: 30 };
const jsonString = JSON.stringify(data);
console.log(jsonString); // Output: {"name":"John","age":30}```

To deserialize a JSON string into a data structure using JavaScript, you can use the JSON.parse() method. This method takes a JSON string as an argument and returns a JavaScript object. For example:
javascript
```const jsonString = '{"name":"John","age":30}';
const data = JSON.parse(jsonString);
console.log(data); // Output: { name: 'John', age: 30 }```

## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:

```javascript
const data = "Howdy";
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
