const Song = require('../models/song');

module.exports = {

    async index(req, res) {
        try {
            const songs = await Song.find({ limit: 10 }).exec();
            res.send(songs)
        } catch (err) {
            res.status(500).send({
                err: err,
                error: 'An error has occured trying to fetch the songs',
            })
        }
    },

    async post(req, res) {
        try {
            const song = new Song(req.body);
            await song.save();
            res.send(song);
        } catch (err) {
            res.status(500).send({
                err: err,
                error: 'An error has occured trying to create the songs'
            })
        }
    },

    async view(req, res) {
        try {
            const song = await Song.findById(req.params.id);
            res.send(song);
        } catch (err) {
            res.status(404).send({
                err: err,
                error: 'An error has occured trying to show the songs'
            })
        }
    },

    async edit(req, res) {
        const songBody = req.body;
        const updates = Object.keys(songBody);
        const _id = req.params.id;

        try {
            const song = await Song.findByIdAndUpdate({ _id, songBody });
            updates.forEach(update => song[update] = req.body[update]);
            await song.save();
            res.send({ song });
        } catch (err) {
            res.status(404).send({
                err: err,
                error: 'An error has occured trying to update the songs'
            })
        }
    },

    async delete(req, res) {
        const _id = req.params.id;
        try {
            const song = await Song.findByIdAndDelete(_id);
            // await song.save()
            res.send({
                message: 'Your song was deleted'
            })
        } catch(err){
            res.status(404).send({
                err: err,
                error: 'An error has occured trying to update the songs'
            })
        }
    }

}