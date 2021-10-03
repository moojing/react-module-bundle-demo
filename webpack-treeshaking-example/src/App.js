import React from "react";
import styled from "styled-components";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <AppContainer>
      <Buttons />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  background: #272727;
  color: white;
`;

export default App;
