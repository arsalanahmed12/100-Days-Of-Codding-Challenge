// Question 1: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the question marks:
console.log("Albert Einstein once said, \"A person who never made a mistake never tried anything new.\"");
//Question 2: Repeat Exercise 1, but this time store the famous person`s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"A person who never made a mistake never tried anything new.\"");
console.log(message);
//Question 3: Store a person`s name, and include some whitespace characters at the beginning and the end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
var name3 = "\t\nArsalan \t\n";
console.log("".concat(name3, " How are you"));
console.log("".concat(name3.trim(), " how are you"));
