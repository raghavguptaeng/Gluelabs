import { createStore } from "redux";
import reducers from "./Reducers";

const reduxStore = createStore(reducers,{});
export default reduxStore;