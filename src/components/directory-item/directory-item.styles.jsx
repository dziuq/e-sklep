import styled from "styled-components";

export const DirectoryItemContainer = styled.div`
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1 / 1.05;
  height: auto;
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
    width: 155px;
    height: auto;
  }
`;

export const BackgroundImage = styled.img`
  width: 84px;
  height: 68px;
  object-fit: contain;
  margin-bottom: 1rem;
  padding-top: 5%
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 0.95rem;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-align: center;
  }
`;
