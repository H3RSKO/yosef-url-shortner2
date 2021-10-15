import { Grid, TextField } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";
import StandardButton from "./components/StandardButton";
import "./UrlShortener.js"
import styled from 'styled-components';


const SearchContainer = styled(Grid)`
/* background-image: ./sb-background-desktop.svg; */
width: 80% ;
background-color: #4b3f6b ;
padding: 2.2em ;
border-radius: 7px ;
align-items: center ;
z-index: 1 ;
align-self: center ;
/* display: flex ;
flex-direction: row; */

@media (max-width: 800px) {
     display: flex ;
     flex-direction: column ;
      width: 90% !important;
      padding: 1.3em ;

}
`;

const SearchBar = styled(TextField)`
background-color: white !important;
border-radius: 6px !important;
 width: 100% !important;
 font-weight: 700 !important;
`

const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
      width: 100% !important;
  }
`;

const UrlButton = styled.div`
  background-color: #2bd0d0 !important;
  color: white !important;
  border-radius: 6px !important;
  text-transform: none !important;
  padding: 0.9em 1.3em!important;
  width: fit-content;
  font-size: 20px;
  font-weight: bold;

  @media (max-width: 800px) {
      width: 100% !important;
  }

  &:hover {
    background-color: #9ae3e3 !important;
  }
`;


const UrlShortener = ({previousUrls, setPreviousUrls}) => {
  const [currentUrl, setCurrentUrl] = useState("");
  // const [previousUrls, setPreviousUrls] = useState([]);

  const clickHandler = async () => {
    console.log("clicked");
    // get shortened url
    const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${currentUrl}`)
    // add shortened url to previous urls
    setPreviousUrls([...previousUrls, {url: currentUrl.includes('http') ? currentUrl : `https://${currentUrl}`, shortUrl: data.result.short_link2}])
  }

  return (
    <SearchContainer
      container
      spacing={2}
      direction="row"
    >
      <Grid item xs={12} md={10} style={{width: "100%", height: "100%", display: "flex"}}>
        <SearchBar variant="filled" placeholder="Shorten a link here..." InputProps={{style: {fontSize: "20px"}}} // font size of input text
  InputLabelProps={{style: {fontSize: "20px", display:"flex", alignSelf: "center"}}} onChange={(e) => setCurrentUrl(e.target.value)} value={currentUrl}>
        </SearchBar> 
      </Grid>
      <ButtonContainer item xs={12} md={2} >
        <UrlButton onClick={clickHandler} >
        Shorten It!
        </UrlButton>
      </ButtonContainer>
    </SearchContainer>
  );
};

export default UrlShortener;
