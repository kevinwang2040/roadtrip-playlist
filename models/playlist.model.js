const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = require('./song.model');

const artistSchema = new Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    lat: {type: Number, required: true},
    lng: {type: Number, required: true},
    spotify_id: {type: String, required: true},
    image_url: {type: String, required: true},
    songs: [songSchema]
}, {
    timestamps: true
});

const playlistSchema = new Schema({
    playlistName: { type: String, required: true },
    startCity: { type: String, required: true },
    destination: { type: String, required: true},
    songs: [songSchema],
    artists: [artistSchema],
}, {
    timestamps: true
});

const Playlist = mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;