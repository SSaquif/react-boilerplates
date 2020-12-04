import { createContext, useReducer, useEffect } from "react";
import { auth, googleAuthProvider } from "../Firebase/firebase";

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
      await auth.signInWithPopup(googleAuthProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const googleSignOut = (ev) => {
    ev.preventDefault();
    auth.signOut();
  };

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatchCurrentUser({ type: "sign-in", payload: user });
      } else {
        dispatchCurrentUser({ type: "sign-out", payload: user });
      }
    });

    return () => {
      unlisten();
    };
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ currentUser, dispatchCurrentUser, googleSignIn, googleSignOut }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
