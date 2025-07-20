import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  width: 300px;
  height: 320px;
  margin: 1rem;
  border-radius: 16px;
  background-color: #1e1e1e;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(255, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 220px;
  }
`;

export const BackgroundImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  margin-bottom: 1rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
  }
`;
