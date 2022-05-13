const app = require('./app');

// start server
const port = 3000;
app.listen(port, () => {
  console.log('Listening server on port 3000');
});
