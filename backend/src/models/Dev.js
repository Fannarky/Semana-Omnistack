const mongoose = require('mongoose');
const PointSchema = require('./utils/pointSchema')

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

//1o parametro: nome que terá no banco,
//2o parametro: nome da variavel;
module.exports = mongoose.model('Dev', DevSchema);