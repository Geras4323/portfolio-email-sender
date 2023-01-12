const express = require('express');
const cors = require('cors');
require('dotenv').config();

const routerApi = require('./src/routes/index');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(port, () => {
  console.log(`> Listening on port ${port}`);
})