/* eslint-disable no-unused-vars */
import * as React from "react";

import {
  Container,
  Form,
  Button,
  Row,
  // InputGroup,
  // FormControl
} from "react-bootstrap";
// import { useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import GoogleSignInButton from "./GoogleSignInButton";

const SignInPage = () => {
  const initState = {
    email: "",
    password: "",
  };

  const schema = yup
    .object()
    .shape({
      email: yup.string().email("Invalid email format").required("Required"),
      password: yup
        .string()
        .min(3, "Password is too short - should be 6 chars minimum."),
    })
    .required();

  const baseUrl = "http://localhost:3000";
  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log("Values:::", values);
    fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email, password: values.password }),
    }).then(async (res) => {
      if (res.status === 200) {
        const user = await res.json();
        /*         console.log(user) */
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      }
    });
    /*          navigate("/home-page", {
      state: { email: values.email },
    });  */
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    // getValues,
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
          <GoogleSignInButton></GoogleSignInButton>
        </Row>
      </Form>
    </Container>
  );
};

export default SignInPage;
