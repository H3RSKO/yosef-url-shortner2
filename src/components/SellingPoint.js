import { useMediaQuery } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const SellingPointContainer = styled.div`
  width: 20vw;
  background-color: white;
  border-radius: 2px;
  padding: 2em;
  text-align: left;

  @media (max-width: 1100px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: 89.6vw;
    padding: 0;
    text-align: center;
    border-radius: 6px;
  }
`;

const IconContainer = styled.div`
  background-color: #3a3054;
  border-radius: 50%;
  height: 5em;
  width: 5em;
  margin-top: -5em;
  display: flex;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 1100px) {
    margin-left: marginTop;
  } */

  @media (max-width: 600px) {
    /* margin-left: 50%; */
    /* margin-right: 50%; */
    position: absolute;
    margin-top: -3em;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 5.5em;
    width: 5.5em;
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 22px;
  padding-top: 1em;

  @media (max-width: 600px) {
    padding-top: 3.45em;
  }
`;

const Text = styled.p`
  font-size: 15px;
  color: #9e9aa8;

  @media (max-width: 600px) {
    padding: 0 2em 3em;
  }
`;

// !!!! check space between selling points is diff
// !!!! fix line in tablet mode (get rid of it?)


export const SellingPoint = ({ title, text, icon, marginTop, index }) => {
  const isTablet = useMediaQuery('(min-width:600px)', '(max-width:1100px)');
  return (
    <SellingPointContainer style={{ marginTop }}>
      <IconContainer style={{marginLeft: isTablet ? [0, "calc(50% - 40px)", "calc(90% - 40px)"][index] : "auto" }}>
        {icon}
      </IconContainer>
      <Title >{title}</Title>
      <Text >{text}</Text>
    </SellingPointContainer>
  );
};
