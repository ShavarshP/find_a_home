import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { saveState } from "../../helpers/localStorage";
import { useHttp } from "../../myHooks/http";
import Loading from "../../components/loading/loading";

const LogIn = () => {
  const [login, setLogin] = useState(true);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const { request } = useHttp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      setLogin(false);
      const data = await request(
        "https://still-reef-22878.herokuapp.com/api/login/",
        "POST",
        { email: form.email, password: form.password }
      );
      saveState(data, "auth");
      history.push("/home");
    } catch (error) {}
    setLogin(true);
  };

  const onChangeData = (data) => {
    setForm({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <>
      {login ? (
        <div className="grid" style={{ marginTop: "10%" }}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            onChange={handleSubmit(onChangeData)}
            action="/"
            method="post"
            className="form login"
          >
            <header className="login__header">
              <h3 className="login__title">Login</h3>
            </header>
            <div className="login__body">
              <div className="form__field">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  {...register("email")}
                />
              </div>
              <div className="form__field">
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={form.password}
                  {...register("password")}
                />
              </div>
            </div>
            <footer className="login__footer">
              <input type="submit" value="Login" />
              <p>
                <span className="icon icon--info">?</span>
                <a href="#">Forgot Password</a>
              </p>
            </footer>
          </form>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default LogIn;
