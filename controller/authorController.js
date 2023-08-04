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
const getAuthor= async function (req,res){
    try {
const userId = req.params.userId

if (!userId) {
  return res.status(400).send({status:false,message:"Please provide a valid user id"})
  
}

const user = await registerModel.findOne({_id:userId})

if (!user) {

  return res.status(404).send({status:false, message: "No user found according to your seearch"})
  
}

if (user.isDeleted==true) {

  return res.status(400).send({status:false, message:"user has already been deleted"});
  
}

return res.status(200).send({status:true, message: "user details found", data:user})
      
    } catch (error) {

        res.status(500).send({status:false,message:err.message})
        
    }
}
module.exports.createAuthor = createAuthor;
module.exports.getAuthor = getAuthor;

