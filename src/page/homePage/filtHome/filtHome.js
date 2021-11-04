import React, { Component, useEffect, useState } from "react";
import Search from "../search/search";
import List from "../list/list";
import Footer from "../footer/footer";
import Loading from "../../../components/loading/loading";
// import { useParams } from "react-router-dom";
import Header from "../../filtHome/header/header";
import { useHttp } from "../../../myHooks/http";
import { useParams } from "react-router-dom";
import Next from "./next/nextPage";

const FiltPage = (props) => {
  const [state, setState] = useState(props.state);
  // const [filt, setFilt] = useState(props.state.filt);
  const [mydata, setData] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { request } = useHttp();
  const { id } = useParams();

  props.state.openFiltPage();

  const getdata = async () => {
    setData(null);
    try {
      const data = await request(
        "https://still-reef-22878.herokuapp.com/api/filt_page/" + id,
        "POST",
        props.state.filt,
        {
          "Content-Type": "application/json",
        }
      );
      setData(data);
    } catch (e) { }
  };

  useEffect(() => {
    setState((prevState) => {
      return props.state;
    });
    getdata();
  }, []);

  return (
    <div>
      <Header />
      {mydata ? (
        <div>
          <div className="home home-filterHome">
            <Search state={state} getdata={getdata} filterPage={true} />
            <div className="filter-list">
              <List state={state} data={mydata.candidate} />
              <Next data={mydata.count} />
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default FiltPage;
