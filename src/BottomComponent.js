import { Grid } from "@material-ui/core";
import PreviousUrl from "./PreviousUrl";
import styled from 'styled-components';
import { SellingPoint } from "./components/SellingPoint";
import {brandRecognition, detailedRecords, fullyCustomizable} from "./sellingPointIcons"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StandardButton from './components/StandardButton'
import { bgBoostDesktop, bgBoostMobile } from "./backgroundSvgs";


const BottomContainer = styled(Grid)`
  min-height: 20em;
  background-color: #eff1f7;
  margin-top: -4em;
  padding-top: 6em;
  position: relative;
  /* width: 100vw; */
  justify-content: center;

  @media (max-width: 600px) {
    margin-top: -5em;
    justify-content: start;
    padding-top: 0;
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

const HeaderText = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;

  @media (max-width: 600px) {
    font-size: 28px;
    /* padding-bottom: 1em; */
  }
`;

const SubText = styled.div`
  color: #9e9aa8;
  font-size: 18px;
  line-height: 32px;
  max-width: 35vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 600px) {
    max-width: 100vw;
    font-size: 16px;
    padding: 1em
  }
`;

const SellingPointsContainer = styled(Grid)`
  justify-content: center;
  padding: 5em 7em;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`

const SellingPointsInnerContainer = styled(Grid)`
  z-index: 2;

  @media (max-width: 600px){
  }
`;

const BottomBar = styled.hr`
  border-top: 8px solid #2BD0D0;
  width: 60%;
  z-index: 1;
  justify-self: center;
  align-self: center;
  position: absolute;
  margin-left: 10em;
  margin-top: -2em;

  @media (max-width: 1100px) {
    transform: rotate(90deg);
    margin-left: 0;
    width: 100vh;

  }
`;

const Footer = styled(Grid)`
  justify-content: center;
  margin-top: 5em;
  background-color: #3a3054;
  height: 16em;
`;

const FooterTextContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 2em;

  @media (max-width: 600px) {
    margin-top: 4em;
  }
`;

const FooterHeaderText = styled.h1`
  color: white;
  font-size: 40px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const sellingPoints = [
  {title: "Brand Recognition", text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.", icon: brandRecognition},
  {title: "Detailed Records", text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", icon: detailedRecords},
  {title: "Fully Customizable", text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.", icon: fullyCustomizable},
]

const BottomComponent = ({previousUrls}) => {
  const isDesktop = useMediaQuery('(min-width:1100px)');
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
   <BottomContainer container direction="column">
     <PrevUrlsContainer container spacing={3}>
       {previousUrls.map((currentUrl, index) => (
         <Grid
           item
           xs={10}
           sm={8}
           key={index}
           style={{ justifyContent: "center" }}
         >
           <PreviousUrl url={currentUrl.url} shortUrl={currentUrl.shortUrl} />
         </Grid>
       ))}
     </PrevUrlsContainer>
     {/* <Grid container> */}
     <Grid item xs={12}>
       <Grid item xs={12} style={{ justifyContent: "center", marginTop: "10em" }}>
         <HeaderText>
           Advanced Statistics
         </HeaderText>
         <SubText>
           Track how your links are performing across the web with our advanced
           statistics dashboard.
         </SubText>
       </Grid>
       <SellingPointsContainer
         item
         xs={12}
       >
         {sellingPoints.map((point, index) => (
           <SellingPointsInnerContainer item xs={12} key={index} >
             <SellingPoint
               title={point.title}
               text={point.text}
               icon={point.icon}
               index={index}
               marginTop={isDesktop ? `${index * 3}em` : "5em"}
             />
           </SellingPointsInnerContainer>
         ))}
         <BottomBar/>
       </SellingPointsContainer>
     </Grid>
     {/* </Grid> */}
     <Footer item xs={12} style={{ }}>
          <FooterTextContainer style={{}}>
          <FooterHeaderText style={{}}>Boost your links today</FooterHeaderText>
          <StandardButton text="Get Started" style={{fontSize: "20px", fontWeight: "bold !important"}}/>
          </FooterTextContainer>
          <div style={{ display: "flex", width: "100%", height: "16em"}}>
          {isMobile ? bgBoostDesktop : bgBoostMobile}
          {/* {isMobile ? <bgBoostMobile style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}/> : <bgBoostDesktop style={{position: 'absolute', left: 0, top: 0, width: '100%', height: '100%'}}/>} */}
          </div>
     </Footer>
   </BottomContainer>
 );
}

export default BottomComponent;
