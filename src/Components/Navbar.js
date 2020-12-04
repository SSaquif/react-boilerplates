import styled from "styled-components";

const NavContainer = styled.div`
  height: var(--nav-height);
  width: 100vw;
  background-color: gold;
`;

function Navbar() {
  return <NavContainer></NavContainer>;
}

export default Navbar;
