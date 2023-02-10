import reducedRouter from "../utils/reducedRouter.js";
import {addMessage,getMessage} from "../controllers/messageCtrl.js";

export default  reducedRouter(router=>{
    router.route('/add').post(addMessage) ;
    router.route('/get/:id').get(getMessage) ;

})
