import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
export default function Login({ signIn }) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <section className="login">
      <NavLink to="/" className="login__logo link" />
      <h2 className="login__heading">Glad to see you!</h2>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__label ">
          E-mail:
          <input
            placeholder="pochta@yandex.ru"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Email address is not valid",
              },
            })}
            className="login__input"
          />
        </label>
        <div className="login__error-container">
          {errors?.email && (
            <span>{errors.email.message || "Что-то пошло не так"}</span>
          )}
        </div>
        <label className="login__label">
          Password:
          <input
            placeholder="••••••••••••••"
            {...register("password", {
              required: "Это поле нужно заполнить",
            })}
            className="login__input"
            type="password"
          />
        </label>
        <div className="login__error-container">
          {errors?.password && (
            <span>{errors.password.message || "Что-то пошло не так"}</span>
          )}
        </div>
        <button
          className="login__submit-button button"
          type="submit"
          disabled={!isValid}
        >
          Log in
        </button>
      </form>
      <p className="login__paragraph">
        Not signed up yet?{" "}
        {
          <NavLink to="/signup" className="login__navlink link">
            Sign up
          </NavLink>
        }
      </p>
    </section>
  );
}
