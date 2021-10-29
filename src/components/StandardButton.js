import styled from 'styled-components';
const {Button} = require('@material-ui/core');

const StyledButton = styled(Button)`
  /* background-color: #2bd0d0; */
  color: white !important;
  border-radius: 25px !important;
  padding: 0.6em 2.2em !important;
  text-transform: none !important;
  font-weight: bold !important;

  &:hover {
    cursor: pointer;
    background-color: #9ae3e3 !important;
  }
`;

const StandardButton = ({text, clickHandler, backgroundColor = "#2bd0d0"}) => (
  <StyledButton variant="contained" onClick={clickHandler} style={{backgroundColor: backgroundColor}}>
    {text}
  </StyledButton>
)

export default StandardButton;
