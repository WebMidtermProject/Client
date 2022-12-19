/* eslint-disable no-unused-vars */
import * as React from "react";

import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import GoogleSignInButton from "../components/login/GoogleSignInButton";
import GoogleSignUpButton from "../components/login/GoogleSignUpButton";

const SignUpPage = () => {
  const initState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };

  const baseUrl = process.env.REACT_APP_SERVER_HOST;
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);
  const [error, setError] = React.useState();

  const onSubmit = (values) => {
    console.log("Values:::", values);
    setError();
    fetch(baseUrl + "/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      }),
    })
      .then(async (res) => {
        if (res.status === 200) {
          const user = await res.json();
          localStorage.setItem("user", JSON.stringify(user));
          alert("Signin success!!!");
          window.location = "/sign-in";
        }
      })
      .catch((error) => {
        setError(error.message);
        console.log("Error:::", error.message);
      });
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const schema = yup
    .object()
    .shape({
      email: yup.string().email("Invalid email format").required("Required"),
      firstname: yup.string().required(),
      lastname: yup.string().required(),
      password: yup
        .string()
        .min(6, "Password is too short - should be 6 chars minimum."),
    })
    .required();

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
    // reValidateMode: "onChange",
    defaultValues: initialValues,
  });

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(">>", value, name);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <Container className="my-4" id="login-container">
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="firstname"
                placeholder="Enter your firstname..."
                {...register("firstname")}
                lder="Enter your firstname..."
              />
              {errors.firstname && (
                <Form.Text className="text-danger">
                  {errors.firstname.message}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="lastname"
                placeholder="Enter your lastname..."
                {...register("lastname")}
                lder="Enter your lastname..."
              />
              {errors.lastname && (
                <Form.Text className="text-danger">
                  {errors.lastname.message}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address..."
            {...register("email")}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password..."
            {...register("password")}
            lder="Enter your password..."
          />
          {errors.password && (
            <Form.Text className="text-danger">
              {errors.password.message}
            </Form.Text>
          )}
        </Form.Group>

        <Row className="justify-content-md-center" xs="auto">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <GoogleSignUpButton></GoogleSignUpButton>
        </Row>
        {error && <Row style={{ color: "red" }}>{error}</Row>}
      </Form>
    </Container>
  );
};

export default SignUpPage;
