import React, { useRef, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import styled from "styled-components";
import Sidenav from "./Sidenav";
const Adheader = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const myRef = useRef()
  const [menuCgabge, setMenuChange] = useState()

  // console.log(cartData)
  const change = () => {
    myRef.current.style.left = "0px"
    setMenuChange(true)
  }
  const returnAgain = () => {
    myRef.current.style.left = "-1000px"
    setMenuChange(false)
  }
  // console.log(user);
  return (
    <>
    <Container>
      <Wrapper>
        <Hold>
          <Account>
            <BiUserCircle fontSize="22px" />
            <span>{`${user?.firstName} ${user?.lastName}` }</span>
          </Account>
          <BsBellFill fontSize="18px" />
          </Hold>
          {
            menuCgabge ? <SearchHold onClick={returnAgain}>
            <FaBars size="25px"/>
          </SearchHold> : <SearchHold onClick={change}>
          <FaBars size="25px"/>
        </SearchHold>
          }
      </Wrapper>
      </Container>
      <Side ref={myRef} onClick={returnAgain}>
        <Sidenav />
      </Side>
    </>
  );
};

export default Adheader;
// const Container =styled.div``
const Side = styled.div`
    display: none;

  @media (max-width: 768px) {
    display: block;
    width: 230px;
    flex: 0.8;
    height: 100vh;
    background-color: #f262aa;
    border-top-right-radius: 20px;
    position: fixed;
    left: -1000px;
    z-index: 1111;
    transition: all .7s ease-in-out;
  }
  /* position: fixed; */
`;
const Account = styled.div`
  /* width: 190px; */
  height: 40px;
  border-radius: 20px;
  background-color: #f9d0e4;
  margin: 0 6px;
  display: flex;
  align-items: center;
  padding: 0 2px;
  span {
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
  }
`;
const Hold = styled.div`
  width: 200px;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SearchHold = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 50px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  width: 90%;
  /* border-bottom: 1.9px solid grey; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 0 10px; */
  /* background-color: gold; */
`;
const Container = styled.div`
  width: calc(100% - 230px);
  height: 70px;
  border-bottom: 1.9px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  /* padding-bottom: 160px; */
  /* position: absolute; */
  right: 0px;
  top: 0px;
  background-color: white;
  z-index: 11;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
