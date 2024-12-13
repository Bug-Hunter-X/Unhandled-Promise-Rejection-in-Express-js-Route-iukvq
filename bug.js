const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    // Error handling is missing here
    console.error(err);
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});