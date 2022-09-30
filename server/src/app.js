const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/config');

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

require('./routes')(app)
require('./db/mongoose')

app.listen(config.port, () => {
    console.log(`Server is up on port ${config.port}`);
});
