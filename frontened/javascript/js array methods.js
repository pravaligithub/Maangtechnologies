// Create an array
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// 1. forEach() - Iterate over each element in the array
console.log('1. forEach():');
fruits.forEach(fruit => {
  console.log(fruit);
});

// 2. map() - Create a new array by applying a function to each element
console.log('\n2. map():');
let uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits);

// 3. filter() - Create a new array with elements that satisfy a condition
console.log('\n3. filter():');
let filteredFruits = fruits.filter(fruit => fruit.length > 5);
console.log(filteredFruits);

// 4. find() - Find the first element that satisfies a condition
console.log('\n4. find():');
let foundFruit = fruits.find(fruit => fruit.startsWith('b'));
console.log(foundFruit);

// 5. reduce() - Reduce the array to a single value by applying a function
console.log('\n5. reduce():');
let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength);

// 6. some() - Check if at least one element satisfies a condition
console.log('\n6. some():');
let hasShortFruit = fruits.some(fruit => fruit.length < 5);
console.log(hasShortFruit);

// 7. every() - Check if all elements satisfy a condition
console.log('\n7. every():');
let allShortFruits = fruits.every(fruit => fruit.length < 8);
console.log(allShortFruits);

// 8. includes() - Check if the array includes a specific element
console.log('\n8. includes():');
let includesBanana = fruits.includes('banana');
console.log(includesBanana);

// 9. indexOf() - Find the index of a specific element in the array
console.log('\n9. indexOf():');
let indexOfOrange = fruits.indexOf('orange');
console.log(indexOfOrange);

// 10. slice() - Extract a portion of the array
console.log('\n10. slice():');
let slicedFruits = fruits.slice(1, 4);
console.log(slicedFruits);

// 11. splice() - Add or remove elements from the array at a specific index
console.log('\n11. splice():');
fruits.splice(2, 1, 'pear');
console.log(fruits);

// 12. concat() - Concatenate arrays
console.log('\n12. concat():');
let moreFruits = ['melon', 'cherry'];
let combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits);

// 13. reverse() - Reverse the order of elements in the array
console.log('\n13. reverse():');
let reversedFruits = fruits.reverse();
console.log(reversedFruits);

// 14. sort() - Sort the elements of the array
console.log('\n14. sort():');
let sortedFruits = fruits.sort();
console.log(sortedFruits);

// 15. join() - Join all elements of the array into a string
console.log('\n15. join():');
let joinedFruits = fruits.join(', ');
console.log(joinedFruits);
