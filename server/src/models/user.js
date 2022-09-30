const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        lowercase: true,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        },
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// userSchema.methods.generateAuthToken = async function(){
//     const user = this;
//     const token = jwt.sign({_id: user._id.toString()}, 'helloImHossein');
//     // user.tokens = user.tokens.concat({token: token});
//     user.tokens = user.tokens.concat({token});
//     await user.save();
//     return token;
// }

userSchema.methods.generateAuthToken = async function() {
    const user = this;
    const token = jwt.sign({ user }, 'radioJavan');
    user.tokens = token;
    await user.save();
    return token;
}

// // why or how toJSON is run?
// // when we send back the response in method send in router it used JSON.stringify 
// // and JSON.stringify if toJSON is exsit return value toJSON else return obj as stirng

// // userSchema.methods.getPublicProfile = function () {
// userSchema.methods.toJSON = function () {
//     //-------------- My own way --------------\\
//     // const {name, age} = this;
//     // return {
//     //     name,
//     //     age
//     // 
//     const user = this;
//     const userObject = user.toObject();
//     delete userObject.password;
//     delete userObject.tokens
//     return userObject;
// }

// userSchema.statics.findByCredentials = async (email, password) => {
//     const user = await User.findOne({email});
//     const isMatch = await bcrypt.compare(password, user.password);

//     if(!user) {
//         throw new Error('Unable to login!');
//     }

//     if(!isMatch) {
//         throw new Error("Unable to login!");
//     }
//     return user;
// }

// We have two function with schema
// 1_ pre for before
// 2_ post for after 

userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next()
})

const User = mongoose.model('User', userSchema);

module.exports = User;