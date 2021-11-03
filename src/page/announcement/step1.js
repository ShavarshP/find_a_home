import React, { useState } from "react";
import PhoneInput from 'react-phone-number-input'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

const Step1 = (props) => {
  const [value, setValue] = useState()
  const [state, setState] = useState(props.state.formData);
  let history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    props.state.changedata(data);
    history.push("/add/step2");
  };

  const changeValue = (data) => {
    props.state.formData = data;
    setState(data);
  };

  return (
    <form
      className={"filter-container-form"}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleSubmit(changeValue)}
    >
      <div className="flex-container2" style={{ display: "flex" }}>
        <div style={{ marginTop: "16px" }}>
          <label htmlFor="female" className="nameRadio-buttom">
            Sale
          </label>
          <input name="acceptTerms" type="checkbox" {...register("sale")} />
          <label htmlFor="female" className="nameRadio-buttom">
            Rent
          </label>
          <input name="acceptTerms" type="checkbox" {...register("rent")} />
        </div>
        <div></div>
      </div>

      <div className="flex-container3">
        <input
          {...register("search_code")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="search by code"
          value={state.search_code}
        />
        <select
          style={{ height: "40px" }}
          name="Title"
          className="margin-box2"
          {...register("category")}
          value={state.category}
        >
          <option value="">district...</option>
          <option value="flat">flat</option>
          <option value="home">home</option>
          <option value="commercial">commercial</option>
          <option value="land">land</option>
        </select>

        <select
          style={{ height: "40px" }}
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

        <input
          {...register("price")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder=" price"
          value={state.price}
        />

        <input
          style={{ width: 100 }}
          {...register("rooms")}
          className="margin-box2"
          id="mailsend"
          type="number"
          placeholder="number of rooms"
          value={state.inline}
        />

        <input
          style={{ width: 100 }}
          {...register("floor")}
          className="margin-box2"
          id="mailsend"
          type="number"
          placeholder="floor"
          value={state.floor}
        />
        <input
          style={{ width: 100 }}
          {...register("building_floors")}
          className="margin-box2"
          id="mailsend"
          type="number"
          placeholder="building floors"
          value={state.building_floors}
        />
        <input
          style={{ width: 100 }}
          {...register("area")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="area"
          value={state.area}
        />

        <input
          {...register("street")}
          className="margin-box2"
          id="mailsend"
          type="text"
          placeholder="street"
          value={state.street}
        />
        <PhoneInput
          value={state.Mobile_number}
          {...register("Mobile_number")}
          onChange={setValue} />

        {/* <input
          type="tel"
          className="margin-box2"
          placeholder="Mobile number"
          name="Mobile number"
          {...register("Mobile_number")}
          value={state.Mobile_number}
        /> */}
        <textarea
          style={{ width: "250px", height: "300px" }}
          placeholder="description"
          className="margin-box2"
          rows="4"
          cols="50"
          {...register("description")}
          value={state.description}
        ></textarea>
      </div>
      <input
        type="submit"
        className="myButton myButton-form-newdata"
        value="next"
      />
    </form>
  );
};

export default Step1;
