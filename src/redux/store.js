import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from 'redux-thunk'

import { reducers } from "./rootReducers";


const enhancer =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = configureStore({ reducer: reducers }, applyMiddleware(logger, thunk));