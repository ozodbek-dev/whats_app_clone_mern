import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";
import grid from 'gridfs-stream'
import mongoose from 'mongoose'

export const addMessage = async (req, res) => {
    try {
        await Message.create(req.body)

        await Conversation.findByIdAndUpdate(req.body.conversationId, {message: req.body.text}, {new: true})

        res.status(201).json({
            success: true,
            msg: "Message added successfully!"
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}
export const getMessage = async (req, res) => {

    try {
        const messages = await Message.find({conversationId:req.params.id}) 

        res.status(200).json({
            success: true,
            messages
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}
const url ='http://localhost:5000'
export const uploadCtrl = async (req, res) => {
    if(!req.file){
        return res.status(404).json("File Not found")
    }

    const imageUrl =`${url}/api/message/file/${req.file.filename}`
    return res.status(201).json(imageUrl)
}



//files
const conn = mongoose.connection;

let gfs,gridBucket;
conn.once('open',()=>{
    gridBucket =  new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:"fs"
    })
    gfs = grid(conn.db,mongoose.mongo);
    gfs.collection('fs')
})
export const getImage = async (req, res) => {
    try {
       const file = await gfs.files.findOne({filename:req.params.filename}) ;

       const readStream = gridBucket.openDownloadStream(file._id);
       readStream.pipe(res)
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}