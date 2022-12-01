import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import GroupList from "./GroupList";
import "../css/Profile.css";

const Profile = (props) => {
  const navigate = useNavigate();

  const [inputName, setInputName] = useState("");
  const [edit, setEdit] = useState(false);

  const handleGroupClick = (suffix) => {
    navigate(suffix);
  };

  const handleChangeName = async () => {
    try {
      fetch("http://localhost:3000/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: inputName }),
      });
      setEdit(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleOnChange = async (e) => {
    setInputName(e.target.value);
  };

  return (
    <Container className="profile">
      <div className="profile--sub">
        <section className="profile__info">
          <div className="profile__info--general">
            <img
              className="profile__img"
              src={
                props.user && props.user.img
                  ? props.user.img
                  : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
              }
              alt="default img profile"
            />
            {!edit && (
              <>
                <span className="profile__fullname">
                  {props.user && props.user.first_name && props.user.last_name
                    ? props.user.first_name + props.user.last_name
                    : "User Fullname"}
                </span>
                <input
                  type="button"
                  name="change-name"
                  value="change"
                  onClick={() => setEdit(true)}
                />
              </>
            )}

            {edit && (
              <>
                <input
                  type="text"
                  onChange={handleOnChange}
                  value={inputName}
                ></input>
                <input
                  type="button"
                  name="change-name"
                  value="OK"
                  onClick={handleChangeName}
                />
              </>
            )}
          </div>
          <div className="profile__info--detail">
            <h3>Description</h3>
            <div className="profile__info__description">
              <p>
                {props.user && props.user.description
                  ? props.user.description
                  : "Nothing to show"}
              </p>
            </div>
          </div>
        </section>

        <section className="profile__group">
          <h3 className="profile__group__label">Groups</h3>
          <div className="profile__group--two-col">
            <div
              className="profile_group__left"
              onClick={() => handleGroupClick("/my-groups")}
            >
              <GroupList title="My Groups"></GroupList>
            </div>
            <div
              className="profile_group__right"
              onClick={() => handleGroupClick("/joined-groups")}
            >
              <GroupList title="Joined Groups"></GroupList>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Profile;
