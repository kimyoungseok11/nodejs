import React from "react";
import styled from "styled-components";
import { useState } from "react";

const JoinWrap = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-elem-box {
    width: 100%;
    max-width: 400px;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 1px 1px 3px 1px #dadce0;
    border-radius: 5px;
    .login-text label {
      color: #ae7dff;
      font-weight: 600;
      font-size: 32px;
    }
    .input-box {
      height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }
    .input-box input {
      padding: 10px 10px;
      background-color: #ebebeb;
      border-radius: 5px;
      outline: none;
      border: none;
    }
    .button-wrap {
      width: 80%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      .login-button {
        width: 100%;
        height: 35px;
        border: none;
        border-radius: 15px;
        background: #ae7dff;
        color: #fff;
        font-weight: 600;
      }
      .login-button:active {
        background: #a271f5;
      }
    }
    .sub-button-wrap {
      width: 80%;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-evenly;
      margin-top: 15px;
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
`;
const JoinCard = () => {
  const [userInput, setUserInput] = useState({
    id: "",
    pass: "",
  });
  const inputChange = (e) => {
    const newObj = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(newObj);
  };
  const loginClick = () => {
    console.log(userInput);
  };
  return (
    <div>
      <JoinWrap>
        <div className="login-elem-box">
          <div className="login-text">
            <label>Join</label>
          </div>
          <div className="input-box">
            <input
              name="id"
              type="text"
              placeholder="ID"
              onChange={inputChange}
            ></input>
            <input
              name="pass"
              type="password"
              placeholder="Password"
              onChange={inputChange}
            ></input>
          </div>
          <div className="button-wrap">
            <button className="login-button" onClick={loginClick}>
              회원가입
            </button>
          </div>
        </div>
      </JoinWrap>
    </div>
  );
};

export default JoinCard;
