import styled from "styled-components";

import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from "../button/button.styles.jsx";

export const CartDropdownContainter = styled.div`
  position: absolute;
  width: 340px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  
  z-index: 5;

  ${BaseButton}
  ${InvertedButton}
  ${GoogleSignInButton} {
    margin-top: auto;
    padding-left: 115px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
