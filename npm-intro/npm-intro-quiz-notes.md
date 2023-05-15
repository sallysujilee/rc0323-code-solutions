# npm-intro-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is NPM?
NPM stands for "Node Package Manager." It is a software package manager for the JavaScript programming language. NPM allows developers to discover, install, and manage packages, which are reusable code modules, libraries, or tools created by other developers.
- What is a package?
A package is a self-contained unit of code that can be distributed and installed. It typically includes a manifest file (such as package.json), which contains metadata about the package, as well as the actual code files, dependencies, and other resources.
- What are some other popular package managers?
Some other popular package managers apart from NPM are Yarn (developed by Facebook), PIP (for Python), RubyGems (for Ruby), and NuGet (for .NET).
- How can you create a `package.json` with `npm`?
To create a package.json file using NPM, you can navigate to the root directory of your project in the command line and run the command npm init. NPM will prompt you to provide information about your project, such as the package name, version, description, entry point, dependencies, and more. Once you provide the necessary details, NPM will generate a package.json file for your project.
- What is a dependency and how do you add one to a package?
A dependency is a package that your project relies on to function correctly. Dependencies are typically listed in the dependencies section of the package.json file. You can add a dependency to your package by using the npm install command followed by the package name. For example, npm install lodash would add the "lodash" package as a dependency to your project.
- What happens when you add a dependency to a package with `npm`?
When you add a dependency to a package with npm, the specified package and its required version are downloaded and installed in a directory called node_modules within your project. The installed package becomes available for your project to use, and its dependencies are also installed recursively, ensuring that all required packages are available.
- What is a devDependency and how do you add one to a package?
A devDependency is a package that is only required during development, such as testing frameworks or build tools. DevDependencies are typically listed in the devDependencies section of the package.json file. To add a devDependency, you can use the --save-dev flag with the npm install command. For example, npm install --save-dev jest would add the "jest" package as a devDependency to your project.
- How do you define and run `npm` scripts? Why are these useful?
NPM scripts are custom commands defined in the scripts section of the package.json file. They allow you to automate various tasks, such as running tests, building your project, or starting a development server. You can define a script by adding a key-value pair in the scripts section, where the key is the script name, and the value is the command you want to run. To execute an npm script, you can use the npm run command followed by the script name. NPM scripts are useful for streamlining development workflows and providing a convenient way to execute common tasks associated with your project.

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
