import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

const Step2 = (props) => {
  let history = useHistory();
  let files = [];
  let myImgs = [];
  const [preview, setPreview] = useState(<div className="preview"></div>);
  let [imgContainer, setImgContainer] = useState([]);
  const input = useRef();
  const triggerInput = () => input.current.click();
  const accept = [".png", ".jpg", ".jpeg", ".gif"];

  const changeHandler = (event) => {
    if (!event.target.files.length) {
      return;
    }

    files = Array.from(event.target.files);

    files.filter((file, index) => {
      if (!file.type.match("image")) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const src = ev.target.result;
        myImgs = [...myImgs, src];
        if (index == files.length - 1) {
          setImgContainer([...imgContainer, ...myImgs]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    setPreview((prevState) => {
      return (
        <div className="preview">
          {imgContainer.map((item, index) => {
            return (
              <div className="preview-image" key={index}>
                <img src={item} />
              </div>
            );
          })}
        </div>
      );
    });
  }, [imgContainer]);

  useEffect(() => {
    input.current.setAttribute("multiple", true);
    input.current.setAttribute("accept", accept.join(","));
  }, []);

  const next = async () => {
    props.state.formData.img = imgContainer;
    history.push("/add/step3");
  };
  return (
    <div className="container2">
      <div className="card">
        <input type="file" id="file" ref={input} onChange={changeHandler} />
        <div className="btn-cont" onClick={triggerInput}>
          Add photo
        </div>
        {preview}
      </div>
      <input
        type="submit"
        className="myButton myButton-form-newdata"
        value="next"
        onClick={next}
      />
    </div>
  );
};

export default Step2;
