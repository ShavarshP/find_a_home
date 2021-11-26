import React, { useEffect } from "react";
import "./announcement.css";
import Header from "../filtHome/header/header";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import { useParams } from "react-router-dom";

const Announcement = (props) => {
  const { id } = useParams();
  let page = <Step1 state={props.state} />;

  // const [state, setState] = useState(props.state);

  useEffect(() => {
    // setState((prevState) => {
    //   return props.state;
    // });
  }, [props.state.filterClassName]);

  switch (id) {
    case "step1":
      page = <Step1 state={props.state} />;
      break;
    case "step2":
      page = <Step2 state={props.state} />;
      break;
    case "step3":
      page = <Step3 state={props.state.formData} />;
      break;
  }
  return (
    <div>
      {" "}
      <Header />
      {page}
    </div>
  );
};

export default Announcement;
