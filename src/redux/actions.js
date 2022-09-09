import axios from "axios"

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST"
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS"
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR"

export const fetchDataRequest = () => {
	return {
		type: FETCH_DATA_REQUEST
	}
}

export const fetchDataSuccess = data => {
	return {
		type: FETCH_DATA_SUCCESS,
		payload: data
	}
}

export const fetchDataError = error => {
	return {
		type: FETCH_DATA_ERROR,
		payload: error
	}
}

export const fetchDataFromGoogleAPI = (urlValue) => {

	return (dispatch) => {

		if (!urlValue) {
			dispatch(fetchDataError("Please, url should not be empty."))
			return;
		}

		if (!urlValue.startsWith("http://") && !urlValue.startsWith("https://")) {
			dispatch(fetchDataError("Please, enter the correct Url!"))
			return;
		}

		const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${urlValue}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

		// Set loading value true
		dispatch(fetchDataRequest());

		axios.get(url)
			.then(res => {
				const data = res.data;
				dispatch(fetchDataSuccess(data))
			})
			.catch(error => {
				const errorMsg = error.message
				dispatch(fetchDataError(errorMsg))
			})
	}
}
