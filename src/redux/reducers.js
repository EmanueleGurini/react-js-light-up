import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, UPDATE_URL } from "./actions";


const initialState = {
	loading: false,
	data: {},
	error: ''
}

export const fetchDataReducer = (state = initialState, action) => {

	switch (action.type) {

		case FETCH_DATA_REQUEST:

			return {
				...state, loading: true
			}

		case FETCH_DATA_SUCCESS:

			return {
				loading: false,
				data: action.payload,
				error: ''
			}

		case FETCH_DATA_ERROR:
			return {
				loading: false,
				data: null,
				error: action.payload
			}

		default: return state
	}

}