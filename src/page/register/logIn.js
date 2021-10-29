import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const data = await request(
      "https://still-reef-22878.herokuapp.com/api/login/",
      "POST",
      { email: form.email, password: form.password }
    );
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
              <input type="email" placeholder="Email" required value={form.email}  {...register("email")}/>
            </div>
            <div className="form__field">
              <input type="password" placeholder="Password" required value={form.password} {...register("password")}/>
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
