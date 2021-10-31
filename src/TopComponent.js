import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";
import StandardButton from "./components/StandardButton";
import worker from "./media/illustration-worker.svg";

const TopComponent = () => {
  const TopWrapper = styled(Grid)`
    padding: 0 3em;

    @media (max-width: 1150px) {
      padding: 0;
      margin: 0 -4em;
    }

    @media (max-width: 600px) {
      padding: 0;
    }
  `;

  const WorkerWrapper = styled(Grid)`
    overflow: visible;

    @media (max-width: 900px) {
      overflow: hidden;
    }
    @media (max-width: 600px) {
      width: 100vw;
      padding-left: 1em;
    }
  `;

  const TextWrapper = styled(Grid)`
    padding: 10em 2em;

    @media (max-width: 600px) {
      padding: 2em;
    }
  `;

  const TopText = styled(Typography)`
    font-weight: 700 !important;
    font-size: 5em !important;
    line-height: 90px !important;
    letter-spacing: -2px !important;

    @media (max-width: 1250px) {
      font-size: 3.3em !important;
      line-height: 60px !important;
      letter-spacing: 0 !important;
    }

    @media (max-width: 1000px) {
      font-weight: 700 !important;
      font-size: 42px !important;
      line-height: 48px !important;
      letter-spacing: -1.05 px !important;
      text-align: center !important;
    }
  `;

  const SubText = styled(Typography)`
    font-size: 22px !important;
    letter-spacing: 0.15000000596046448px !important;
    line-height: 36px !important;
    font-weight: 500 !important;
    color: rgba(157.97, 154.06, 168.23, 1) !important;
    margin: 1em 0 2.5em 0 !important;

    @media (max-width: 1000px) {
      font-size: 18px !important;
      margin: 2em 0 !important;
      text-align: center !important;
    }
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flexStart;
    margin-top: 2em;

    @media (max-width: 1000px) {
      justify-content: center;
    }
  `;

  return (
    <TopWrapper
      container
      justify="center"
      alignItems="center"
      direction="row-reverse"
    >
      <WorkerWrapper item xs={12} sm={6}>
        <img src={worker} alt="wprker" style={{ minHeight: "280px" }} />
      </WorkerWrapper>
      <TextWrapper item sm={6} xs={12}>
        <TopText align="left">More than just shorter links</TopText>
        <SubText align="left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </SubText>
        <ButtonWrapper>
          <StandardButton text="Get Started" />
        </ButtonWrapper>
      </TextWrapper>
    </TopWrapper>
  );
};

export default TopComponent;
