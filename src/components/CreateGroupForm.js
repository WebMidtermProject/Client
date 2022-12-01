import React from "react";
import { useState } from "react";

import { Container } from "react-bootstrap";

import "../css/CreateGroupForm.css";

const CreateGroupForm = (props) => {
  const createGroupUrl = "http://localhost:3000/create-group";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    fetch(createGroupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group_name: e.target[0].value,
      }),
    })
      .then(async (res) => {
        setLoading(false);
        return await res.json();
      })
      .then((data) => {
        /*         if (data?.user) {
          localStorage.setItem('user', JSON.stringify(data?.user));
          window.location.reload();
        } */
      })
      .catch((error) => {
        console.log(error.message);
        setError(error?.message);
      });
  };

  const handleChangeNameGroup = (e) => {
    setNameInput(e.target.value);
  };

  return (
    <Container className="section-create-group">
      {error && <span className="error error-create-group">{error}</span>}

      {!loading && (
        <form onSubmit={handleSubmit} className="form form-create-group">
          <input
            className="input-group-name"
            type="text"
            name="group-name"
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
