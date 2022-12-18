import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import List from "../group/List";
import BasicModal from "../modal/BasicModal";
import NewGroupForm from "../form/NewGroupForm";
import GradientButton from "../button/GradientButton";
import GradientCard from "../container/GradientCard";
import MonoButton from "../button/MonoButton";
import Loading from "../loading/Loading";

import "./css/ProfilePage.css";

const Profile = (props) => {
  const navigate = useNavigate();
  const getProfileUrl = process.env.REACT_APP_SERVER_HOST + "/user/profile";

  const [inputName, setInputName] = useState("");
  const [edit, setEdit] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const toggleModal = () => setModal(!modal);

  useEffect(() => {
    setLoading(true);
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
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000) + 500);
    } catch (error) {
      setTimeout(() => {
        setLoading(false);
      }, Math.floor(Math.random() * 1000) + 500);
      console.log(error.message);
    }
  }, [getProfileUrl]);

  return (
    <div className="page--profile">
      <div className="page__content">
        <GradientCard h="100%" mw="1200px">
          <div className="profile-content">
            <div className="profile-upper">
              <div className="profile-upper--general">
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
                    {/*                 <input
                    type="button"
                    name="change-name"
                    value="change"
                    onClick={() => setEdit(true)}
                  /> */}
                    <MonoButton
                      className="btn-change-name"
                      onClick={() => setEdit(true)}
                      name="Change"
                    ></MonoButton>
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
              <div className="profile-upper--detail">
                <h3>Description</h3>
                <div className="profile-upper__description">
                  <p>
                    {props.user && props.user.description
                      ? props.user.description
                      : "Nothing to show"}
                  </p>
                </div>
              </div>
            </div>

            <div className="profile-below">
              <h3 className="profile-below__label">Groups</h3>
              <div className="profile-below--two-col">
                <div
                  className="profile-group__left"
                  onClick={() => handleGroupClick("/my-groups")}
                >
                  <h5 className="profile-group__title">My groups</h5>
                  <List h="160px" profile={true}></List>
                </div>
                <div
                  className="profile-group__right"
                  onClick={() => handleGroupClick("/joined-groups")}
                >
                  <h5 className="profile-group__title">My groups</h5>
                  <List h="160px" type="joined" profile={true}></List>
                </div>
              </div>
            </div>
            <GradientButton
              className="btn-new-group"
              onClick={toggleModal}
              type="submit"
              name="New group"
            >
              New Group
            </GradientButton>
          </div>
        </GradientCard>
      </div>

      {modal && (
        <BasicModal toggleModal={toggleModal}>
          <h4 className="new-modal__title">New group</h4>
          <NewGroupForm></NewGroupForm>
        </BasicModal>
      )}
      {loading && <Loading></Loading>}
    </div>
  );
};

export default Profile;
