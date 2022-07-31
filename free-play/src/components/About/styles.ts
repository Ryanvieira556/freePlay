import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #171b1f;
`;

export const ContainerContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: auto;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  flex: 1;
`;

export const Image = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  flex: 1;
`;

export const ContainerTitle = styled.h1`
  color: #fff;
  font-size: 37px;
  font-weight: 900;
  max-width: 490px;
  margin-bottom: 0;
`;

export const ContainerDesc = styled.p`
  max-width: 500px;
  color: #8d8d8d;
`;

export const ContainerMore = styled.a`
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
  margin-top: 5px;
  font-size: 17px;
  background-color: #1991eb;
`;
