import { Grid } from "@material-ui/core";
import { useState } from "react";
import styled from 'styled-components';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PrevUrlOuterContainer = styled(Grid)`
  background-color: white;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-content: flex-start;
    padding: 0.5em;
  }
`;

const UrlContainer = styled(Grid)`
  display: flex;
  padding: 2em;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 600px) {
    padding: 0.5em;
    font-size: 20px;
    font-weight: 500;
  }
`;

const ShortUrlContainer = styled(Grid)`
  color: #2bd0d0;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: end;
  padding: 2em;


  @media (max-width: 600px) {
    padding: 0.5em;
    font-size: 20px;
    font-weight: 500;
  }
`;

const UrlButton = styled.div`
  /* background-color: #2bd0d0 !important; */
  color: white !important;
  border-radius: 6px !important;
  text-transform: none !important;
  padding: 0.5em 1.3em!important;
  width: fit-content !important;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 800px) {
      width: 80% !important;
      padding: 0;
  }

  &:hover {
    background-color: #9ae3e3 !important;
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
  <PrevUrlOuterContainer container>
    <UrlContainer item md={7} xs={12}>
      {url}
    </UrlContainer>
    {!isDesktop && <hr class="solid" color="lightgray" width="100%"/>}
    <ShortUrlContainer item md={3} xs={12}>
      {shortUrl}
    </ShortUrlContainer>
    {/* <Grid item md={2} xs={12}> */}
      <UrlButton onClick={clickHandler} style={{backgroundColor: copied ? "#3A3054" : "#2bd0d0", width: "100%"}}>
      {copied ? "Copied!" : "Copy"}
      </UrlButton>
    {/* </Grid> */}
  </PrevUrlOuterContainer>)
};

export default PreviousUrl;
