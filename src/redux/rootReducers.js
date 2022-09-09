import { combineReducers } from "redux";

import { fetchDataReducer } from "./reducers";

export const reducers = combineReducers({
	data: fetchDataReducer,
})
