import React, { useState } from "react";

import { Container } from "react-bootstrap";

import "./css/CreatePresentationForm.css";

const CreatePresentationForm = (props) => {
  const createPresentationUrl =
    process.env.REACT_APP_SERVER_HOST + "/presentation/create";
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

    fetch(createPresentationUrl, {
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
        if (data.status === 200) {
          setSuccess(true);
        }
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const handleChangeNamePresentation = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <Container className="container-create-presentation">
      {error && (
        <span className="error error-create-presentation">{error}</span>
      )}
      {success && (
        <span className="success success-create-presentation">Created!!!</span>
      )}
      {!loading && (
        <form onSubmit={handleSubmit} className="form form-create-presentation">
          <input
            className="input-presentation-name"
            type="text"
            name="title"
            placeholder="Presentation name"
            onChange={handleChangeNamePresentation}
            value={nameInput}
          />
          <input type="submit" className="btn-submit" value="Create" />
        </form>
      )}
      {loading && !error && (
        <span className="loading loading-create-presentation">Loading...</span>
      )}
    </Container>
  );
};

export default CreatePresentationForm;
