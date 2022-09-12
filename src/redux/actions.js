import axios from "axios"
import { v4 as uuid } from 'uuid';
import moment from 'moment';


/**
 * 
 * 
 * ACTION:
 * Fetch Data with Google Light House API
 * 
 * 
 */
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

/**
 * Redux Thunk: use Google Light-House API to request data. 
 * @param {*} urlValue string
 * @returns 
 */
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


/**
 * 
 * 
 * ACTION:
 * Creates new record inside AirTable DB
 * 
 * 
 */
export const POST_DATA_REQUEST = "POST_DATA_REQUEST"
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS"
export const POST_DATA_ERROR = "POST_DATA_ERROR"

export const postDataRequest = () => {
	return {
		type: POST_DATA_REQUEST
	}
}

export const postDataSuccess = data => {
	return {
		type: POST_DATA_SUCCESS,
		payload: data
	}
}

export const postDataError = error => {
	return {
		type: POST_DATA_ERROR,
		payload: error
	}
}

export const createNewRecordOnAirTable = (dataFetched) => {

	return (dispatch) => {


		const lightHouseResult = dataFetched?.lighthouseResult

		const data = JSON.stringify({
			"url": lightHouseResult?.requestedUrl,
			"first-contentful-paint": lightHouseResult?.audits?.['first-contentful-paint'],
			"time-to-interactive": lightHouseResult?.audits?.interactive,
			"speed-index": lightHouseResult?.audits?.['speed-index'],
			"total-blocking-time": lightHouseResult?.audits?.['total-blocking-time'],
			"largest-contentful-paint": lightHouseResult?.audits?.['largest-contentful-paint'],
			"cumulative-layout-shift": lightHouseResult?.audits?.['cumulative-layout-shift']
		});

		const url = `https://api.airtable.com/v0/appvvI1hxxonhxOEF/vitals`;

		const newRecord = {
			"records": [
				{
					"fields": {
						"id": uuid(),
						"data": data,
						"url": lightHouseResult?.requestedUrl
					}
				}
			]
		}

		const headers = {
			headers: {
				Authorization: "Bearer key4g81qp085FgqYz",
				"Content-Type": "application/json",
			},
		};

		// Set loading value true
		dispatch(postDataRequest());

		axios.post(url, newRecord, headers)
			.then(res => {
				console.log('post response id:', res.data?.records[0]?.id)
				dispatch(postDataSuccess(res.data?.records[0]?.id))
			})
			.catch(error => {
				const errorMsg = error.message
				dispatch(postDataError(errorMsg))
			})
	}
}


/**
 * 
 * 
 * ACTION:
 * Fetch all records that matches with Url analyzed
 * 
 * 
 */
export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST"
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS"
export const FETCH_SEARCH_ERROR = "FETCH_SEARCH_ERROR"

export const fetchSearchRequest = () => {
	return {
		type: FETCH_SEARCH_REQUEST
	}
}

export const fetchSearchSuccess = data => {
	return {
		type: FETCH_SEARCH_SUCCESS,
		payload: data
	}
}

export const fetchSearchError = error => {
	return {
		type: FETCH_SEARCH_ERROR,
		payload: error
	}
}


/**
 * Sent GET method to AirTable DB. AirTable sends back filtered data by Url (es. https://www.firstLevelDomain.secondLevelDomain)
 * @param {*} urlValue string
 * @returns 
 */
export const getFilteredRecordsFromAirTable = (urlValue) => {

	return (dispatch) => {

		const url = `https://api.airtable.com/v0/appvvI1hxxonhxOEF/vitals?filterByFormula=SEARCH('${urlValue}', {url})`;

		// Set loading value true
		dispatch(fetchSearchRequest());

		const headers = {
			headers: {
				Authorization: "Bearer key4g81qp085FgqYz",
			},
		};

		axios.get(url, headers)
			.then(res => {
				const data = res.data;
				dispatch(fetchSearchSuccess(getJSONFormatData(data)))
			})
			.catch(error => {
				const errorMsg = error.message
				dispatch(fetchSearchError(errorMsg))
			})
	}
}

/**
 * Formatting date day value in DD-MM-YYYY from YYYY-MM-DD\THH:mm:ss using moment.js
 * @param {*} data object
 * @returns 
 */
const getJSONFormatData = (data) => {
	if (!data) return;

	for (let i = 0; i < data?.records.length; i++) {
		data.records[i] = {
			...data.records[i],
			createdTime: moment.utc(data.records[i].createdTime, "YYYY-MM-DD\THH:mm:ss\Z").format("DD-MM-YYYY"),
			fields: { ...data.records[i].fields, data: JSON.parse(data.records[i]?.fields.data) }
		}
	}

	return data;
}