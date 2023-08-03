const authorModel = require("../models/authorModel.js");
const mongoose = require("mongoose");
const createAuthor = async function (req, res) {
    try {
        const author = req.body;
        if (!author.title) {
            return res.status(400).send({ status: false, msg: "title is required field" });
        }
        if (!author.fname) {
            return res.status(400).send({ status: false, msg: "first name is required" });
        }
        if (!author.lname) {
            return res.status(400).send({ status: false, msg: "last name is required" });
        }
        if (!author.phone) {
            return res.status(400).send({ status: false, msg: "phone is required" });
        }
        const duplicatePhone = await authorModel.findOne({ phone:author.phone });

        if (duplicatePhone) {
            return res.status(400).send({ status: false, msg: "phone# already exists" });
        }

        if (!author.email) {
            return res.status(400).send({ status: false, msg: "email is required" });
        }

        const duplicateEmail = await authorModel.findOne({ email: author.email });

        if (duplicateEmail) {
            return res.status(400).send({ status: false, msg: "email already exists" });
        }

        if (!author.password) {
            return res.status(400).send({ status: false, msg: "password is required" });
        }

        if (!(author.password.length > 8 && author.password.length < 15)) {
            return res.status(400).send({ status: false, msg: "password length should be between 8 to 15 characters" });
        }

        const authorCreated = await authorModel.create(author);
        res.status(201).send({ status: true, message: "author created successfully", data: authorCreated, });
    } catch (error) {
        return res.status(500).send({ msg: error.message });
    }
}
const deleteAuthor = async function (req,res) {
    try {
        const authorId= req.params.authorId
        const author = await authorModel.findById(authorId);
        if (!author) {
            return res.status(404).send({status:false,message:"author not found"})
        }
        if(author.isDeleted==true){
            return res.status(400).send({status:false,message:"author has already been deleted "})
        }
        const deleteAuthor = await authorModel.findByIdAndUpdate(authorId,
            {$set:{isDeleted:true}},{new:true})
            return res.status(201).send({status:true,msg:"author deleted successfully"})
    } catch (error) {
        res.status(500).send({status:false,error:error.msg})
    }
}
module.exports.createAuthor = createAuthor;
module.exports.deleteAuthor = deleteAuthor;

