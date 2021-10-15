import { Grid } from "@material-ui/core";
import PreviousUrl from "./PreviousUrl";
import styled from 'styled-components';

const BottomContainer = styled(Grid)`
  min-height: 20em;
  background-color: #eff1f7;
  margin-top: -4em;
  position: relative;
  /* width: 100vw; */
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: -5em;
    justify-content: start;

  }
`;

const PrevUrlsContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin-top: 6em !important;

  }
`;

const BottomComponent = ({previousUrls}) => {
 return (
  <BottomContainer container  direction="column">
    <PrevUrlsContainer container spacing={3} >
          {previousUrls.map((currentUrl, index) => (
            <Grid item xs={10} sm={8} key={index} style={{justifyContent: "center"}}>
              <PreviousUrl url={currentUrl.url} shortUrl={currentUrl.shortUrl}/>
            </Grid>
          ))}
        </PrevUrlsContainer>
    <Grid item xs={12} >
    </Grid>
  </BottomContainer>
 )
}

export default BottomComponent;
