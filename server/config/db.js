import {connect} from "mongoose"

const connectToDB = (options) => {
    if (options) {
        return connect(process.env.DB_URL, options, (err) => {
            if (!err) {
                console.log("Connected to db successfully! ".yellow)
            } else {
                console.log(`Error occurred while connecting to the mongodb: ${err.message}`.red.bgWhite)
            }
        })
    }
    return connect(process.env.DB_URL, (err) => {
        if (!err) {
            console.log("Connected to db successfully! ".yellow)
        } else {
            console.log(`Error occurred while connecting to the mongodb: ${err.message}`.red.bgWhite)
        }
    })
}

export default connectToDB;