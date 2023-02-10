import {Schema,model} from 'mongoose'
const {ObjectId}  = Schema.Types

export const reducedModel = (name,cb)=>{
   const schema = cb(Schema,ObjectId)

    return model(name,schema)
}
