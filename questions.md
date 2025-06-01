Challenge 1: Promise vs Callback Conversion
Concept: Understanding promises vs callbacks
You are given a callback-based function that simulates fetching user data. Your task is to create an equivalent function that uses Promises instead of callbacks. The new function should handle both success and error cases properly, maintaining the same timing and error conditions as the original.
Convert this callback-based function to return a Promise:
function fetchUserCallback(userId, callback) {
  setTimeout(() => {
    if (userId > 0) {
      callback(null, { id: userId, name: 'John' });
    } else {
      callback(new Error('Invalid user ID'));
    }
  }, 1000);
}

// Convert to:
function fetchUserPromise(userId) {
  // Your implementation here
}

// Should work like:
// fetchUserPromise(1).then(user => console.log(user));
// fetchUserPromise(-1).catch(err => console.log(err.message));

Challenge 2: Basic Async/Await Error Handling
Concept: Error Handling with async/await
The following function attempts to fetch user data and display the user's name in uppercase. However, it has several potential failure points that are not properly handled. Your task is to rewrite this function to gracefully handle all possible errors including network failures, JSON parsing errors, missing user data, and missing properties. The function should never crash and should provide meaningful error messages or fallback values.
Fix the error handling in this function:
async function getUserData(userId) {
  const user = await fetch(`/api/users/${userId}`);
  const userData = await user.json();
  console.log(userData.name.toUpperCase()); // What if name is undefined?
  return userData;
}

// Rewrite to properly handle:
// - Network errors
// - JSON parsing errors
// - Missing user data
// - Missing name property

Challenge 3: Sequential vs Concurrent Execution
Concept: Understanding when operations run in parallel vs series
You need to understand the difference between running asynchronous operations one after another (sequential) versus running them at the same time (concurrent). Create two different implementations that demonstrate this timing difference. One should wait for each task to complete before starting the next, while the other should start all tasks simultaneously and wait for all to complete.
You have three async functions that each take 1 second. Write two versions:
async function taskA() { /* takes 1 second */ }
async function taskB() { /* takes 1 second */ }
async function taskC() { /* takes 1 second */ }

// Version 1: Run sequentially (should take ~3 seconds)
function runSequential() {
  // Your implementation
}

// Version 2: Run concurrently (should take ~1 second)
function runConcurrent() {
  // Your implementation
}

Challenge 4: Promise.all vs Promise.allSettled
Concept: Understanding different Promise combinators
You need to understand when to use different Promise combination methods. Some scenarios require all operations to succeed or the entire operation fails, while others need to collect results from all operations regardless of individual failures. Implement both approaches to demonstrate the different behaviors and use cases for Promise.all versus Promise.allSettled.
Given an array of URLs, some of which will fail:
const urls = [
  '<https://api.example.com/users/1>',    // succeeds
  '<https://api.example.com/users/999>',  // fails (404)
  '<https://api.example.com/users/2>'     // succeeds
];

// Write a function that fetches all URLs and:
// 1. Stops on first failure (using Promise.all)
function fetchAllOrFail(urls) {
  // Your implementation
}

// 2. Continues even if some fail (using Promise.allSettled)
function fetchAllResults(urls) {
  // Your implementation - return both successes and failures
}

Challenge 5: Async Function Return Values
Concept: Understanding what async functions return
Many developers are confused about what async functions actually return and how to properly work with those return values. You need to analyze the given code examples, predict what each console.log will output, and then fix a broken function that doesn't properly handle async return values. This will test your understanding of the relationship between async functions, Promises, and the await keyword.
Predict and fix the output:
async function mystery1() {
  return 'hello';
}

async function mystery2() {
  return Promise.resolve('world');
}

function mystery3() {
  return Promise.resolve('!');
}

// What do these log?
console.log(mystery1());           // ?
console.log(await mystery1());     // ?
console.log(mystery2());           // ?
console.log(await mystery2());     // ?
console.log(mystery3());           // ?
console.log(await mystery3());     // ?

// Fix this function to properly log "hello world!"
async function fixMe() {
  const a = mystery1();
  const b = mystery2();
  const c = mystery3();
  console.log(a + ' ' + b + c);
}

Challenge 6: Event Loop Understanding
Concept: Understanding execution order
JavaScript's event loop determines the order in which different types of asynchronous operations execute. Your task is to predict the exact order of console.log outputs in the given code, and then explain why that specific order occurs. This tests your understanding of the call stack, microtask queue, and macro task queue. Understanding execution order is crucial for debugging asynchronous code.
Predict the order of console.log outputs:
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

async function test() {
  console.log('5');
  await Promise.resolve();
  console.log('6');
}

test();

console.log('7');

// What order will the numbers 1-7 be logged?
// Explain why this order occurs.

