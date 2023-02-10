import reducedRouter from "../utils/reducedRouter.js";
import {addConversation,getConversation} from "../controllers/conversationCtrl.js";

export default  reducedRouter(router=>{
    router.route('/add').post(addConversation) ;
    router.route('/get').post(getConversation) ;

})
