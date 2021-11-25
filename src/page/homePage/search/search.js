import React, { useMemo, useRef, useState } from "react";
import "./search.css";
import Flat from "./flat/flat";

const Search = (props) => {
  const [state, setState] = useState([props.state, 0]);

  const inputEl = useRef();
  const inputE2 = useRef();
  const inputE3 = useRef();
  const inputE4 = useRef();

  const classCe = () => {
    inputEl.current.className = "homeLogo-blok";
    inputE2.current.className = "homeLogo-blok";
    inputE3.current.className = "homeLogo-blok";
    inputE4.current.className = "homeLogo-blok";
  };

  const onButtonClickFlat = (ref) => {
    classCe();
    ref.current.className = "homeLogo-blok  log-blok";
    props.state.flat();
    setState((prevState) => {
      return [props.state.flat(), 1];
    });
    props.state.clineFilter();
  };
  const onButtonClickHome = (ref) => {
    classCe();
    ref.current.className = "homeLogo-blok  log-blok";
    props.state.home();
    setState((prevState) => {
      return [props.state.home(), 2];
    });
    props.state.clineFilter();
  };
  const onButtonClickShop = (ref) => {
    classCe();
    ref.current.className = "homeLogo-blok log-blok";
    props.state.shop();
    setState((prevState) => {
      return [props.state.shop(), 3];
    });
    props.state.clineFilter();
  };
  const onButtonClickland = (ref) => {
    classCe();
    ref.current.className = "homeLogo-blok log-blok";
    props.state.land();
    setState((prevState) => {
      return [props.state.land(), 4];
    });
    props.state.clineFilter();
  };
  const Filter = useMemo(() => {
    return <Flat state={state[0]} getdata={props.getdata} />;
  }, [props.state.filt]);
  return (
    <header className={props.state.filtClassName[4]}>
      <div className={props.state.filtClassName[2]}>
        {props.filterPage ? (
          <div></div>
        ) : (
          <div className="type">
            <div className={props.state.filtClassName[3]}>
              <div
                className="homeLogo-blok log-blok"
                ref={inputE2}
                onClick={() => {
                  onButtonClickFlat(inputE2);
                }}
              >
                <img
                  className="homelog"
                  src="https://image.flaticon.com/icons/png/512/535/535020.png"
                ></img>
              </div>
              <div
                className="homeLogo-blok"
                ref={inputEl}
                onClick={() => {
                  onButtonClickHome(inputEl);
                }}
              >
                <img
                  className="homelog"
                  src="https://img.icons8.com/emoji/452/house-with-garden.png"
                ></img>
              </div>
              <div
                className="homeLogo-blok"
                ref={inputE3}
                onClick={() => {
                  onButtonClickShop(inputE3);
                }}
              >
                <img
                  className="homelog"
                  src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-11/512/shop-icon.png"
                ></img>
              </div>
              <div
                className="homeLogo-blok"
                ref={inputE4}
                onClick={() => {
                  onButtonClickland(inputE4);
                }}
              >
                <img
                  className="homelog"
                  src="https://image.flaticon.com/icons/png/512/366/366918.png"
                ></img>
              </div>
            </div>
          </div>
        )}
        {Filter}
      </div>
    </header>
  );
};

export default Search;
