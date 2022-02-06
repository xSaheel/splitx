import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const initialState = {};
// If there is any other middleware add it in the array
const middleware = [thunk];

const store = createStore(RootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;