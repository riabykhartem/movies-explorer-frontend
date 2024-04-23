import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import Header from "../Header/Header";
import { useForm } from "react-hook-form";
import CurrentUserContext  from "../context/CurrentUserContext";

export default function Profile({
  isLoggedIn,
  logOut,
  editProfile,
}) {
  const currentUser = useContext(CurrentUserContext);
  const [editButtonToggled, setEditButtonToggled] = useState(false);
  const [originalValues, setOriginalValues] = useState({});
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
  } = useForm({
    defaultValues: {
      name: currentUser.name,
      email: currentUser.email,
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (editButtonToggled) {
      setOriginalValues({
        name: currentUser.name,
        email: currentUser.email,
      });
    }
  }, [editButtonToggled, currentUser]);

  const onSubmit = (data) => {
    editProfile(data);
    setEditButtonToggled(false);
  };

  const watchAllInputs = watch();

  const isFormUpdated = Object.keys(watchAllInputs).some(
    (key) => watchAllInputs[key] !== originalValues[key]
  );

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <main className="profile page__content">
        <h2 className="profile__heading">Привет, {currentUser.name}!</h2>
        <form
          className="profile__form"
          id="a-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="profile__label">
            Name:
            <input
              {...register("name", {
                required: true,
                minLength: {
                  value: 2,
                  message: "Must be at least 2 characters",
                },
              })}
              className="profile__input profile__input_name"
              type="text"
              placeholder={currentUser.name}
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
                  message: "email address is not valid",
                },
              })}
              className="profile__input"
              disabled={!editButtonToggled}
              placeholder={currentUser.email}
            />
          </label>
          {editButtonToggled ? (
            <>
              <div className="profile__error-container">
                {errors?.name?.message && (
                  <span>
                    {errors.name.message}
                  </span>
                )}
                {errors?.email?.message && (
                  <span>
                    {errors.email.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={!isValid || !isFormUpdated}
                form="a-form"
                className="profile__button_type_submit button"
              >
                Save
              </button>
              <button className={"profile__button_type_cancel"}onClick={() => setEditButtonToggled(false)}>отмена</button>
            </>
          ) : (
            <>
              <button
                className="profile__button_type_edit link"
                onClick={() => setEditButtonToggled(true)}
              >
                Edit
              </button>
              <NavLink
                onClick={logOut}
                to="/"
                className="profile__logout-button link"
              >
                Sign out
              </NavLink>
            </>
          )}
        </form>
      </main>
    </>
  );
}
