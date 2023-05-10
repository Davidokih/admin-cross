import React from 'react'
import AdminRoutes from "./AllRoutes/AdminRoutes"
// import Adpage from './Admin/Adpage';
import styled from "styled-components";
import Adheader from "./Admin/Adheader";
import Sidenav from "./Admin/Sidenav";
import {Routes, Route} from "react-router-dom"

const AdninRoutePage = () => {
  return (
    <div>
      <Container>
      <Side>
        <Sidenav />
        <Adheader />
      </Side>
        <Main>
          <Routes>
            
          </Routes>
        <AdminRoutes />
        {/* <Merchantrequest />  */}
      </Main>
    </Container>
    </div>
  )
}

export default AdninRoutePage

const Container = styled.div`
  width: 100%;
  background-color: #e8e2e2;
  display: flex;
`;
const Side = styled.div`
  width: 230px;
  flex: 0.8;
  height: 100vh;
  background-color: #f262aa;
  border-top-right-radius: 20px;
  position: fixed;
  z-index: 1111;
  @media (max-width: 768px) {
    width: 90px;
  }
  /* position: fixed; */
`;
const Main = styled.div`
  width: calc(100vw - 240px);
  display: flex;
 
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  right: 0px;
  /* background-color: blue; */
  @media (max-width: 768px) {
    /* width: 100%; */
    display: none;
  }
`;
