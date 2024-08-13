import { applyMiddleware, createStore } from "redux";
import rootReducer from "../src/reducers/rootReducer"; 
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

function configureStore() {
    const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
    const store = createStore(rootReducer, composedEnhancer);
    return store;
}

const store = configureStore();

export default store;