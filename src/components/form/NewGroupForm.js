import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Row } from "react-bootstrap";

import "./css/NewGroupForm.css";

const NewGroupForm = (props) => {
  const api = process.env.REACT_APP_SERVER_HOST + "/group/create";

  const onSubmit = (values) => {
    const userJson = JSON.parse(localStorage.getItem("user"));
    const accessToken = userJson.accessToken;
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-token": `${accessToken}`,
      },
      body: JSON.stringify({
        title: values.group_name,
      }),
    })
      .then(async (res) => {
        /*         setLoading(false); */
        return res;
      })
      .then((data) => {
        if (data.status === 200) {
          /*           setSuccess(true); */
        }
      })
      .catch((error) => {
        /* setError(error?.message); */
        console.log(error.message);
      });
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const schema = yup
    .object()
    .shape({
      group_name: yup.string().required("Group name is required"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    /*     reValidateMode: "onSubmit", */
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    defaultValues: { group_name: "" },
  });

  return (
    <Container className="new-group-container">
      <Form
        className="new-group-form"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Form.Group controlId="group-name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter group name..."
            {...register("group_name")}
          />
          {errors.group_name && (
            <Form.Text className="text-danger">
              {errors.group_name.message}
            </Form.Text>
          )}
        </Form.Group>
        <Button className="btn-create" variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
};

export default NewGroupForm;
