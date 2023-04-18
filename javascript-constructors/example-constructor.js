function ExampleConstructor() {}
console.log('value of prototype:', ExampleConstructor.prototype);
console.log('typeof prototype:', typeof ExampleConstructor.prototype);

const exampleInstance = new ExampleConstructor();
console.log('value of exampleInstance:', exampleInstance);
const isInstanceOfExampleConstructor = exampleInstance instanceof ExampleConstructor;
console.log('isInstanceOfExampleConstructor:', isInstanceOfExampleConstructor);
