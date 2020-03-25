import React from "react";
import { useForm, FormContext } from "react-hook-form";
import { Input } from "./Input";

const mandatoryMessage = msg => ({ required: msg });

export const MyForm = () => {
  const initialData = {
    name: "pepe",
    pass: 123456,
    age: 25
  };

  const methods = useForm({ mode: "onBlur" });
  const { register, handleSubmit, errors } = methods;

  const onSubmit = data => {
    console.log("Data is");
    console.log(data);
    // axios.post("http://kajshdfal", data).then(...)
  };
  console.log(errors);
  return (
    <>
      <h1>Login</h1>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="username"
            label="Usuario"
            ref={register(mandatoryMessage("Pon un usuario🔥"))}
            defaultValue={initialData.name}
          />
          <Input
            name="password"
            label="Contraseña"
            type="password"
            ref={register({ required: true })}
            defaultValue={initialData.pass}
          />
          <Input
            name="edad"
            label="edad"
            ref={register({ min: 18, max: 99, required: true })}
          />
          <Input
            name="edad2"
            label="edad"
            ref={register({ min: 18, max: 99, required: true })}
          />
          <button type="submit">Login</button>
        </form>
      </FormContext>
    </>
  );
};
