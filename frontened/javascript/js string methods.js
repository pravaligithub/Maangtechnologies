// Create a string
let message = 'Hello, JavaScript String Methods!';

// 1. length - Get the length of the string
console.log('1. length:');
console.log(message.length);

// 2. toUpperCase() - Convert the string to uppercase
console.log('\n2. toUpperCase():');
console.log(message.toUpperCase());

// 3. toLowerCase() - Convert the string to lowercase
console.log('\n3. toLowerCase():');
console.log(message.toLowerCase());

// 4. indexOf() - Find the index of a substring
console.log('\n4. indexOf():');
console.log(message.indexOf('JavaScript'));

// 5. lastIndexOf() - Find the last index of a substring
console.log('\n5. lastIndexOf():');
console.log(message.lastIndexOf('Methods'));

// 6. slice() - Extract a portion of the string
console.log('\n6. slice():');
console.log(message.slice(7, 16));

// 7. substring() - Extract a substring between two indices
console.log('\n7. substring():');
console.log(message.substring(7, 16));

// 8. substr() - Extract a substring starting from a specific index
console.log('\n8. substr():');
console.log(message.substr(7, 10));

// 9. replace() - Replace a substring with another string
console.log('\n9. replace():');
console.log(message.replace('JavaScript', 'JS'));

// 10. concat() - Concatenate strings
console.log('\n10. concat():');
let additionalMessage = ' Welcome!';
console.log(message.concat(additionalMessage));

// 11. trim() - Remove leading and trailing whitespaces
console.log('\n11. trim():');
let paddedString = '    Trim me!    ';
console.log(paddedString.trim());

// 12. charAt() - Get the character at a specific index
console.log('\n12. charAt():');
console.log(message.charAt(7));

// 13. charCodeAt() - Get the Unicode of the character at a specific index
console.log('\n13. charCodeAt():');
console.log(message.charCodeAt(7));

// 14. split() - Split the string into an array of substrings
console.log('\n14. split():');
let wordsArray = message.split(' ');
console.log(wordsArray);

// 15. startsWith() - Check if the string starts with a specific substring
console.log('\n15. startsWith():');
console.log(message.startsWith('Hello'));

// 16. endsWith() - Check if the string ends with a specific substring
console.log('\n16. endsWith():');
console.log(message.endsWith('Methods!'));

// 17. includes() - Check if the string includes a specific substring
console.log('\n17. includes():');
console.log(message.includes('JavaScript'));

// 18. repeat() - Repeat the string a certain number of times
console.log('\n18. repeat():');
console.log(message.repeat(2));

// 19. padStart() - Pad the string from the start with a specified character until a desired length
console.log('\n19. padStart():');
console.log(message.padStart(30, '-'));

// 20. padEnd() - Pad the string from the end with a specified character until a desired length
console.log('\n20. padEnd():');
console.log(message.padEnd(30, '-'));

// 21. match() - Match the string against a regular expression
console.log('\n21. match():');
let regex = /JavaScript/;
console.log(message.match(regex));

// 22. search() - Search for a substring and return its index
console.log('\n22. search():');
console.log(message.search('JavaScript'));

// 23. localeCompare() - Compare two strings in the current locale
console.log('\n23. localeCompare():');
let comparisonResult = message.localeCompare('Hello, World!');
console.log(comparisonResult);

// 24. toString() - Convert the string to a string (yes, really!)
console.log('\n24. toString():');
console.log(message.toString());

// 25. valueOf() - Return the primitive value of the string
console.log('\n25. valueOf():');
console.log(message.valueOf());
