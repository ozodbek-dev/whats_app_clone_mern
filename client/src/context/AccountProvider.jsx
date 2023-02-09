import {createContext, useContext, useState} from "react";

export const AccountContext = createContext(null);


   const AccountProvider = ({children})=>{
       const [account, setAccount] = useState()
     return(
          <AccountContext.Provider value={{
              account, setAccount
          }}>
              {children}
          </AccountContext.Provider>
     )
   }

   export const AccountState = ()=>{
       return  useContext(AccountContext)
   }

   export default AccountProvider