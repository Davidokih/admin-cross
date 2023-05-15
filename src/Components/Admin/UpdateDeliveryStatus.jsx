import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";

const UpdateDeliveryStatus = () => {

    const navigate = useNavigate()
    const {id} = useParams()
    const [ statusUpdate, setStatusUpdate ] = useState("")
    const [ pending_days, setpending_days ] = useState(0)
    const [ paymentStatus, setpaymentStatus ] = useState("")
    const updateStatus = useMutation({
      mutationKey: [ "products", id ],
      mutationFn: ({delivery_status,pending_days,payment_status}) => {
        const response = axios.patch(`${baseURL}/api/order/${id}/updatestatus`,{delivery_status,pending_days,payment_status})
        return response
        },
        onSuccess: ()=> {
            navigate("/admin-dashboard/orders")
      }
    })
//   console.log(pending_days)
  
    const handleMutate = () => {
      updateStatus.mutate({delivery_status: statusUpdate, pending_days: pending_days, payment_status:paymentStatus})
    }
  return (
      <Container>
          <select value={statusUpdate} onChange={e=>{setStatusUpdate(e.target.value)}}>
              <option>Delivery status</option>
              <option>cancled</option>
              <option>pending</option>
              <option>hold</option>
              <option>delivered</option>
              <option>failed</option>
              <option>completed</option>
              <option>shipped</option>
          </select>
          <select value={paymentStatus} onChange={e=>{setpaymentStatus(e.target.value)}}>
              <option>payment status</option>
              <option>paid</option>
              <option>pending</option>
          </select>
      {/* { statusUpdate === "rejected" ? <textarea placeholder='reason for rejection' value={ rejected } onChange={ (e) => {
        setrejected(e.target.value)
          }}/> : null} */}
     <input placeholder='Pending Days' type="number" value={ pending_days } onChange={ (e) => {
        setpending_days(e.target.value)
          }}/> 
          <button onClick={handleMutate}>Update Status</button>
    </Container>
  )
}

export default UpdateDeliveryStatus;

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
