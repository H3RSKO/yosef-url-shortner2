import { Grid } from "@material-ui/core";
import PreviousUrl from "./PreviousUrl";
import styled from 'styled-components';
import { SellingPoint } from "./components/SellingPoint";
import {brandRecognition, detailedRecords, fullyCustomizable} from "./sellingPointIcons"

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

const sellingPoints = [
  {title: "Brand Recognition", text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.", icon: brandRecognition},
  {title: "Detailed Records", text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.", icon: detailedRecords},
  {title: "Fully Customizable", text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.", icon: fullyCustomizable},
]

const BottomComponent = ({previousUrls}) => {
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
         <div
           style={{ fontSize: "40px", fontWeight: "bold", lineHeight: "48px" }}
         >
           Advanced Statistics
         </div>
         <div
           style={{
             color: "#9E9AA8",
             fontSize: "18px",
             lineHeight: "32px",
             maxWidth: "35vw",
             marginLeft: "auto",
             marginRight: "auto",
           }}
         >
           Track how your links are performing across the web with our advanced
           statistics dashboard.
         </div>
       </Grid>
       <Grid
         item
         xs={12}
         style={{
           justifyContent: "center",
           padding: "5em 7em",
           display: "flex",
         }}
       >
         {sellingPoints.map((point, index) => (
           <Grid item xs={12} sm={6} key={index} style={{zIndex: "2"}}>
             <SellingPoint
               title={point.title}
               text={point.text}
               icon={point.icon}
               marginTop={`${index * 3}em`}
             />
           </Grid>
         ))}
         <hr
           style={{ borderTop: "8px solid #2BD0D0", borderRadius: "5px", width: "70%", zIndex: "1", justifySelf: "center", alignSelf: "center", position: "absolute", marginLeft: "10em", marginTop: "2em"}}
         ></hr>
       </Grid>
     </Grid>
     {/* </Grid> */}
   </BottomContainer>
 );
}

export default BottomComponent;
