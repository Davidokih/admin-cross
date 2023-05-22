import React from 'react'
import styled from 'styled-components'
import AllOrders from './AllOrders'
import NewSellers from './NewSellers'
import PendingUploads from './PendingUploads'
import { useQuery } from '@tanstack/react-query';
import { getCoustomers, getUser } from '../../Api/Api';
import { orders } from '../../Api/OrderApi';

const AdminDashboard = () => {
    const {data} = useQuery({
        queryKey: ["users"],
        queryFn: getUser
    })
    const seller = data?.filter((el) => el.isSeller === true)
    const {data: filteredData} = useQuery({
        queryKey: ["orders"],
        queryFn: orders
    })
    const {data: customersData} = useQuery({
        queryKey: ["users"],
        queryFn: getCoustomers
      })
    const myData = filteredData?.filter((el)=> el.delivery_status === "delivered")
    const pending = filteredData?.filter((el)=> el.delivery_status === "pending")
    const cancked = filteredData?.filter((el)=> el.delivery_status === "cancked")
  return (
    <Container>
        <Wrapper>
              <Card>
                  <Line />
                 <Hold>
                  <Head><span>
                Total Sales/GMV
                    </span>
                    </Head>
                <Content>
                      <Amount>{myData?.length }</Amount>
                    {/* <Percent>50%</Percent> */}
                </Content>
                  </Hold>
                  <Icon>Icon</Icon>
            </Card>
        </Wrapper>
        <AllOrders />
        <NewSellers />
        <PendingUploads />
    </Container>
  )
}

export default AdminDashboard


const Line = styled.div``
const Icon = styled.div``
const Hold = styled.div``
const Percent = styled.div`
    font-weight: 500;
    font-size: 14px;
`
const Amount = styled.div`
    font-weight: 700;
    font-size: 20px;
`
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Head = styled.div`
    background-color: gold;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    display: flex;
    justify-content: space-between;

    span{
        font-weight: 600;
    }
`
const Card = styled.div`
    /* height: 200px; */
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 10px;
`
const Wrapper = styled.div`
    width: 95%;
    margin-top: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
    /* background-color: gold; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`