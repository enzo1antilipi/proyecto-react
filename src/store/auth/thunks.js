//los thunks son acciones que puedo hacer dispach pero son asincronas

import { singInWithGoogle } from "../../firebase/provider";
import { checkingCredentials } from "./";

export const checkingAuthentication = (email, password) => {
  return async (dispacht) => {
    dispacht(checkingCredentials());
  };
};

export const startGoogleSigniIn = () => {
  return async (dispacht) => {
    dispacht(checkingCredentials());
    const result = singInWithGoogle();
  };
};
