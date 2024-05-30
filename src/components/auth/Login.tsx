import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import { CredentialsModel } from "../../models/CredentialsModel";
import { parseJwt } from "../../utils/helpers";
import { UserModel } from "../../models/UserModel";

const Login = () => {
  const { register, handleSubmit } = useForm<CredentialsModel>();

  const handleLogin = async (c: CredentialsModel) => {
    const res = await login(c);
    if (res) {
      alert("Logged in successfully!");

      console.log(res); // token

      // extract user
      const um: UserModel = parseJwt(res);
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
