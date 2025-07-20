import styled from "styled-components";

export const BaseButton = styled.button`
  width: 100%;
  max-width: 200px;
  height: 50px;
  padding: 0 20px;
  font-size: 12px;
  letter-spacing: 0.5px;
  line-height: 1.2;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 0 10px;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
