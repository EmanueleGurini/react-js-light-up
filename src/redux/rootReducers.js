import { combineReducers } from "redux";

import { fetchDataReducer } from "./reducers/fetchDataReducer";
import { postDataReducer } from "./reducers/postDataReducers";
import { fetchDataFromAirTableReducer } from "./reducers/fetchDataFromAirTableReducer";

export const reducers = combineReducers({
	data: fetchDataReducer,
	postData: postDataReducer,
	searchData: fetchDataFromAirTableReducer
})
