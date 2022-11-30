import React from "react";
import { useState } from "react";

import { Container } from "react-bootstrap";

const CreateGroupForm = (props) => {
  const createGroupUrl = "http://localhost:3000/create-group";
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [nameInput, setNameInput] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    const group_id = window.crypto.randomUUID();
    console.log(group_id, e.target[0].value);
    e.preventDefault();

    fetch(createGroupUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        group_name: e.target[0].value,
        group_id: group_id,
      }),
    })
      .then((res) => {
        setLoading(false);
        return res.json();
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
