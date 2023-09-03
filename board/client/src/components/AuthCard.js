import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../util/api.js";

const AuthWrap = styled.div`
  width: 100vw;
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
    .login-text {
      margin-bottom: 30px;
    }
    .login-text label {
      color: #ae7dff;
      font-weight: 600;
      font-size: 32px;
    }
    .input-box {
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
      margin-bottom: 40px;
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

const AuthCard = ({ page }) => {
  const isLogin = page === "login";
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    id: "",
    password: "",
    email: "",
  });
  const inputChange = (e) => {
    const newObj = {
      ...userInput,
      [e.target.name]: e.target.value,
    };
    setUserInput(newObj);
  };
  const buttonClick = async () => {
    if (!isLogin) {
      const response = await signUp(userInput);
      console.log(response);
      alert("회원가입 완료");
      navigate("/login");
    }
  };
  return (
    <div>
      <AuthWrap>
        <div className="login-elem-box">
          <div className="login-text">
            <label>{isLogin ? "Login" : "Join"}</label>
          </div>
          <div className="input-box">
            <input
              name="id"
              type="text"
              placeholder="ID"
              onChange={inputChange}
            ></input>
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={inputChange}
            ></input>
            {!isLogin && (
              <input
                name="email"
                type="text"
                placeholder="Email"
                onChange={inputChange}
              ></input>
            )}
          </div>
          <div className="button-wrap">
            <button className="login-button" onClick={buttonClick}>
              {isLogin ? <label>로그인</label> : <label>회원가입</label>}
            </button>
          </div>
          {isLogin ? (
            <div className="sub-button-wrap">
              <Link to="/findpass">비밀번호 찾기</Link>
              <Link to="/join">회원가입</Link>
            </div>
          ) : (
            <div className="sub-button-wrap">
              <Link to="/login">로그인</Link>
            </div>
          )}
        </div>
      </AuthWrap>
    </div>
  );
};

export default AuthCard;
