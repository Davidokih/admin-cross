import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import Detaildown from "../Detail/Detaildown";
import { getAllProduct } from "../Api/ProductApi";
import ItemsCard from "./ItemsCard"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { NavLink,useParams } from "react-router-dom";


const Categories = () => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
    const {id} = useParams()
  const [ currentPage, setCurrentPage ] = useState(0)

  const recordPage = 20
  const lastIndex = currentPage * recordPage
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)

  const filteredData = currentPageData?.filter((el) => el.category === id)
  console.log(id)
  var nf = Intl.NumberFormat()
  return (
    <Container>
      <Wrapper>
      <Downtitle>Mobiles</Downtitle>
        <Cardhold>
        {
        filteredData?.map((props, index) => (
          <ItemsCard id={ props._id } name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} />
        ))
        }
      </Cardhold>
     </Wrapper>
    </Container>
  );
};

export default Categories;

const Downtitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 7px;
`;
const Cardhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: gold; */
  /* overflow-x: auto; */
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1.9px solid #d975c0; */
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;

  
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
