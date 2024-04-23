import {useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Register = ({signUp}) => {
  const [lockSubmit, setLockSubmit] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    setLockSubmit(true);
    signUp(data)
    setLockSubmit(false);
  };

  return (
    <main className="register">
      <NavLink to="/" className="register__logo link" />
      <h2 className="register__heading">Welcome!</h2>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="register__label">
          Name:
          <input
            placeholder="John Doe"
            {...register("name", {
              required: "this filed is required",
            })}
            className="register__input register__input_name"
            type="text"
          />
        </label>
        <div className="register__error-container">
          {errors?.name && (
            <span>{errors.name.message || "something went wrong"}</span>
          )}
        </div>
        <label className="register__label ">
          E-mail:
          <input
          placeholder="pochta@yandex.ru|"
            {...register("email", {
              required: "this field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "email address is not valid",
              },
            })}
            className="register__input"
          />
        </label>
        <div className="register__error-container">
          {errors?.email && (
            <span>{errors.email.message || "something went wrong"}</span>
          )}
        </div>
        <label className="register__label">
          Password:
          <input
          placeholder="••••••••••••••"
            {...register("password", {
              required: "this field is required",
            })}
            className="register__input"
            type="password"
          />
        </label>
        <div className="register__error-container">
          {errors?.password && (
            <span>{errors.password.message || "something went wrong"}</span>
          )}
        </div>
        <button
          className="register__submit-button button"
          type="submit"
          disabled={!isValid && !lockSubmit}
        >
          Sign up
        </button>
      </form>
      <p className="login__paragraph">
        Already have an account?{" "}
        {
          <NavLink to="/signin" className="login__navlink link">
            Sign in
          </NavLink>
        }
      </p>
    </main>
  );
};

export default Register;
