# javascript-custom-methods-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a **method**?
code block that performs from a set of instructions to the called object
- How can you tell the difference between a method
_definition_ and a method _call_?
Method definition: defines how
- Describe method **definition** syntax (structure).
You have the access_modifier followed by the return_type with the method_name called by an optional parameter. There's a code block being opened by it with a return statement inside the code block before being closed.
- Describe method **call** syntax (structure).
you have the methodName called by various arguments and the expression is returned by the result variable
- How is a method different from any other function?
method has specific set of instructions that you call for the object/class you want to use it for whereas with other functions you don't
- What is the **defining characteristic** of
Object-Oriented Programming?
use of objects
- What are the four "principles" of Object-Oriented Programming?
Encapsulation, Inheritance, Polymorphism, Abstraction
- What is "abstraction"?
Process of keeping long details hidden and making the necessary information visible
- What does API stand for?
Application Programming Interface
- What is the purpose of an API?
integrate new applications with existing software systems

ChatGPT:
A method is a block of code that performs a specific task and can be called or executed when required.

A method definition is the code that defines how a method works, including its name, parameters, and return type. A method call is when you actually use the method in your code by invoking its name and passing any required arguments.

Method definition syntax typically includes the following elements:

javascript
Copy code
access_modifier return_type method_name(parameters) {
  // code block
  return value;
}
The access_modifier controls the visibility of the method, such as public or private.
The return_type specifies the type of value that the method returns, such as int or void.
The method_name is a unique identifier for the method.
parameters are optional inputs that the method may require to do its task.
The code block is the actual code that is executed when the method is called.
The return statement specifies the value to be returned by the method, if any.
Method call syntax typically includes the method name followed by parentheses that may contain any required arguments, like this:
scss
Copy code
result = methodName(argument1, argument2);
methodName is the name of the method being called.
argument1 and argument2 are values that may be passed to the method to help it perform its task.
The result variable is where the method's return value will be stored, if any.
A method is a type of function that is associated with an object or class in object-oriented programming, whereas a regular function is not.

The defining characteristic of Object-Oriented Programming (OOP) is the use of objects, which are instances of classes that encapsulate data and behavior.

The four principles of OOP are:

Encapsulation: bundling data and behavior into a single unit (class) and hiding implementation details from outside code.
Inheritance: creating new classes from existing ones to inherit their properties and methods.
Polymorphism: the ability of objects to take on multiple forms or behaviors.
Abstraction: the ability to define and use complex concepts and systems without needing to know their inner workings.
Abstraction is the process of hiding complex implementation details and exposing only the essential features of a concept or system to make it easier to understand and use.

API stands for Application Programming Interface.

The purpose of an API is to provide a standardized way for different software components, applications, or systems to communicate and interact with each other. APIs define the rules and protocols for sending and receiving data, and they often allow developers to build on top of existing code and functionality without needing to understand all the underlying details.

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
