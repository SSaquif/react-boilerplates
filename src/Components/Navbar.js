import styled from "styled-components";
import { useContext } from "react";
import { CurrentUserContext } from "../Contexts/CurrentUserContext";

const NavContainer = styled.div`
  height: var(--nav-height);
  width: 100vw;
  background-color: gold;
  display: flex;
  justify-content: flex-end;
  padding: 0 2.5%;
`;

const ButtonContainer = styled.div`
  height: var(--nav-height);
  width: 10vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid black;
`;

const SignInButton = styled.button`
  all: unset;

  &:hover {
    color: red;
  }
`;

const SignOutButton = styled.button`
  all: unset;
  height: calc(0.75 * var(--nav-height));

  &:hover {
    color: red;
  }
`;

const UserPicGoogle = styled.img`
  border-radius: 50%;
  height: calc(0.8 * var(--nav-height));
  width: calc(0.8 * var(--nav-height));
  border: 2.5px solid black;
`;

function Navbar() {
  const {
    currentUser: { userInfo },
    googleSignIn,
    googleSignOut,
  } = useContext(CurrentUserContext);

  console.log(userInfo);
  return (
    <NavContainer>
      <ButtonContainer>
        {!userInfo ? (
          <SignInButton onClick={googleSignIn}>Sign In</SignInButton>
        ) : (
          <>
            <SignOutButton onClick={googleSignOut}>Sign Out</SignOutButton>
            <UserPicGoogle src={userInfo.photoURL} />
          </>
        )}
      </ButtonContainer>
    </NavContainer>
  );
}

export default Navbar;
