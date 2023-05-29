/*
try: wrap suspicious code that may throw an error in try block.The try statement allows us to define a block of code to be tested for errors while it is being executed.

catch: write code to do something in catch block when an error occurs. The catch block can have parameters that will give you error information. Catch block is used to log an error or display specific messages to the user.

finally: finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
*/

try {
  let firstName = "John";
  let lastName = "Doe";
  let fullName = firstName + Name;
  console.log(fullName);
} catch (err) {
  console.log(err);
}

//ReferenceError: Name is not defined
