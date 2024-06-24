import { createStore } from "redux";
import { UserModel } from "../models/UserModel";
import ProductModel from "../models/ProductModel";

export class ProductsState {
    public products: ProductModel[] = [];
}

export enum ProductsActionType {
    setProducts = "setProducts",
    deleteProducts = "deleteProducts",
    updateProducts = "updateProducts",    
}

// action object (will be sent via app-components)
export interface ProductsAction {
    type: ProductsActionType;
    payload?: any;
}

export function productsReducer(currentState: ProductsState=new ProductsState(), action: ProductsAction): ProductsState {
    
    const newState = { ...currentState };

    switch (action.type) {
        case ProductsActionType.deleteProducts:
            newState.products = [];
            break;
        case ProductsActionType.setProducts:
            newState.products = action.payload;
            break;
        case ProductsActionType.updateProducts:
            // todo
            alert("Redux Update Products not implemented")
            break;    
        default:
            break;
    }

    return newState
}


// export const authStore = createStore(authReducer)
