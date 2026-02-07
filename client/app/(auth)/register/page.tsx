"use client";

import AuthForm from "@/components/shared/AuthForm";
import { IRegisterFormFields } from "@/types/IFormFields";

const Register = () => {
  const registerFields: IRegisterFormFields[] = [
    {
      name: "username",
      label: "Username",
    },
    {
      name: "email",
      label: "Email",
    },
    {
      name: "password",
      label: "Password",
    },
  ];

  return (
    <>
      <AuthForm
        formFields={registerFields}
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        type="Register"
      />
    </>
  );
};

export default Register;
