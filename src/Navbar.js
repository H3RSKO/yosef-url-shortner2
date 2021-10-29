import { Grid} from '@material-ui/core'
import {AppBar, Toolbar } from '@material-ui/core'
import StandardButton from './components/StandardButton'
import logo from "./logo.svg"
import "./Navbar.css"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styled from 'styled-components'

const Navbar = () => {

  const isDesktop = useMediaQuery('(min-width:750px)');
  const links = ["Features", "Pricing", "Resources"]

const NavbarRightContainer = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

return (
  <AppBar position="static" style={{backgroundColor: "white", boxShadow: "5px 5px white", marginTop: "1.5em"}}>
  <Toolbar style={{backgroundColor: "white"}}>
  <Grid container direction="row">
    <Grid item xs={6} sm={8} lg={6} style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <Grid item xs={6} sm={4}>
        <img src={logo} style={{fill: "#34313D"}} alt="logo"/>
      </Grid>
      {isDesktop ?
      <Grid item xs={6}  style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
      {links.map(link => (
          <div className="links" key={link}>
            {link}
          </div>
        ))}
      </Grid> : <div> </div> }
    </Grid>
      {isDesktop ?
    <NavbarRightContainer item xs={6} sm={4} lg={6} style={{}}>
        <Grid item xs={3} className="links" >
          Login
        </Grid>
        <Grid item xs={3}>
          {/* <Button variant="contained" color="primary">
            Sign Up
          </Button> */}
        <StandardButton text="Sign Up" />
        </Grid>
    </NavbarRightContainer> : <Grid item xs={6} sm={4} justifyContent="flex-end" style={{display: "flex"}}><svg width="2.5em" height="2.5em" viewBox="0 0 512 512"><path fill="grey" d="M80 96h352v32H80z"></path><path fill="grey" d="M80 240h352v32H80z"></path><path fill="grey" d="M80 384h352v32H80z"></path></svg></Grid>}
    }
  </Grid>}
  </Toolbar>
  </AppBar>

)

}

export default Navbar
