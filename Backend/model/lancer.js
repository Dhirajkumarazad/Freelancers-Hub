const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    name: { type: String, required: true },
    services: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    service_category:{type: String, required: true}
    
});

module.exports = mongoose.model("posts", postSchema);