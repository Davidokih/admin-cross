import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

const UpdateStatus = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [ statusUpdate, setStatusUpdate ] = useState("")
    const [ shippingFee, setshippingFee ] = useState(0)
    const [ rejected, setrejected ] = useState("not rejected")
    const updateStatus = useMutation({
      mutationKey: [ "products", id ],
      mutationFn: ({status,rejected,shippingFee}) => {
        const response = axios.patch(`${baseURL}/api/product/${id}/update`,{status,rejected,shippingFee})
        return response
        },
        onSuccess: ()=> {
            navigate("/admin-dashboard/products")
      }
    })
  console.log(shippingFee)
  
    const handleMutate = () => {
      updateStatus.mutate({status: statusUpdate, rejected: rejected, shippingFee: shippingFee})
    }
  return (
      <Container>
          <select value={statusUpdate} onChange={e=>{setStatusUpdate(e.target.value)}}>
              <option>Update Status</option>
              <option>cancled</option>
              <option>pending</option>
              <option>hold</option>
              <option>approved</option>
              <option>rejected</option>
          </select>
      { statusUpdate === "rejected" ? <textarea placeholder='reason for rejection' value={ rejected } onChange={ (e) => {
        setrejected(e.target.value)
          }}/> : null}
     <input placeholder='Shipping Fee' type="number" value={ shippingFee } onChange={ (e) => {
        setshippingFee(e.target.value)
          }}/> 
          <button onClick={handleMutate}>Update Status</button>
    </Container>
  )
}

export default UpdateStatus;

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
