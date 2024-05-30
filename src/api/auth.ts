import { CredentialsModel } from "../models/CredentialsModel";
import { UserModel } from "../models/UserModel";
import { apiCall } from "./apiCall";

export async function singUp(user: UserModel) {
  const res = await apiCall("register", "POST", {}, user);
  if (res.isOk) {
    // save token to localStorage
    localStorage.setItem("token", res.data);

    return res.data; // token
  } else {
    alert("Can't register right now. retry latter");
    console.log(res.errorMessage);
    console.log(res.data);

    return false;
  }
}

export async function login(credentials: CredentialsModel) {
  const res = await apiCall("login", "POST", {}, credentials);

  if (res.isOk) {
    localStorage.setItem("token", res.data);
    return res.data;
  } else {
    alert("Can't login right now. retry latter");
    console.log(res.errorMessage);
    console.log(res.data);

    return false;
  }
}
