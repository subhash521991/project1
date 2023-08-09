const mongoose = require("mongoose");
let objectId = mongoose.Schema.Types.ObjectId

const blogSchema = new mongoose.Schema({

    title: {type: String,required: true,trim: true},
    body: {type: String,required: true,trim: true},
    authorId: {type: objectId,required: true,trim: true, ref:"author"},
    tags: {type: [String]},
    category: {type: String, required: true,trim: true},
    subcategory: {type: [String]},
    deletedAt : {type:Date},
    isDeleted: {type:Boolean,default:false}, 
    publishedAt:{type:Date},
    isPublished: {type:Boolean,default:false},
    }
    , { timestamps: true }); 
    
    module.exports = mongoose.model('blogs', blogSchema);