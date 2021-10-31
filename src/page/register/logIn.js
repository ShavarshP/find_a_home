import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../helpers/localStorage";
import { useHttp } from "../../myHooks/hook";

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { request } = useHttp();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    try {
      const data = await request(
        "http://localhost:5000/api/login/",
        "POST",
        { email: form.email, password: form.password }
      );
      // console.log(data)
      saveState(data, "auth");
    } catch (error) {

    }
  };

  const onChangeData = (data) => {
    console.log(data)
    setForm({
      email: data.email,
      password: data.password,
    });
  };


  return (
    <>
      <div className="grid">
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleSubmit(onChangeData)} action="/" method="post" className="form login">
          <header className="login__header">
            <h3 className="login__title">Login</h3>
          </header>
          <div className="login__body">
            <div className="form__field">
              <input type="email" placeholder="Email" required value={form.email}  {...register("email")} />
            </div>
            <div className="form__field">
              <input type="password" placeholder="Password" required value={form.password} {...register("password")} />
            </div>
          </div>
          <footer className="login__footer">
            <input type="submit" value="Login" />
            <p><span className="icon icon--info">?</span><a href="#">Forgot Password</a></p>
          </footer>

        </form>

      </div>
    </>
  );
};

export default LogIn;
