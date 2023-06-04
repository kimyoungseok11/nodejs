import React, { useState } from "react";
import styled from "styled-components";
import TweetContents from "../components/TweetContents";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: cadetblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TweetContainer = styled.div`
  width: 350px;
  height: 600px;
  background-color: antiquewhite;
  overflow: scroll;
  position: relative;
`;

const Headers = styled.div`
  width: 350px;
  height: 60px;
  background-color: #000;
  position: fixed;
  .header-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    .logo-box {
      width: 100px;
      height: 100%;
      background-color: aliceblue;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .menu-box {
      width: 200px;
      height: 100%;
      background-color: aqua;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        cursor: pointer;
      }
    }
  }
`;

const MainPage = () => {
  const [menuClick, setMenuClick] = useState("All Tweet");
  const [url, setUrl] = useState("/user");

  const onMenuClick = (e) => {
    setMenuClick(e.target.textContent);
    url === "/user" ? setUrl("/user/kid1m") : setUrl("/user");
  };

  return (
    <div>
      <MainContainer>
        <TweetContainer>
          <Headers>
            <div className="header-wrap">
              <div className="logo-box">Dtwitter</div>
              <div className="menu-box">
                <span onClick={onMenuClick} value="/user">
                  All Tweet
                </span>
                <span onClick={onMenuClick} value="/user/kid1m">
                  My Tweet
                </span>
              </div>
            </div>
          </Headers>
          <TweetContents menu={menuClick} url={url}></TweetContents>
        </TweetContainer>
      </MainContainer>
    </div>
  );
};

export default MainPage;
