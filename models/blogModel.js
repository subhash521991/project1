const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

    title: {type: String,required: true,trim: true},
    body: {type: String,required: true,trim: true},
    authorId: {type: String,required: true,trim: true},
    tags: {type: [String]},
    category: {type: String, required: true,trim: true},
    subcategory: {type: [String]},
    isDeleted: {type:Boolean,default:false}, 
     publishedAt: {
        type:Date,
     },
     isPublished:{
        type:Boolean,
        default:false,

     },
    
    },
     { timestamps: true }
    
    ); 
    
    module.exports = mongoose.model('blogs', blogSchema);
