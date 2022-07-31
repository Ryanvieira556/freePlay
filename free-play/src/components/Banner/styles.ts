import styled from "styled-components";
import BackgroundBanner from "../../assets/Img/banner.png";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  height: auto;
  background-size: cover;
  background-image: url(${BackgroundBanner});
  padding-bottom: 140px;
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  margin: auto;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media (max-width: 830px) {
    flex-direction: column;
    margin-top: 50px;
  }
`;
export const ContainerTitle = styled.div`
  width: 500px;
`;

export const ContainerH1 = styled.h1`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 37px;
  max-width: 100%;
`;
export const ContainerDesc = styled.p`
  color: #8d8d8d;
  font-size: 16px;
  margin-right: 50px;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
`;

export const Image = styled.img`
  max-width: 100%;
`;
