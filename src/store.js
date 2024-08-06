import { applyMiddleware, createStore } from "redux";

import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancer);

// export type RootState = ReturnType<typeof store.getState>

export default store