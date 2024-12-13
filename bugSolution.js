const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error('Error in / route:', err);
      res.status(500).send('Internal Server Error');
    });
});
function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve('Success!');
    } else {
      reject(new Error('Simulated error'));
    }
  });
}
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});