import styled from "styled-components";

export const Container = styled.div`
  background-color: #171b1f;
  font-family: "Poppins", sans-serif;
  padding: 100px;
`;

export const ContainerContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContainerGrid = styled.div``;

export const ContainerCard = styled.div``;

export const ContainerCardImg = styled.div``;
export const ContainerImg = styled.img`
  width: 100%;
`;

export const ContainerCardTitle = styled.span`
  color: #fff;
  font-size: 17.6px;
  font-weight: 700;
`;

export const ContainerCardDesc = styled.p`
  color: #8d8d8d;
  margin-top: 17px;
`;

export const ContainerCardGenre = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerCardGenreSpan = styled.span`
  color: #fff;
  background-color: #252b33;
  padding: 7px;
  border-radius: 8px;
`;

export const ContainerCardGenreImg = styled.img``;

export const ContainerLink = styled.a`
  text-decoration: none;
`;
