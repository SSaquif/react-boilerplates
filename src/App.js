import styled from "styled-components";
import Navbar from "./Components/Navbar";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
    </AppContainer>
  );
}

export default App;
