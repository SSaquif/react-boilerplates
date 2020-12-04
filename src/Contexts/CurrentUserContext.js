import { createContext, useReducer } from "react";

export const CurrentUserContext = createContext(null);

const initialState = {
  loading: true,
  userInfo: null,
};

const reducer = (state, { type, payload }) => {
  const newState = { ...state };

  switch (type) {
    case "get-info":
      newState.loading = true;
      break;

    case "sign-in":
      newState.userInfo = payload;
      newState.loading = false;
      break;

    case "sign-out":
      newState.userInfo = null;
      newState.loading = false;
      break;

    default:
      break;
  }

  return newState;
};

const CurrentUserProvider = ({ children }) => {
  const [currentUser, dispatchCurrentUser] = useReducer(reducer, initialState);

  const googleSignIn = async (ev) => {
    ev.preventDefault();
    try {
      // await
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignOut = (ev) => {
    ev.preventDefault();
  };

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, dispatchCurrentUser, googleSignIn, googleSignOut }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
