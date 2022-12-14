import { connect } from "react-redux";
import {
  fetchDataFromGoogleAPI,
  createNewRecordOnAirTable,
  getFilteredRecordsFromAirTable,
} from "../../redux/actions.js";

import Hero from "./hero/Hero";
import Search from "./search/Search";
import Result from "./result/Result";
import Spinner from "../shared/spinner/Spinner";

import { useEffect } from "react";
import Instructions from "./instruction/Instructions.jsx";

const Home = ({
  googleAPIResult,
  postData,
  searchData,
  fetchDataFromGoogleAPI,
  createNewRecordOnAirTable,
  getFilteredRecordsFromAirTable,
}) => {
  const { loading, data, error } = googleAPIResult;
  const { id } = postData;
  const { search } = searchData;

  useEffect(() => {
    if (!data) return;
    createNewRecordOnAirTable(data);
  }, [data]);

  useEffect(() => {
    if (!id) return;
    getFilteredRecordsFromAirTable(data?.lighthouseResult?.requestedUrl);
  }, [id]);

  return (
    <>
      <Hero />
      <Search onClick={fetchDataFromGoogleAPI} />
      {loading && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Spinner />
        </div>
      )}
      {data && <Result data={search} />}
      {!data && <Instructions />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    googleAPIResult: state.data,
    postData: state.postData,
    searchData: state.searchData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // Fetch data from google API
    fetchDataFromGoogleAPI: (urlValue) =>
      dispatch(fetchDataFromGoogleAPI(urlValue)),
    // Filter all data fetch from google API and send them on Airtable DB
    createNewRecordOnAirTable: (dataFetched) =>
      dispatch(createNewRecordOnAirTable(dataFetched)),
    // Fetch all data from AirTable that match with
    getFilteredRecordsFromAirTable: (url) =>
      dispatch(getFilteredRecordsFromAirTable(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
