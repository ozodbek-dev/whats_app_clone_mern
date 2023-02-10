import reducedRouter from "../utils/reducedRouter.js";
import {addUser,getAllUsers} from "../controllers/userCtrl.js";

export default  reducedRouter(router=>{
    router.route('/add').post(addUser) ;
    router.route('/users').get(getAllUsers)
})
