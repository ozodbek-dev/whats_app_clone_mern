import reducedRouter from "../utils/reducedRouter.js";
import {addMessage,getMessage,uploadCtrl,getImage} from "../controllers/messageCtrl.js";
import upload from "../utils/upload.js";

export default  reducedRouter(router=>{
    router.route('/add').post(addMessage) ;
    router.route('/get/:id').get(getMessage) ;
    router.route("/file/upload").post(upload.single('file'),uploadCtrl)
    router.route("/file/:filename").get(getImage)
})
