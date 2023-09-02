// Working with arrays in Javascript 
// Adding and Removing items from array elements 
// Understanding of data structures like queues and stack
// Methods to organize arrays like FIFO (First_in_First_out) and LIFO (Last_in_First_out)

const arr = ['Apple', 'Peach', 'Donut', 'Jonathan', 'Hammond', 'James', 'Bugatti']

// Using Pop and Push [These two methods help to remove and add items only from the end of array]

// using pop() method to remove the last item from an array
// when you use pop method it return the item 

const lastItem = arr.pop()
console.log(lastItem) // output > 'Bugatti'

// Append the element to the end of the arrays
// When you use push() method it return the length of array 

const arrLength = arr.push('Hundai')
console.log(arrLength)


// Methods that work with the beginning of the array: 
// shift()
