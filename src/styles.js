import styled, { createGlobalStyle } from "styled-components";
import { GrAdd } from "react-icons/gr";

export const GlobalStyle = createGlobalStyle`
body {
  color: black;
  background-color: #f5f5f5;
}
`;

export const Title = styled.h1`
text-align: center;
font-weight: 900;
margin-top: 10px;

`;

export const AddButtonStyle = styled(GrAdd)`
margin-top: auto;
margin-bottom: auto;
size: 3em;
color: green;
`
;