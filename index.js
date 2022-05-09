const express = require('express')
const app = express()

const port = process.env.PORT || 3030;

app.get('/', (req, res) => res.send('Hello from Sriram R M'))

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`sriram CICD listening on port ${port}`);
  });
