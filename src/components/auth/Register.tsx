import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserModel } from "../../models/UserModel";
import { singUp } from "../../api/auth";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { AuthAction, AuthActionType, authStore } from "../../redux/AuthState";

const Register = () => {
  const { register, handleSubmit, reset } = useForm<UserModel>();

  // const { setUserData } = useContext(AppContext)
  const nav = useNavigate()
  const handleRegister = async (um: UserModel) => {
    const token = await singUp(um);
      if (token) {        
        localStorage.setItem("token", token as string);

        const action: AuthAction= {
          type: AuthActionType.SetUserData,
          payload: um,
        }
        authStore.dispatch(action);

        // setUserData(um)
        nav("/home")          
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
