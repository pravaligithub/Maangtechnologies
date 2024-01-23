// Create a Date object
let currentDate = new Date();

// 1. getDate() - Get the day of the month (1-31)
console.log('1. getDate():', currentDate.getDate());

// 2. getDay() - Get the day of the week (0-6, where 0 is Sunday)
console.log('\n2. getDay():', currentDate.getDay());

// 3. getFullYear() - Get the full year (four digits)
console.log('\n3. getFullYear():', currentDate.getFullYear());

// 4. getMonth() - Get the month (0-11, where 0 is January)
console.log('\n4. getMonth():', currentDate.getMonth());

// 5. getHours() - Get the hours (0-23)
console.log('\n5. getHours():', currentDate.getHours());

// 6. getMinutes() - Get the minutes (0-59)
console.log('\n6. getMinutes():', currentDate.getMinutes());

// 7. getSeconds() - Get the seconds (0-59)
console.log('\n7. getSeconds():', currentDate.getSeconds());

// 8. getMilliseconds() - Get the milliseconds (0-999)
console.log('\n8. getMilliseconds():', currentDate.getMilliseconds());

// 9. getTime() - Get the numeric value of the current date
console.log('\n9. getTime():', currentDate.getTime());

// 10. setTime() - Set the numeric value of the Date object
console.log('\n10. setTime():');
currentDate.setTime(0);
console.log(currentDate);

// 11. setDate() - Set the day of the month (1-31)
console.log('\n11. setDate():');
currentDate.setDate(15);
console.log(currentDate);

// 12. setMonth() - Set the month (0-11)
console.log('\n12. setMonth():');
currentDate.setMonth(5);
console.log(currentDate);

// 13. setFullYear() - Set the full year (four digits)
console.log('\n13. setFullYear():');
currentDate.setFullYear(2022);
console.log(currentDate);

// 14. setHours() - Set the hours (0-23)
console.log('\n14. setHours():');
currentDate.setHours(12);
console.log(currentDate);

// 15. setMinutes() - Set the minutes (0-59)
console.log('\n15. setMinutes():');
currentDate.setMinutes(30);
console.log(currentDate);

// 16. setSeconds() - Set the seconds (0-59)
console.log('\n16. setSeconds():');
currentDate.setSeconds(45);
console.log(currentDate);

// 17. setMilliseconds() - Set the milliseconds (0-999)
console.log('\n17. setMilliseconds():');
currentDate.setMilliseconds(500);
console.log(currentDate);

// 18. toDateString() - Get a human-readable date string
console.log('\n18. toDateString():', currentDate.toDateString());

// 19. toTimeString() - Get a human-readable time string
console.log('\n19. toTimeString():', currentDate.toTimeString());

// 20. toLocaleDateString() - Get a localized date string
console.log('\n20. toLocaleDateString():', currentDate.toLocaleDateString());

// 21. toLocaleTimeString() - Get a localized time string
console.log('\n21. toLocaleTimeString():', currentDate.toLocaleTimeString());

// 22. toISOString() - Get the date in ISO format
console.log('\n22. toISOString():', currentDate.toISOString());

// 23. toString() - Get a string representation of the Date object
console.log('\n23. toString():', currentDate.toString());

// 24. valueOf() - Get the primitive value of the Date object
console.log('\n24. valueOf():', currentDate.valueOf());
