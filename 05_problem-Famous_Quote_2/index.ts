/*5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a
variable called famous_person. Then compose your message and store it in a new variable
called message. Print your message. */

let famousAuthor : string = "James Clear";
let bookTitle : string = "Atomic Habits";
let quote : string = "\"If you can get 1% better each day for one year, you'll end up 37 times better by the time you're done.\"";
let message =`${quote}, ${bookTitle} by ${famousAuthor}`;
console.log(message);