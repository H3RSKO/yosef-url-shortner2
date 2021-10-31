import { Grid } from "@material-ui/core";
import axios from "axios";
import { useState } from "react";
import "./UrlShortener.js"
import styled from 'styled-components';

const SearchContainer = styled(Grid)`
/* background-image: url('bg1.svg'); */
width: 80% ;
padding: 2.2em ;
align-self: center ;
background-color: #3A3054 ;
border-radius: 7px ;
align-items: center ;
z-index: 1 ;
width: fill-available;
/* display: flex ;
flex-direction: row; */
/* background: url(bg1.svg); */
/* background-size: auto auto; */

@media (max-width: 850px) {
     display: flex ;
     flex-direction: column ;
      width: 90% !important;
      padding: 1.3em ;
}
`;

const SearchBar = styled.input`
background-color: white;
border-radius: 6px;
font-weight: bold;
outline: none;
padding: 1.075em 1.3em;
width: fill-available;
height: 100%;
font-size: 20px;
font-weight: bold;
border: ${(props) => props.error ? "2px solid #F46363" : "none"};
  border-radius: 4px;

@media (max-width: 1260px) {
  margin-right: 1em
}

@media (max-width: 960px) {
  margin-right: 0
}
`

const ButtonContainer = styled(Grid)`
  display: flex;
  justify-content: center;

  @media (max-width: 960px) {
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
  white-space: nowrap;

  @media (max-width: 960px) {
      /* width: 100% !important; */
    width: fill-available;
  }

  &:hover {
    cursor: pointer;
    background-color: #9ae3e3 !important;
  }
`;

const BackgroundContainer = styled.div`
  display: flex;
  width: 100%;
`;

const UrlShortener = ({previousUrls, setPreviousUrls}) => {
  const [currentUrl, setCurrentUrl] = useState("");
  const [error, setError] = useState(false);

  // const [previousUrls, setPreviousUrls] = useState([]);

  const clickHandler = async () => {
    console.log("clicked");
    if (currentUrl.length === 0) {
      setError(true);
      return;
    }
    try {
      // get shortened url
      const {data} = await axios.get(`https://api.shrtco.de/v2/shorten?url=${currentUrl}`)
      // add shortened url to previous urls
      setPreviousUrls([...previousUrls, {url: currentUrl.includes('http') ? currentUrl : `https://${currentUrl}`, shortUrl: data.result.short_link2}])
      setError(false);
    } catch (error) {
        setError(true);
    }
  }

  return (
    <SearchContainer
      container
      spacing={2}
      direction="row"
    >
      {/* <div style={{position: "absolute", zIndex: "-1"}}> */}
      <Grid item xs={12} md={10} style={{width: "100%", height: "100%", display: "flex"}}>
        <SearchBar type="url" placeholder="Shorten a link here..."  onChange={(e) => setCurrentUrl(e.target.value)} value={currentUrl} error={error}/>
      </Grid>
        {error && <div style={{color: "#F46363", fontSize: "12px", display: "flex", alignSelf: "flexStart", width: "100%", }}>&nbsp; &nbsp; Please add a link</div>}
      <ButtonContainer item xs={12} md={2} >
        <UrlButton onClick={clickHandler} >
        Shorten It!
        </UrlButton>
      </ButtonContainer>
      {/* </div> */}
      <BackgroundContainer >
        {/* {bgBoostDesktop} */}
      </BackgroundContainer>
    </SearchContainer>
  );
};

export default UrlShortener;
