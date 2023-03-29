import { combineReducers } from "redux";

import userReducer from "./User/reducer";

import cartReducer from "./Cart/Reducer";

const rootReducer = combineReducers({userReducer ,cartReducer})

export default rootReducer