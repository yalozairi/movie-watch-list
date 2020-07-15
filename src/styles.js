import styled, { createGlobalStyle } from "styled-components";
import { GrAdd } from "react-icons/gr";

export const GlobalStyle = createGlobalStyle`
body {
  color: black;
  background-color: #EAF0F1;
}
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 900;
  margin-top: 10px;
  margin-bottom: 4vh;
`;

export const AddButtonIcon = styled(GrAdd)`
  margin-top: -4px;
  margin-bottom: auto;
  size: 3em;
  :hover {
    color: black;
  }
`;

export const AddButtonStyled = styled.button`
color: black;
background-color: #1faabf;

  :hover {
    color: black;
    background-color: #1d96a8;
  }
`;

export const Spanner = styled.span`
  background-color: #4834df;
  text-align: center;
  color: #fff;
  padding: 0px;
  :hover {
    background-color: #30336b;
    cursor: pointer;
  }
`;

export const DeleteSpanner = styled.span`
  background-color: red;
  text-align: center;
  color: #fff;
  padding: 0px;
  :hover {
    background-color: #B83227;
    cursor: pointer;
  }
`;

export const WatchButtonStyled = styled.div`
  text-align: center;
  padding: 2px 5px;
  margin-bottom: -7px;
  :hover {
    cursor: pointer;
  }
`;

export const DeleteButtonStyled = styled.div`
  text-align: center;
  padding: 2px 5px;
  margin-bottom: -6px;
  :hover {
    cursor: pointer;
  }
`;

export const ListTitle = styled.h4`
  font-weight: bold;
`;

export const ListItem = styled.li`
  padding: 9px;
`;

export const AddButtonWrapper = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const AnasIsDumb = styled.input`
margin-bottom: 5px;
padding-left: 3px;
width: 99.99%;
border-radius: 8px;
border: 1.5px solid black;
height: 45px;

`;

export const WarningMessage = styled.h4`
margin-top: 10px;

`;