import React from "react";
import Header from "../components/Header";
import MainPage from "./MainPage";
import styled from "styled-components";

const Layout = () => {
  return (
    <div>
      <Header />
      <MainPageStyle>
        <MainPage />
      </MainPageStyle>
    </div>
  );
};

export default Layout;
const MainPageStyle = styled("main")`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("https://img.pikbest.com/origin/06/44/60/07IpIkbEsT6Qh.jpg!sw800");
  background-position: center;
  background-size: cover;
`;
