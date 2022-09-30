const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String
    },
    artist: {
        type: String
    },
    genre: {
        type: String
    },
    album: {
        type: String
    },
    ablumImageUrl: {
        type: String
    },
    youtubeId: {
        type: String
    },
    lyrics: {
        type: String
    },
    tab: {
        type: String
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    }
}, {
    timestamps: true
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;