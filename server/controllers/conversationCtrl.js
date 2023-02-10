import Conversation from "../models/conversationModel.js";

export const addConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body

        const exist = await Conversation.findOne({members: {$all: [receiverId, senderId]}})
        if (exist) {
            return res.status(200).json({msg: "Conversation Already exists", success: true})
        }

        const newConversation = await Conversation.create({
            members:[senderId,receiverId]
        }) ;
        
        res.status(201).json({
            success:true,
        msg:"Conversation added successfully!"
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}
export const getConversation = async (req, res) => {
    try {
        const {senderId, receiverId} = req.body

        const conversation = await Conversation.findOne({members: {$all: [receiverId, senderId]}})



        res.status(201).json({
            success:true,
            conversation
        })
    } catch (e) {
        return res.status(500).json({success: false, error: e.message})
    }
}