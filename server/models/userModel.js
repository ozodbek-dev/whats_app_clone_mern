import {reducedModel} from "../utils/reducedModel.js";


export default reducedModel("User", (Schema, ObjectId) => {
    const userSchema = new Schema({
        iss: String,
        nbf: String,
        aud: String,
        sub: {
            type: String,
            required: true,
            unique: true
        }, email: {
            type: String,
            unique: true
        },
        email_verified: Boolean,
        azp: String,
        name: {
            type: String,
            required: true
        },
        picture: {
            type: String,
            required: true
        },
        given_name: String,
        iat: Number,
        exp: Number,
        jti: String
    }, {timestamps: true})


    return userSchema
})
