# Day 1 - Assignment

### Task 1: Difference between HTTP 1.1 and HTTP 2.0 versions

| HTTP 1.1                                                                                                      | HTTP 2.0                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| All requests and responses are in plain text format                                                           | All messages and encapsulated in Binary Format                                                                  |
| Loads resources one after the other so if one resource is not loaded it prevents the others as well behind it | Uses a single TCP connection to load multiple streams of data at once so no resource end up blocking the others |
| Slower Loading time                                                                                           | Fast Loading time                                                                                               |
| Doesnt have the features                                                                                      | Supports header compression, multiplexing                                                                       |
| Requires a lot of optimization for performance                                                                | Eliminates the requirement for Optimization Hacks                                                               |

<hr>

### Task 2: Scripting language vs Programming language

| Scripting Languages                            | Programming Languages                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| JavaScript/ECMAScript, PHP, Python, Ruby etc., | C, C++, Haskell etc.,                                                     |
| Uses interpreter to run scripts                | Uses compilers to convert to machine code and requires os hardware to run |
| Script are used to run inside other programs   | Used to create applications                                               |


<hr>

### Task 3: The difference between Statically typed and Dynamically typed languages

| Statically Typed Language                                        | Dynamically Typed Language                                             |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Java, C, C++ etc.,                                               | Python, PHP, JavaScript etc.,                                          |
| data type is declared                                            | data type need not be declared                                         |
| Type checking is done at Compile Time                            | Type checking done at Runtime                                          |
| If errors exist at compile time the script will not run properly | The Script will run in spite of errors existing at time of compilation |
