import React, { useEffect, useState } from "react";
import "./home.css";
import Manue from "./manue/manu";
import Search from "./search/search";
import List from "./list/list";
import Footer from "./footer/footer";
import { useHttp } from "../../myHooks/hook";
import MiniLoading from "../../loading/miniLoading";

const Home = (props) => {
  const [state, setState] = useState(props.state);
  const [mydata, setData] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const { request } = useHttp();
  props.state.openHomePage();

  const getData = async () => {
    try {
      const data = await request("/api/houses");
      // setIsLoaded(true);
      setData(data);
    } catch (e) {
      // setIsLoaded(true);
    }
  };

  useEffect(() => {
    getData();
    setState((prevState) => {
      return props.state;
    });
  }, []);

  return (
    <div className="home">
      <Manue />
      <Search state={props.state} />
      <h2 className="home__title">New announcements</h2>
      <hr style={{ border: "1px solid #676662" }} />
      {mydata ? <List state={state} data={mydata} /> : <MiniLoading />}
      <Footer />
    </div>
  );
};

export default Home;
