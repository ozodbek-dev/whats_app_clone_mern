import {reducedModel} from "../utils/reducedModel.js";


export default reducedModel("Conversation", (Schema, ObjectId) => {
    const conversationSchema = new Schema({
       members:{
           type:Array,
           required:true
       },
        message:String
    }, {timestamps: true})


    return conversationSchema
})
