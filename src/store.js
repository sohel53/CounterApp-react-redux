import { createStore } from "redux";
import counterReducers from "./reducers/counterReducers";

const store = createStore(counterReducers);

export default store;
