import { POST_DATA_REQUEST, POST_DATA_SUCCESS, POST_DATA_ERROR } from "./../actions";


const initialState = {
	loading: false,
	id: null,
	error: ''
}

export const postDataReducer = (state = initialState, action) => {

	switch (action.type) {

		case POST_DATA_REQUEST:

			return {
				...state, loading: true
			}

		case POST_DATA_SUCCESS:

			return {
				loading: false,
				id: action.payload,
				error: ''
			}

		case POST_DATA_ERROR:
			return {
				loading: false,
				id: null,
				error: action.payload
			}

		default: return state
	}

}