Challenge 7: Basic Promise Chaining
Concept: Chaining then() methods correctly
Promise chaining is a fundamental skill for building complex asynchronous flows. You need to complete a promise chain that performs multiple sequential asynchronous operations, where each step depends on the result of the previous step. Your implementation should properly pass data between chain steps and handle any errors that might occur at any point in the chain.
Complete this promise chain to:
1. Fetch user data
2. Fetch user's posts
3. Count total likes on all posts
4. Handle any errors
function getUserLikes(userId) {
  return fetch(`/api/users/${userId}`)
    // Step 1: Parse JSON
    .then(/* your code */)
    // Step 2: Fetch user's posts using user.id
    .then(/* your code */)
    // Step 3: Parse posts JSON
    .then(/* your code */)
    // Step 4: Sum up all likes from posts array
    .then(/* your code */)
    // Step 5: Handle errors
    .catch(/* your code */);
}

Challenge 8: Async Operations in Loops - Common Mistake
Concept: Async operations in loops
This is one of the most common mistakes developers make when working with asynchronous JavaScript. The provided code appears to work but has a subtle bug that causes it to return incorrect results. You need to identify why the current approach fails and provide two different working solutions. This challenge tests your understanding of how async operations behave inside loop constructs.
This code doesn't work as expected. Fix it:
async function processUsers(userIds) {
  const results = [];

  // This doesn't work - why?
  userIds.forEach(async (id) => {
    const user = await fetchUser(id);
    results.push(user);
  });

  return results;
}

// Fix it to properly wait for all users to be fetched
// Provide two solutions:
// 1. Using for...of loop
// 2. Using Promise.all with map

Challenge 9: Creating a Simple Delay Function
Concept: Creating promises, setTimeout
Sometimes you need to introduce delays in your asynchronous code for timing, rate limiting, or user experience purposes. Your task is to create a reusable utility function that can pause execution for a specified amount of time. Additionally, create an advanced version that allows the delay to be cancelled if needed. This tests your ability to wrap callback-based APIs in Promises and handle cleanup operations.
Create a reusable delay function:
function delay(ms) {
  // Your implementation using Promise and setTimeout
}

// Should work like this:
async function example() {
  console.log('Start');
  await delay(1000);
  console.log('After 1 second');
  await delay(2000);
  console.log('After 3 seconds total');
}

// Also create a version that can be cancelled:
function cancellableDelay(ms) {
  // Return an object with { promise, cancel }
}

Challenge 10: Async Function vs Promise Constructor vs Promise Chaining
Concept: Different ways to create async operations
There are multiple ways to handle asynchronous operations in JavaScript, each with different use cases and advantages. Your task is to implement the same functionality using three different approaches: Promise constructor, async/await syntax, and Promise chaining with .then(). All implementations should handle the same requirements and error cases. Finally, analyze when you would choose each approach in real-world scenarios.
Implement the same functionality using different approaches:
// Approach 1: Using Promise constructor
function fetchDataPromise(url) {
  // Your implementation using new Promise()
}

// Approach 2: Using async/await
async function fetchDataAsync(url) {
  // Your implementation using async/await
}

// Approach 3: Using .then() chains
function fetchDataThen(url) {
  // Your implementation using .then()
}

// All three should:
// 1. Make a fetch request
// 2. Parse JSON response
// 3. Return the data
// 4. Handle network errors
// 5. Handle JSON parsing errors

// When would you use each approach?

Challenge 11: Build a Simple Async Counter
Concept: Creating async functions with timing
Create a counter function that counts from 1 to 5, with a 1-second delay between each number. The function should return a promise that resolves with an array of all the numbers when counting is complete. This tests your ability to create async flows with timing and collect results over time.
Requirements:
* Function asyncCounter() counts 1, 2, 3, 4, 5
* 1-second delay between each number
* Return promise that resolves with [1, 2, 3, 4, 5]
* Use async/await or promise chaining
Challenge 12: Build an Async Number Generator
Concept: Async generators and yielding values
Create an async generator function that yields random numbers between 1-100, with a 500ms delay between each number. The generator should stop after yielding 5 numbers. This tests your understanding of async generators and how to create streams of async data.
Requirements:
* Async generator function randomNumbers()
* Yields 5 random numbers (1-100)
* 500ms delay between each yield
* Can be consumed with for await...of loop
Challenge 13: Build a Click Counter with Delay
Concept: Handling user interactions with async operations
Create a button that counts clicks, but with a twist - after each click, the button should be disabled for 2 seconds while showing "Processing..." text. Once the delay is over, re-enable the button and show the updated count. This tests your ability to manage UI state during async operations triggered by user interactions.
Requirements:
* Button shows "Click me! Count: 0" initially
* When clicked, immediately show "Processing..." and disable button
* After 2 seconds, re-enable button and show new count
* Handle multiple rapid clicks properly (they should queue or be ignored)
