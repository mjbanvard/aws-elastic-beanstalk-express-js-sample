const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Yo yo, home slice. Whassup Whassup, my brother.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
