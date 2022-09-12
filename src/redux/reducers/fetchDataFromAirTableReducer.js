import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_ERROR } from "../actions"

const initialState = {
	loading: false,
	search: null,
	error: ''
}

export const fetchDataFromAirTableReducer = (state = initialState, action) => {

	switch (action.type) {

		case FETCH_SEARCH_REQUEST:

			return {
				...state, loading: true
			}

		case FETCH_SEARCH_SUCCESS:

			return {
				loading: false,
				search: action.payload,
				error: ''
			}

		case FETCH_SEARCH_ERROR:
			return {
				loading: false,
				search: null,
				error: action.payload
			}

		default: return state
	}

}