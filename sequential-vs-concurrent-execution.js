async function taskA() { /* takes 1 second */ }
async function taskB() { /* takes 1 second */ }
async function taskC() { /* takes 1 second */ }

// Version 1: Run sequentially (should take ~3 seconds)
async function runSequential() {
  // Your implementation
  const a = await taskA()
  const b = await taskB()
  const c = await taskC()
  return [a,b,c]
}

// Version 2: Run concurrently (should take ~1 second)
async function runConcurrent() {
  // Your implementation
  return await
 Promise.all([taskA(),taskB,taskC])
}

