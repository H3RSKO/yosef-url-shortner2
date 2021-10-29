import './App.css';
import {Grid} from '@material-ui/core'
import Navbar from './Navbar';
import TopComponent from './TopComponent';
import UrlShortener from './UrlShortener';
import { useState } from 'react';
import BottomComponent from './BottomComponent';
import styled from 'styled-components';

const AppWrapper = styled(Grid)`
    padding: 0 5em;
    width: 100vw;
    align-items: center;

    @media (max-width: 850px) {
      padding: 0;
  }
  `


function App() {
  const [previousUrls, setPreviousUrls] = useState([]);

  return (
    <div className="App">
      {/* <Container maxWidth="lg"> */}
        <AppWrapper container justifyContent="center" direction="column" >
          <Navbar/>
          <TopComponent />
          <UrlShortener setPreviousUrls={setPreviousUrls} previousUrls={previousUrls}/>
        </AppWrapper>
          <BottomComponent previousUrls={previousUrls}/>
      {/* </Container> */}
    </div>
  );
}

export default App;
