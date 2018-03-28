# my-first-express mini exercises

#### app.js Express exercise
Calculator exercise where you pass in the operation and two numbers. 

#### index.js MIDDLEWARE 
Requirements:
- Take the phrase: "I <3 JavaScript" (or any three-word phrase).
- The endpoint /phrase  should print this string.
- However, the string is built using four handlers!
- The first handler should add a "phrase" key to the "request" object along with the first word and pass it along.
- The second handler should add the second word to the "phrase" key of the "request" object and pass it along.
- The third handler should add the third word to the "phrase" key of the "request" object and pass it along.
- The fourth handler should issue the complete "request.phrase" response, without adding anything to the "request" object at all.

example:   GET   /phrase   --> "I <3 JavaScript"
