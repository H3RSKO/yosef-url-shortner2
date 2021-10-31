import { Grid } from "@material-ui/core";
import PreviousUrl from "./PreviousUrl";
import styled from "styled-components";
import { SellingPoint } from "./components/SellingPoint";
import {
  brandRecognition,
  detailedRecords,
  fullyCustomizable,
} from "./media/sellingPointIcons";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StandardButton from "./components/StandardButton";
import { bgBoostDesktop, bgBoostMobile } from "./media/backgroundSvgs";
import logo from "./media/logow.svg";
import { Facebook, Pintrest, Instagram, Twitter } from "./media/mediaLogos";

const BottomContainer = styled(Grid)`
  min-height: 20em;
  background-color: #eff1f7;
  margin-top: -4em;
  padding-top: 6em;
  position: relative;
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

const PrevUrlsInnerContainer = styled(Grid)`
  justify-content: center;
  width: 80%;
  padding: 2.2em;
  align-self: center;

  @media (max-width: 600px) {
    padding: 0;
    width: 70%;
  }
`;

const HeaderText = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 48px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const SubText = styled.div`
  color: #9e9aa8;
  font-size: 18px;
  line-height: 32px;
  max-width: 35vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 750px) {
    max-width: 80vw;
    padding: 1em;
  }

  @media (max-width: 600px) {
    max-width: 100vw;
    font-size: 16px;
    padding: 1em;
  }
`;

const SellingPointsContainer = styled(Grid)`
  justify-content: center;
  padding: 5em 7em;
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    padding: 5em 0em;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;

const SellingPointsInnerContainer = styled(Grid)`
  z-index: 2;
`;

const BottomBar = styled.hr`
  border-top: 8px solid #2bd0d0;
  width: 60%;
  z-index: 1;
  justify-self: center;
  align-self: center;
  position: absolute;
  margin-left: 10em;
  margin-top: -2em;

  @media (max-width: 1100px) {
    transform: rotate(90deg);
    margin-left: -1px;
    width: 100vh;
  }

  @media (max-width: 950px) {
    width: 110vh;
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

const SubFooter = styled(Grid)`
  background-color: #232127;
  padding: 3.3em 4em;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SubLinkOuterContainer = styled(Grid)`
  justify-content: flex-end;
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const SubLinkContainer = styled.div`
  padding: 0 3em;

  @media (max-width: 1350px) {
    padding: 0 2em;
    margin-bottom: 1em;
  }

  @media (max-width: 1050px) {
    padding: 0 1em;
  }
`;

const Sublinks = styled.p`
  color: #bfbfbf;
  :hover {
    color: #2bd0d0;
    cursor: pointer;
  }
`;

const LogoContainer = styled(Grid)`
  align-items: flex-start;
  display: flex;
  justify-content: space-around;
  padding: 0 2em;

  @media (max-width: 1050px) {
    padding: 2em 1em 0 1em;
    width: 100%;
  }

  svg:hover {
    cursor: pointer;
    fill: #2bd0d0;
  }
`;

const Logo = styled.div`
  fill: #fff;

  svg:hover {
    fill: #2bd0d0;
  }
`;

const sellingPoints = [
  {
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    icon: brandRecognition,
  },
  {
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: detailedRecords,
  },
  {
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: fullyCustomizable,
  },
];

const companyLinks = [
  {
    title: "Features",
    subLinks: ["Link Shortening", "Branded Links", "Analytics"],
  },
  { title: "Resources", subLinks: ["Blog", "Developers", "Support"] },
  { title: "Company", subLinks: ["About", "Our Team", "Careers", "Contact"] },
];

const mediaLogos = [Facebook, Twitter, Pintrest, Instagram];

const BottomComponent = ({ previousUrls }) => {
  const isDesktop = useMediaQuery("(min-width:1100px)");
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <BottomContainer container direction="column">
      <PrevUrlsContainer container spacing={3}>
        {previousUrls.map((currentUrl, index) => (
          <PrevUrlsInnerContainer
            item
            xs={11}
            //  md={11}
            key={index}
          >
            <PreviousUrl url={currentUrl.url} shortUrl={currentUrl.shortUrl} />
          </PrevUrlsInnerContainer>
        ))}
      </PrevUrlsContainer>
      {/* <Grid container> */}
      <Grid item xs={12} style={{ marginBottom: "3em" }}>
        <Grid
          item
          xs={12}
          style={{ justifyContent: "center", marginTop: "10em" }}
        >
          <HeaderText>Advanced Statistics</HeaderText>
          <SubText>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </SubText>
        </Grid>
        <SellingPointsContainer item xs={12}>
          {sellingPoints.map((point, index) => (
            <SellingPointsInnerContainer item xs={12} key={index}>
              <SellingPoint
                title={point.title}
                text={point.text}
                icon={point.icon}
                index={index}
                marginTop={isDesktop ? `${index * 3}em` : "5em"}
              />
            </SellingPointsInnerContainer>
          ))}
          <BottomBar />
        </SellingPointsContainer>
      </Grid>
      <Footer item xs={12} style={{}}>
        <FooterTextContainer>
          <FooterHeaderText>Boost your links today</FooterHeaderText>
          <StandardButton
            text="Get Started"
            style={{ fontSize: "20px", fontWeight: "bold !important" }}
          />
        </FooterTextContainer>
        <div style={{ display: "flex", width: "100%", height: "16em" }}>
          {isMobile ? bgBoostDesktop : bgBoostMobile}
        </div>
      </Footer>
      <SubFooter item xs={12} style={{}}>
        <Grid item sm={3} xs={12} style={{ margin: "1em 0" }}>
          <img src={logo} style={{ fill: "#FFFFFF" }} alt="logo" />
        </Grid>
        <SubLinkOuterContainer item sm={6} xs={12} style={{}}>
          {companyLinks.map((link) => (
            <SubLinkContainer>
              <h4 style={{ color: "white" }}>{link.title}</h4>
              {link.subLinks.map((subLink) => (
                <Sublinks>{subLink}</Sublinks>
              ))}
            </SubLinkContainer>
          ))}
        </SubLinkOuterContainer>
        <LogoContainer item sm={3} xs={12} style={{}}>
          {mediaLogos.map((logo, index) => (
            <Logo>{logo}</Logo>
          ))}
        </LogoContainer>
      </SubFooter>
    </BottomContainer>
  );
};

export default BottomComponent;
