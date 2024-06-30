import { createStore } from "redux";
import railwaystore from "./reducers/myreducers";

const mystore=createStore(railwaystore,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default mystore;