import { connect } from "react-redux";
import { fetchDataFromGoogleAPI } from "../../redux/actions.js";

import Hero from "./hero/Hero";
import Search from "./search/Search";
import Result from "./result/Result";
import Spinner from "../shared/spinner/Spinner";

const Home = ({ updateURL, googleAPIResult, fetchDataFromGoogleAPI }) => {
  const { loading, data, error } = googleAPIResult;

  return (
    <>
      <Hero />
      <Search onClick={fetchDataFromGoogleAPI} />
      {loading && <Spinner />}
      {data && <Result />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    googleAPIResult: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataFromGoogleAPI: (urlValue) =>
      dispatch(fetchDataFromGoogleAPI(urlValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
