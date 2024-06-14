import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { CredentialsModel } from "../../models/CredentialsModel";
import { parseJwt } from "../../utils/helpers";
import { UserModel } from "../../models/UserModel";
import { useContext } from "react";
import { AppContext } from "../../App";
import { AuthAction, AuthActionType, authStore } from "../../redux/AuthState";

const Login = () => {
  const { register, handleSubmit } = useForm<CredentialsModel>();

  // const { setUserData } = useContext(AppContext);

  const handleLogin = async (c: CredentialsModel) => {
    const res = await login(c);
    if (res) {
      alert("Logged in successfully!");
      const action: AuthAction = {
        type: AuthActionType.SetUserData,
        payload: parseJwt(res),
      }
      authStore.dispatch(action);
      // setUserData(parseJwt(res));
    }
  };
  return (
    <div style={{ border: "black solid 2px" }}>
      <h2> Login </h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <label> enter email: </label>
        <input type="email" {...register("email")} />
        <label> enter password: </label>
        <input type="password" {...register("password")} />
        <button> Login </button>
      </form>
    </div>
  );
};

export default Login;
