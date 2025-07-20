import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: white;
  border: 1px solid black;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 470px;
  padding: 10px;

  svg {
    width: 100%;
    height: auto;
    max-width: 240px;
    max-height: 50px;

    @media (max-width: 768px) {
      width: 80%;
      height: auto;
      padding: 6px;
    }
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
