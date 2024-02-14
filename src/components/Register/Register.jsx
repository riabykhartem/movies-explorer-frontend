import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import mainApi from "../../utils/MainApi"

const Register = ({signUp}) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    signUp(data)
  };

  return (
    <main className="register">
      <NavLink to="/" className="register__logo link" />
      <h2 className="register__heading">Добро пожаловать!</h2>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <label className="register__label">
          Имя:
          <input
            placeholder="Виталий"
            {...register("name", {
              required: "это поле нужно заполнить",
            })}
            className="register__input register__input_name"
            type="text"
          />
        </label>
        <div className="register__error-container">
          {errors?.name && (
            <span>{errors.name.message || "что-то пошло не так"}</span>
          )}
        </div>
        <label className="register__label ">
          E-mail:
          <input
          placeholder="pochta@yandex.ru|"
            {...register("email", {
              required: "Это поле нужно заполнить",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный адрес электронной почты",
              },
            })}
            className="register__input"
          />
        </label>
        <div className="register__error-container">
          {errors?.email && (
            <span>{errors.email.message || "Что-то пошло не так"}</span>
          )}
        </div>
        <label className="register__label">
          Пароль:
          <input
          placeholder="••••••••••••••"
            {...register("password", {
              required: "Это поле нужно заполнить",
            })}
            className="register__input"
            type="password"
          />
        </label>
        <div className="register__error-container">
          {errors?.password && (
            <span>{errors.password.message || "Что-то пошло не так"}</span>
          )}
        </div>
        <button
          className="register__submit-button button"
          type="submit"
          disabled={!isValid}
        >
          Зарегистрироваться
        </button>
      </form>
      <p className="login__paragraph">
        Уже зарегистрированы?{" "}
        {
          <NavLink to="/signin" className="login__navlink link">
            Войти
          </NavLink>
        }
      </p>
    </main>
  );
};

export default Register;
