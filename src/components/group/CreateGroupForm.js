import React, { useState } from "react";

import { Container } from "react-bootstrap";

import "./css/CreateGroupForm.css";

const CreateGroupForm = (props) => {
  const createGroupUrl = process.env.REACT_APP_SERVER_HOST + "/group/create";
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    setSuccess(false);
    setLoading(true);
    e.preventDefault();
    const userJson = JSON.parse(localStorage.getItem("user"));
    const accessToken = userJson.accessToken;
    console.log(
      JSON.stringify({
        title: e.target[0].value,
      })
    );
    fetch(createGroupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-token": `${accessToken}`,
      },
      body: JSON.stringify({
        title: e.target[0].value,
      }),
    })
      .then(async (res) => {
        setLoading(false);
        return res;
      })
      .then((data) => {
        if (data.statusCode === 200) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const handleChangeNameGroup = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <Container className="section-create-group">
      {error && <span className="error error-create-group">{error}</span>}
      {success && (
        <span className="success success-create-group">Created!!!</span>
      )}
      {!loading && (
        <form onSubmit={handleSubmit} className="form form-create-group">
          <input
            className="input-group-name"
            type="text"
            name="title"
            placeholder="Your group name"
            onChange={handleChangeNameGroup}
            value={nameInput}
          />
          <input type="submit" className="btn-submit" value="Create" />
        </form>
      )}
      {loading && !error && (
        <span className="loading loading-create-group">Loading...</span>
      )}
    </Container>
  );
};

export default CreateGroupForm;
