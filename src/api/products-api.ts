import ProductModel from "../models/ProductModel";
import { apiCall } from "./apiCall";

export async function getProducts() {
  const res = await apiCall("products");
  if (res.isOk) {
    return res.data;
  } else {
    alert("Can't get products right now. retry latter");
    console.log(res.errorMessage);
    console.log(res.data);
    return false;
  }
}

export async function getProduct(id: number) {
  const res = await apiCall("products/" + id);
  if (res.isOk) {
    return res.data;
  } else {
    alert("Can't get product right now. retry latter");
    console.log(res.errorMessage);
    console.log(res.data);
    return false;
  }
}

export async function addProduct(p:ProductModel) {
    const res = await apiCall("products", "POST", {}, p);
    if (res.isOk) {
        return res.data;
    } else {
        alert("Can't add new product right now. retry latter")
        console.log(res.errorMessage);
        console.log(res.data);
        return false;        
    }
}

export async function deleteProduct(id: number) {
    const res = await apiCall("products/" + id, "DELETE");
    if (res.isOk) {
        return true;
    } else {
        alert("Can't delete product right now. retry latter");
        console.log(res.errorMessage);
        console.log(res.data);       
        return false;
    }
}