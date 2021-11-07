import React, { Component, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import Slide from "./slideShow/slide";
import Content from "./content/content";
import { useParams } from "react-router-dom";
import Block from "./ControlBlock/block";
import Loading from "../../../components/loading/loading";
import { useHttp } from "../../../myHooks/http";
import { loadState } from "../../../helpers/localStorage";

const Home = (props) => {
  // const [state, setState] = useState(props.state);
  const [myData, setData] = useState(null);
  const history = useHistory();
  // const [isLoaded, setIsLoaded] = useState(false);
  const { id } = useParams();
  const { request } = useHttp();

  const getData = async () => {
    try {
      const data = await request(
        "https://still-reef-22878.herokuapp.com/api/my_home/" + id
      );
      // setIsLoaded(true);
      setData(data);
    } catch (e) {
      // setIsLoaded(true);
    }
  };
  const deleteData = async () => {
    try {
      const URL = `https://still-reef-22878.herokuapp.com/api/delete/${id}`
      const token = await loadState("auth");
      const data = await request(
        URL,
        "DELETE",
        null,
        {
          Authorization: `Bearer ${token.token}`,
        }
      );
      history.push("/home");
    } catch (error) { }
  }

  const check = () => {
    const promptId = prompt()
    if (promptId === id) {
      deleteData()
    }
  }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {myData ? (
        <div>
          <div className="content-home"></div>
          <Slide img={myData.img} />
          <Content state={myData} check={check} />
          <Block />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
