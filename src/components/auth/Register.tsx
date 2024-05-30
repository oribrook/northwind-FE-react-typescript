import React from "react";
import { useForm } from "react-hook-form";
import { UserModel } from "../../models/UserModel";
import { singUp } from "../../api/auth";

const Register = () => {
  const { register, handleSubmit, reset } = useForm<UserModel>();

  const handleRegister = async (um: UserModel) => {
    const res = await singUp(um);
      if (res) {
        // console.log(res); // token
        
      alert("Welcome" + um.firstName);
    //   reset();
    }
  };
  return (
    <div style={{ border: "black solid 3px" }}>
      <h2>Register</h2>
      <br />
      <form onSubmit={handleSubmit(handleRegister)}>
        <label> first name </label>
        <input {...register("firstName")} />
        <label> last name </label>
        <input {...register("lastName")} />
        <label> email </label>
        <input {...register("email")} />
        <label> password </label>
        <input {...register("password")} />

        <button> Register </button>
      </form>
    </div>
  );
};

export default Register;
