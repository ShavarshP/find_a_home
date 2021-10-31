import React, { Component, useState, useEffect } from "react";
import "./home.css";
import Slide from "./slideShowe/slide";
import Content from "./content/content";
import { useParams } from "react-router-dom";
import Block from "./ControlBlock/block";
import Loading from "../../../components/loading/loading";
import Phone from "./phone/phone";
import { useHttp } from "../../../myHooks/hook";
import { loadState } from "../../../helpers/localStorage";

const Home = (props) => {
  // const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const { request } = useHttp();

  const getData = async () => {
    try {
      const data = await request(
        "https://still-reef-22878.herokuapp.com/api/my_home/" + id
      );
      // setIsLoaded(true);
      console.log(data);
      setData(data);
    } catch (e) {
      // setIsLoaded(true);
    }
  };
  const deleteData = async () => {
    try {
      const URL = `http://localhost:5000/api/delete/${id}`
      const token = await loadState("auth");
      const data = await request(
        URL,
        "DELETE",
        null,
        {
          Authorization: `Bearer ${token.token}`,
        }
      );
    } catch (error) { }
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {mydata ? (
        <div>
          <div className="content-home"></div>
          <Slide img={mydata.img} />
          <Content state={mydata} />
          <Block />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
