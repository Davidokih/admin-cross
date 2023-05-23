import React from 'react'
import styled from 'styled-components'
import AllOrders from './AllOrders'
import NewSellers from './NewSellers'
import PendingUploads from './PendingUploads'
import { useQuery } from '@tanstack/react-query';
import { getCoustomers, getUser } from '../../Api/Api';
import { orders } from '../../Api/OrderApi';
import {RiWalletLine} from "react-icons/ri"
import { MdStorefront } from "react-icons/md"
import {RxSketchLogo, RxAvatar} from "react-icons/rx"

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
    const myData = filteredData?.filter((el)=> el.delivery_status === "completed")
    const pending = filteredData?.filter((el)=> el.delivery_status === "pending")
    const cancled = filteredData?.filter((el) => el.delivery_status === "cancled")
    const totalSales = myData?.reduce((price, el) => price + el.totalQty * el.subtotal, 0)
    function formatNumber(number) {
        if (number >= 1000000) {
          return (number / 1000000).toFixed(1) + 'M';
        } else if (number >= 1000) {
          return (number / 1000).toFixed(1) + 'K';
        }
        return number;
      }
    console.log(totalSales)
  return (
    <Container>
        <Wrapper>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Total Sales/GMV</span>
                    </Head>
                    <Content>
                              <Amount>₦{formatNumber(totalSales) }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#7c7eff" bg="#e5e1ff"><RiWalletLine /></Icon>
            </Card>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Total Marchants</span>
                    </Head>
                    <Content>
                        <Amount>{seller?.length }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#f7d167" bg="#fcf2da"><RxAvatar /></Icon>
            </Card>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Total Customers</span>
                    </Head>
                    <Content>
                        <Amount>{customersData?.length }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#f7d167" bg="#fcf2da"><RxAvatar /></Icon>
            </Card>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Completed Orders</span>
                    </Head>
                    <Content>
                        <Amount>{myData?.length }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#4dbbe6" bg="#d2edf6"><MdStorefront /></Icon>
            </Card>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Pending Orders</span>
                    </Head>
                    <Content>
                        <Amount>{pending?.length }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#4b9bff" bg="#dbe9ff"><MdStorefront /></Icon>
            </Card>
              <Card>
                  <Div>
                  <Line />
                <Hold>
                    <Head>
                        <span>Cancled</span>
                    </Head>
                    <Content>
                        <Amount>{cancled?.length }</Amount>
                        {/* <Percent>50%</Percent> */}
                    </Content>
                </Hold>
                </Div>
                <Icon cl="#4b9bff" bg="#dbe9ff"><MdStorefront /></Icon>
            </Card>
        </Wrapper>
        <AllOrders />
        <NewSellers />
        <PendingUploads />
    </Container>
  )
}

export default AdminDashboard

const Line = styled.div`
    width: 5px;
    height: 110px;
    background-color: blue;
    border-radius: 10px;
    /* margin-left: 10px; */
`
const Icon = styled.div`
    /* width: 20px; */
    height: 20px;
    padding: 10px 15px;
    background-color: ${({bg})=> bg};
    color: ${({cl})=> cl};
    font-size: 20px;
    border-radius: 5px; 
`
const Hold = styled.div`
    margin-left: 20px;
`
const Percent = styled.div`
    font-weight: 500;
    font-size: 14px;
`
const Amount = styled.div`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 20px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const Head = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #8f9099;
`
const Div = styled.div`
    display: flex;
`
const Card = styled.div`
    /* height: 200px; */
    width: 300px;
    display: flex;
    justify-content: space-between;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 10px;
    padding: 20px;

    @media (max-width: 768px){
        width: 100%;
    }
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