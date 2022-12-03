import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

import ShowGroups from "../group/ShowGroups";
import "./css/Profile.css";

const Profile = (props) => {
  const navigate = useNavigate();
  const getProfileUrl = process.env.REACT_APP_SERVER_HOST + "/user/profile";

  const [inputName, setInputName] = useState("");
  const [edit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const handleGroupClick = (suffix) => {
    navigate(suffix);
  };
  const handleChangeName = async () => {
    try {
      var userJson = JSON.parse(localStorage.getItem("user"));
      var accessToken = userJson.accessToken;
      fetch(process.env.REACT_APP_SERVER_HOST + "/user/edit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-token": `${accessToken}`,
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

  useEffect(() => {
    try {
      const getData = async () => {
        var userJson = JSON.parse(localStorage.getItem("user"));
        var accessToken = userJson.accessToken;

        const res = await fetch(getProfileUrl, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            "api-token": `${accessToken}`,
          },
        });
        const data = await res.json();
        if (data.data.length !== 0) {
          setUserInfo(data.data);
        }

        return data;
      };
      getData();
    } catch (error) {
      console.log(error.message);
    }
  }, [getProfileUrl]);

  return (
    <Container className="profile">
      <div className="profile--sub">
        <section className="profile__info">
          <div className="profile__info--general">
            <img
              className="profile__img"
              src={
                userInfo?.picture
                  ? userInfo?.picture
                  : "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg"
              }
              alt="default img profile"
            />
            {!edit && (
              <>
                <span className="profile__fullname">
                  {userInfo?.first_name
                    ? userInfo?.first_name + userInfo?.last_name
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
              <ShowGroups profile={true} title={"My groups"}></ShowGroups>
            </div>
            <div
              className="profile_group__right"
              onClick={() => handleGroupClick("/joined-groups")}
            >
              <ShowGroups
                type="joined groups"
                title={"Joined groups"}
                profile={true}
              ></ShowGroups>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Profile;
