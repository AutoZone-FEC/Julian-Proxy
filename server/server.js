const express = require('express');
const path = require('path');
const app = express();
const port = 3307;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/public')));




app.listen(port, () => console.log(`Server is running on ${port}...`));
