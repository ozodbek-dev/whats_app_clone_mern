import {reducedModel} from "../utils/reducedModel.js";


export default reducedModel("Message", (Schema, ObjectId) => {
    const schema = new Schema({
        conversationId: {
            type: String,
            required: true,
        },
        senderId: {
            type: String,
            required: true
        },
        receiverId: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        }


    }, {timestamps: true})


    return schema
})
