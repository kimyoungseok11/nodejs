import React from "react";
import styled from "styled-components";
import AuthCard from "../components/AuthCard";

const LoginBackground = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const JoinPage = () => {
  return (
    <LoginBackground>
      <AuthCard page="join"></AuthCard>
    </LoginBackground>
  );
};

export default JoinPage;
