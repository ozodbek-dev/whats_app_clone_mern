import Message from "../models/messageModel.js";
import Conversation from "../models/conversationModel.js";

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