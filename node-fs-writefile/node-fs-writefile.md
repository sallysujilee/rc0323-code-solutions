# node-fs-writefile-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What method is available in the `node:fs` module for writing data to a file?
fs.writeFile, fs.appendFile, fs.createWriteStream
- Are file operations using the `fs` module synchronous or asynchronous?
Generally they're asynchronous

ChatGPT:
fs.writeFile(file, data[, options], callback): This method asynchronously writes data to a file, replacing the file if it already exists. If the file does not exist, a new file will be created. The data can be a string or a buffer. The options parameter can be used to specify options such as the encoding or file mode. The callback function will be called with an error object if there was an error writing the file.

fs.appendFile(path, data[, options], callback): This method asynchronously appends data to a file. If the file does not exist, a new file will be created. The data can be a string or a buffer. The options parameter can be used to specify options such as the encoding or file mode. The callback function will be called with an error object if there was an error appending the file.

fs.createWriteStream(path[, options]): This method returns a writable stream that can be used to write data to a file. The path parameter specifies the path to the file. The options parameter can be used to specify options such as the encoding or file mode.

As for the second question, file operations using the fs module can be either synchronous or asynchronous, depending on the method being used. The methods that have the suffix "Sync" in their name (e.g. fs.writeFileSync) are synchronous, while the other methods are asynchronous and require a callback function to be called upon completion. It's generally recommended to use the asynchronous methods, especially when dealing with large files or when performing file operations in a server environment where multiple requests may be happening simultaneously.

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
