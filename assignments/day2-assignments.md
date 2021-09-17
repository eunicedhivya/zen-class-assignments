# Day 2 - Assignments

### Task 1: Browser JS vs Node JS 

| Browser JS                                                                       | Node JS                                                                           |
|----------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| BrowserJS is run/executed inside the browser as its name suggests                | Node.js is run as an interpreter independent of the browser                       |
| BrowserJs is used primarily for rendering Frontend                               | Node.JS runs both frontend and server-side applications                           |
| Browser generates the DOM, Document and windows and other web api's like cookies | Nodejs doesnt have the DOM, Document and windows and other web api's like cookies |
| Browser cannot access the local filesystem                                       | Nodejs can access the local filesystem                                            |
| Browser requires additional libraries to run es5+ compatible scripts             | Nodejs can run on ECMA Script compatible code                                     |

<hr>

### Task 2: Is it necessary to write HEAD, BODY and HTML tags?

It is not compulsory to use head, body or html tags and can be ommited because HTML5 is not an extremely strict language. Only in HTML4 it couldnt be ommited. Infact its been observed that chrome and other browsers have automatically inserted the missing tags in the DOM (Document Object Model). But not ommiting the tags can be advantageous as listed below.

- Using the tags creates an advantage of clear structure seperating content in the html document.
- It also allows you to use those tags as css selectors for detailed styling when required.
- Head tags allows you to seperate meta information that is not visible and only for the browsers to run from visible content.

<hr>

### Task 3: typeof

```
console.log(typeof(1));
console.log(typeof(1.1));
console.log(typeof('1.1'));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof(undefined));
console.log(typeof([]));
console.log(typeof({}));
console.log(typeof(NaN));
```
*** Output ***
```
typeof(1): Is a number.
typeof(1.1): Is a number.
typeof('1.1'): Is a string (plain text).
typeof(true): Is a boolean (used to check if something is true or false)
typeof(null): Is an object (its an empty value)
typeof(undefined): Is undefined (it means no value has been assigned).
typeof([]): Is an object (Used as to create arrays).
typeof({}): Is an object (Used to create JSON objects).
typeof(NaN): Abbreviation expands to Not a Number. Its technically identified as a number though used to represent values that are not numbers during mathematical operation.
```
<hr>

### Task 3: What is a prototype?

Prototype is early working example of a product, website, application etc. Its used to test and improve the given product through brainstorming and collaboration before its released for production. Its a crucial step in design process that allows creators to identify issues, defects and solution to it saving them a lot of investment and time at releasing stage.

*** There are different levels to prototype ***

- Low fidelity prototype often made of paper, sticky notes and sketches and is inexpensive to create
- Medium fidelity prototype also called wireframes with bare minimum details that allows a user to see underlying structure
- High fidelity prototype which add to the wireframe as much as detail as possible like visual design, content and even interaction
