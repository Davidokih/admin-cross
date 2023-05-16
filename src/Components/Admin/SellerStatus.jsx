import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

const SellerStatus = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [ status, setstatus ] = useState("")
    const updateStatus = useMutation({
      mutationKey: [ "products", id ],
      mutationFn: ({status}) => {
        const response = axios.patch(`${baseURL}/api/seler/${id}/updateuser`,{status})
        return response
        },
        onSuccess: ()=> {
            navigate("/admin-dashboard/merchant")
      }
    })
//   console.log(pending_days)
  
    const handleMutate = () => {
      updateStatus.mutate({status: status})
    }
  return (
      <Container>
          <select value={status} onChange={e=>{setstatus(e.target.value)}}>
              <option>cancled</option>
              <option>pending</option>
              <option>hold</option>
              <option>approved</option>
              <option>failed</option>
          </select>
          <button onClick={handleMutate}>Update Status</button>
    </Container>
  )
}

export default SellerStatus;

const Container = styled.div`
    width: 100%;
    /* background-color: gold; */
    margin-top: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    select{
        width: 300px;
        height: 30px;
        margin-bottom: 20px;
    }
    button{
        border-radius: 5px;
        background-color: #42d017;
        border: 0px;
        padding: 10px 20px;
        color: white;
        cursor: pointer;
    }
    textarea{
      outline: none;
      width: 300px;
      height: 200px;
      margin-bottom: 20px;
    }

    input {
      outline: none;
      width: 250px;
      height: 30px;
      margin-bottom: 20px;
    }
`
