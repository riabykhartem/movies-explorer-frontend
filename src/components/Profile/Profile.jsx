import { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";

export default function Profile({ isLoggedIn }) {
  const [editButtonToggled, setEditButtonToggled] = useState(false);
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <>
    <Header isLoggedIn={isLoggedIn} />

    <section className="profile page__content">
      <h2 className="profile__heading">Привет, Виталий!</h2>
      <form
        className="profile__form"
        id="a-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="profile__label">
          Имя:
          <input
            {...register("name", {
              required: true,
            })}
            className="profile__input profile__input_name"
            type="text"
            defaultValue="Виталий"
            disabled={!editButtonToggled}
          />
        </label>
        <label className="profile__label ">
          E-mail:
          <input
            {...register("email", {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Некорректный адрес электронной почты",
              },
            })}
            className="profile__input"
            disabled={!editButtonToggled}
            defaultValue={"pochta@yandex.ru"}
          />
        </label>
      </form>
      {editButtonToggled ? (
        <>
          <div className="profile__error-container">
            {(errors.name || errors.email) && <span>{ "При обновлении профиля произошла ошибка."}</span>}
          </div>
          <button
            type="submit"
            form="a-form"
            className="profile__button_type_submit button"
            disabled={!isValid}
          >
            Сохранить
          </button>
        </>
      ) : (
        <>
          <button
            className="profile__button_type_edit link"
            onClick={() => setEditButtonToggled(!editButtonToggled)
            }
          >
            Редактировать
          </button>
          <NavLink to="/signin" className="profile__logout-button link">
            Выйти из аккаунта
          </NavLink>
        </>
      )}
    </section>
    </>
  );
}
