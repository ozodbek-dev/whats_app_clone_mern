import '../config/loadDotenv.js'
import multer from 'multer'
import {GridFsStorage} from "multer-gridfs-storage";

const options = {
    useUnifiedTopology: true, useNewUrlParser: true,
}
const storage = new GridFsStorage({
    url: process.env.DB_URL,
    options,
    file: (req, file) => {
        const match = ["image/png", "image/jpg", 'image/jpeg', "image/gif"]
        if (match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-file-${file.originalname}`
        }
        return {
            bucketName: "fs",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
})
export default multer({storage})