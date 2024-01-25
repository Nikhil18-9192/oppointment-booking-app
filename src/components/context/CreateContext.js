import { createContext } from "react";
import InitialState from "./InititalState";

const GlobalContext = createContext(InitialState);

export default GlobalContext;