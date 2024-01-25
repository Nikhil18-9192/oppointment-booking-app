import { useReducer } from "react";
import InitialState from "./InititalState";
import Reducer from "./Reducer";
import GlobalContext from "./CreateContext";

const Provider = ({children})=>{

    const [state,dispatch] = useReducer(Reducer,InitialState)
    return(
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default Provider;