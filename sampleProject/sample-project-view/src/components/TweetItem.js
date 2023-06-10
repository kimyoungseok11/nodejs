import axios from "axios";
import React from "react";
import styled from "styled-components";

const TweetWrap = styled.div`
  background: #fff;
  width: 90%;
  height: 70px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 5px;
  display: flex;
  .img-container {
    width: 20%;
    height: 100%;
    background-color: aliceblue;
  }
  .tweet-contents {
    width: calc(100% - 20%);
    height: 100%;
    padding: 7px 0 0 10px;
    box-sizing: border-box;
    position: relative;
    .id-container {
      font-size: 8px;
      font-weight: bold;
      text-align: left;
    }
    .tweet-container {
      font-size: 14px;
      text-align: left;
      margin-top: 12px;
    }
    .x-btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 5px;
      right: 7px;
      background-color: blanchedalmond;
      cursor: pointer;
    }
    .update-btn {
      width: 15px;
      height: 15px;
      position: absolute;
      bottom: 5px;
      right: 7px;
      background-color: blanchedalmond;
      cursor: pointer;
    }
  }
`;

const TweetItem = (props) => {
  const { id, password, tweet, idx } = props.tweet;

  const xBtnClick = async () => {
    try {
      const data = await axios.delete(
        `http://localhost:8080/user/delete/${idx}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TweetWrap>
      <div className="img-container"></div>
      <div className="tweet-contents">
        <div className="id-container">{id}</div>
        <div className="tweet-container">{tweet}</div>
        <div className="x-btn" onClick={xBtnClick}></div>
        <div className="update-btn"></div>
      </div>
    </TweetWrap>
  );
};

export default TweetItem;
