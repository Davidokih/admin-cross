import React, { useRef, useState } from "react";
import { BsBellFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { FaBars } from "react-icons/fa";

import styled from "styled-components";
import Sidenav from "./Sidenav";
import { useMutation, useQuery } from "@tanstack/react-query";
import { orders } from "../Api/OrderApi";
import moment from 'moment'
import axios from "axios";
import { useNavigate } from "react-router-dom";
const baseURL = "https://crossbackend.onrender.com";

const Adheader = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  const myRef = useRef()
  const [ menuCgabge, setMenuChange ] = useState()
  const [add, setAdd] = useState('')

  const {data} = useQuery({
    queryKey: ["orders"],
    queryFn: orders
  })
  const updateStatus = useMutation({
    mutationKey: [ "order"],
    mutationFn: async ({id,notification}) => {
      await axios.patch(`${baseURL}/api/order/${id}/updatestatus`, { notification }).then(() => {
        navigate(`/order-detail/${id}`)
      })
      }
  })

  const handleMutate = (id) => {
    updateStatus.mutate({id, notification: ''})
  }
  
  const notification_Data = data?.filter((el) => el.notification === 'new')
  
  const change = () => {
    myRef.current.style.left = "0px"
    setMenuChange(true)
  }
  const returnAgain = () => {
    myRef.current.style.left = "-1000px"
    setMenuChange(false)
  }
  return (
    <>
    <Container>
      <Wrapper>
        <Hold>
          <Account>
            <BiUserCircle fontSize="22px" />
            <span>{`${user?.firstName} ${user?.lastName}` }</span>
          </Account>
            <Div
              onClick={()=> setAdd('display_notification')}
            ><BsBellFill fontSize="18px" /> { notification_Data?.length == 0 ? null : <span>{ notification_Data?.length}</span>}</Div>
          </Hold>
          <Menu className={ `${add}` } onClick={ () => setAdd('') }>
            <NavHold>
              { notification_Data?.map((props,index) => (
                <Navs key={index} onClick={()=> handleMutate(props._id)}>
                  { props.avatar && <Image src={ props?.avatar[ 0 ]?.url } /> }
                  {!props.avatar && <Img>{props.firstName?.charAt(0).toUpperCase() + props.lastName?.charAt(0).toUpperCase()}</Img>}
                <Content>
                    <Text cl="black">{`${props.firstName} ${props.lastName}`}</Text>
                    <Text cl="#8e959b">{ moment(props.createdAt).format("Do MMM YYYY - hh:mma") }</Text>
                </Content>
              </Navs>
              ))}
            </NavHold>
          </Menu>
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

const Img = styled.div`
  width: 40px;
  height: 40px;
  background-color: #b7b7b7;
  border-radius: 50%;
  margin-left: 13px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Content = styled.div``
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-color: gold;
  border-radius: 50%;
  margin-left: 13px;
`;
const Navs = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  cursor: pointer;
  opacity: 0px;
  
  :hover{
    transition: 350ms ease-in-out;
    background-color: #e4e4e4;
    opacity: 1px;
  }
`
const NavHold = styled.div`
  overflow-y: auto;
`
const Text = styled.div`
  margin: 0 10px;
  font-weight: 500;

  color: ${({ cl }) => cl};
`
const Menu = styled.div`
  display: none;
`;
const Div = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span{
    background-color: red;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 12px;
    position: relative;
    bottom: 7px;
    right: 10px;
  }
`;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  .display_notification{
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 330px;
    background-color: #fff;
    /* background-color: gold; */
    position: absolute;
    top: 70px;
    left: 140px;
    border-radius: 5px;
    z-index: 111;
    /* overflow: hidden; */

    -webkit-animation-name: fadeIn;
    -webkit-animation-duration: 1s;
    animation-name: fadeIn;
    animation-duration: 1s;

    
  }
  .display_notification::before{
    content: '';
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: -150px;
    top: -70px;
    z-index: -1;
    animation-name: fadeIn;
    animation-duration: 1s;
    /* background-color: gold; */
  }
  @-webkit-keyframes fadeIn {
    from {opacity: 0} 
    to {opacity: 1}
  }

  @keyframes fadeIn {
    from {opacity: 0} 
    to {opacity: 1}
  }

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
