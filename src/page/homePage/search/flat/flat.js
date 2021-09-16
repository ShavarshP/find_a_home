import React, { useState } from "react";
import "./flat.css";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Flat = (props) => {
  const [state, setState] = useState(props.state.filt);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    history.push("/filtPage/1");
    if (props.getdata) {
      props.getdata();
    }
  };

  const search = (data) => {
    props.state.filt = data;
    setState(data);
  };

  return (
    <form
      className={props.state.filtClassName[0]}
      onChange={handleSubmit(search)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-container2" style={{ display: "flex" }}>
        <div style={{ marginTop: "16px" }}>
          <label htmlFor="female" className="nameRadio-buttom">
            Sale
          </label>
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("sale")}
            value={state.sale}
          />
          <label htmlFor="female" className="nameRadio-buttom">
            Rent
          </label>
          <input
            name="acceptTerms"
            type="checkbox"
            {...register("rent")}
            value={state.rent}
          />
        </div>
        <div></div>
      </div>
      <div className="flex-container3">
        <input
          {...register("search_code")}
          className="margin-box"
          id="mailsend"
          type="text"
          placeholder="search by code"
          value={state.search_code}
        />

        <select
          style={{ height: "34px" }}
          name="Title"
          className="margin-box2"
          {...register("district")}
          value={state.district}
        >
          <option value="">district...</option>
          <option value="Ajapnyak">Ajapnyak</option>
          <option value="Arabkir">Arabkir</option>
          <option value="Avan">Avan</option>
          <option value="Davtashen">Davtashen</option>
          <option value="Erebuni">Erebuni</option>
          <option value="Kanaker-Zeytun">Kanaker-Zeytun</option>
          <option value="Kentron">Kentron</option>
          <option value="Malatia-Sebastia">Malatia-Sebastia</option>
          <option value="Nork-Marash">Nork-Marash</option>
          <option value="Nor Nork">Nor Nork</option>
          <option value="Nubarashen">Nubarashen</option>
          <option value="Shengavit">Shengavit</option>
          <option value="other">other</option>
        </select>
        <input
          {...register("street")}
          className="margin-box"
          id="mailsend"
          type="text"
          placeholder="street"
          value={state.street}
        />
        <input
          {...register("rooms")}
          style={{ display: props.state.rooms }}
          className="margin-box"
          id="mailsend"
          type="number"
          placeholder="number of rooms"
          value={state.rooms}
        />
        <div style={{ display: "flex" }}>
          <input
            {...register("min_price")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min price"
            value={state.min_price}
          />
          <input
            {...register("max_price")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max price"
            value={state.max_price}
          />
        </div>
        <div style={{ display: props.state.floor }}>
          <input
            {...register("min_floor")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min floor"
            value={state.min_floor}
          />
          <input
            {...register("max_floor")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max floor"
            value={state.max_floor}
          />
        </div>
        <div style={{ display: "flex" }}>
          <input
            {...register("min_area")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="min area"
            value={state.min_area}
          />
          <input
            {...register("max_area")}
            className="margin-box price"
            id="mailsend"
            type="text"
            placeholder="max area"
            value={state.max_area}
          />
        </div>
        <select
          style={{ height: "80px" }}
          name="Title"
          className="margin-box2"
          {...register("building_type")}
          value={state.building_type}
        >
          <option value="">building type...</option>
          <option value="stone">stone</option>
          <option value="panel">panel</option>
          <option value="monolith">monolith</option>
        </select>
        <input type="submit" className="myButton" value="look for" />
      </div>
    </form>
  );
};

export default Flat;
