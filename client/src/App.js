import './App.css';
import {GoogleOAuthProvider} from "@react-oauth/google";
import {clientId} from "./constants/data";

//components
import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";


function App() {
    return (
        <div className="App">
            <GoogleOAuthProvider clientId={clientId}>
               <AccountProvider>
                   <Messenger/>
               </AccountProvider>
            </GoogleOAuthProvider>
        </div>
    );
}

export default App;
