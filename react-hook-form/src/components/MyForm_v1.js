import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  font-size: 1.3em;
  &.error {
    border-color: red;
  }
`;

const hasError = (errors, name) => {
  if (name in errors) return "error";
  return "";
};

export const MyForm = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const onSubmit = data => {
    console.log("Data is");
    console.log(data);
  };
  console.log(errors);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <Input
            className={hasError(errors, "usu")}
            name="usu"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Password</label>
          <Input
            name="passi"
            className={hasError(errors, "passi")}
            type="password"
            ref={register({ required: true })}
          />
        </div>
        <div>
          <label>Edad</label>
          <Input
            name="age"
            className={hasError(errors, "age")}
            type="number"
            ref={register({ min: 18, max: 99, required: true })}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};
