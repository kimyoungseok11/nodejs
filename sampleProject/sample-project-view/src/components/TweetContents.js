import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import TweetItem from "./TweetItem";

const TweetBox = styled.div`
  width: 100%;
  height: 700px;
  padding-top: 60px;
  box-sizing: border-box;
`;

const TweetContents = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { menu, url } = props;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        console.log(`http://localhost:8080${url}`);
        const response = await axios.get(`http://localhost:8080${url}`);
        setData(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [menu, url]);

  if (loading) {
    return <TweetBox>대기중</TweetBox>;
  }

  if (!data) return <div>loading...</div>;

  if (menu === "All Tweet") {
    return (
      <TweetBox>
        {data.map((elem) => (
          <TweetItem key={elem.id} tweet={elem}></TweetItem>
        ))}
      </TweetBox>
    );
  } else if (menu === "My Tweet") {
    return (
      <TweetBox>
        {data.map((elem) => (
          <TweetItem key={elem.id} tweet={elem}></TweetItem>
        ))}
      </TweetBox>
    );
  }
};

export default TweetContents;
