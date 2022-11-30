import React from "react";

import GroupList from "./GroupList";
import { Container } from "react-bootstrap";

import "../css/Profile.css";

const Profile = (props) => {
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
            <span className="profile__fullname">
              {props.user && props.user.first_name && props.user.last_name
                ? props.user.first_name + props.user.last_name
                : "User Fullname"}
            </span>
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
            <div className="profile_group__left">
              <GroupList title="My Groups"></GroupList>
            </div>
            <div className="profile_group__right">
              <GroupList title="Joined Groups"></GroupList>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Profile;
