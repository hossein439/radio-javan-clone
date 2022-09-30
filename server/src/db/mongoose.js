const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/radio-javan', {
    useNewUrlParser: true,
    // dont show warning methodes and features that depercated
    // useFindAndModify: false,
});