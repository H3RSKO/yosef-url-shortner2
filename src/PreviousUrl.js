import { Grid } from "@material-ui/core";
import { useState } from "react";
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PrevUrlOuterContainer = styled(Grid)`
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 20px;

  @media (max-width: 750px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const UrlContainer = styled(Grid)`
  display: flex;
  padding: 2em;
  font-weight: bold;

  @media (max-width: 600px) {
    padding: 0.5em;
    font-weight: 500;
    align-self: flex-start;
    margin-left: 0.5em !important;
  }
`;

const ShortUrlContainer = styled(Grid)`
  color: #2bd0d0;
  font-weight: bold;
  display: flex;
  justify-content: end;
  padding: 2em;


  @media (max-width: 600px) {
    padding: 0.5em;
    font-weight: 500;
    align-self: flex-start;
    margin-left: 0.5em !important;
  }
`;

const ButtonContainer = styled(Grid)`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    margin-bottom: 1.5em;
  }
`;

const UrlButton = styled.div`
  /* background-color: #2bd0d0 !important; */
  color: white ;
  border-radius: 6px ;
  text-transform: none ;
  padding: 0.5em 1.3em;
  width: fit-content ;
  font-weight: bold;

  @media (max-width: 600px) {
      width: 80% ;
  }

  &:hover {
    background-color: #9ae3e3 ;
    cursor: pointer;
  }
`;

const PreviousUrl = ({ url, shortUrl }) => {
  const [copied, setCopied] = useState(false);

  const isDesktop = useMediaQuery('(min-width:600px)');

  const clickHandler = () => {
    // add to clipboard
    navigator.clipboard.writeText(shortUrl);
    // add styling
    setCopied(true);
  }

  return (
  <PrevUrlOuterContainer container >
    <UrlContainer item sm={6} xs={12}>
      {url}
    </UrlContainer>
    {!isDesktop && <hr class="solid" height="1px" color="#F2F2F2" style={{borderWidth: "0.5px", width: "100%"}} />}
    <ShortUrlContainer item sm={3} xs={12}>
      {shortUrl}
    </ShortUrlContainer>
    {/* <Grid item sm={2} xs={12}> */}
    <ButtonContainer sm={3} xs={12}>
      <UrlButton onClick={clickHandler} style={{backgroundColor: copied ? "#3A3054" : "#2bd0d0"}}>
      {copied ? "Copied!" : "Copy"}
      </UrlButton>
    </ButtonContainer>
    {/* </Grid> */}
  </PrevUrlOuterContainer>)
};

export default PreviousUrl;
