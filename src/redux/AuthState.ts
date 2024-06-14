import { createStore } from "redux";
import { UserModel } from "../models/UserModel";

export class AuthState {
    public userData: UserModel | undefined;
}

export enum AuthActionType {
    SetUserData = "SetUserData",    
    DeleteUserData = "DeleteUserData",
}

// action object (will be sent via app-components)
export interface AuthAction {
    type: AuthActionType;
    payload?: any;
}

export function authReducer(currentState: AuthState=new AuthState(), action: AuthAction): AuthState {
    
    const newState = { ...currentState };
    switch (action.type) {
        case AuthActionType.SetUserData:
            newState.userData = action.payload;
            break;
        case AuthActionType.DeleteUserData:
            newState.userData = undefined;
            break;
    
        default:
            break;
    }

    return newState
}


export const authStore = createStore(authReducer)
