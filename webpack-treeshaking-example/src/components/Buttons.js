import React, { Component } from "react";
import styled from "styled-components";

import { getAuthorName } from "../utils";

export default class Buttons extends Component {
  handleClick() {
    console.log("you clicked me");
  }

  render() {
    return (
      <>
        <h2>{getAuthorName()}</h2>
        <p> 這是一個 Tree Shaking 範例 </p>
        <ButtonWrapper>
          <Button color="blue" onClick={() => this.handleClick()}>
            按鈕
          </Button>
          <br />
          <Button color="red" onClick={() => this.handleClick()}>
            按鈕
          </Button>
        </ButtonWrapper>
      </>
    );
  }
}

const ButtonWrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const Button = styled.button`
  border-radius: 4px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 15px 30px;
  text-align: center;
  transition: all 0.5s;
  width: 100%;
  ${(props) => getButtonColor(props.color)}

  &:hover {
    background-color: transparent;
  }
`;

const getButtonColor = (color) => {
  if (color === "blue") {
    return `
      background-color: #134893;
      border: 2px solid #134893;
      &:hover {
        color: blue;
        border: 2px solid #134893;
      }
    `;
  }
  if (color === "red") {
    return `
      background-color: #a92619;
      border: 2px solid #a92619;
      &:hover {
        color: #a92619;
        border: 2px solid #a92619;
      }
    `;
  }
};
