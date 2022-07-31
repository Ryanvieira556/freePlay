import styled from "styled-components";
import slide3 from "../../Img/slide1.png";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  background-position: center;
  height: 100vh;
  background-size: cover;
  @media (max-width: 1200px) {
    padding: 20px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

export const ContainerBannerSpanPC = styled.span`
  color: #fff;
  display: flex;
  background-color: #636a6d;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 20px;
  height: 10px;
  padding: 15px 28px;
  background-color: #666c6f;
  margin-top: 100px;
`;

export const ContainerBannerTitle = styled.h1`
  color: #fff;
  font-size: 50px;
  font-weight: 900;
  max-width: 520px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const ContainerBannerDesc = styled.p`
  color: #8d8d8d;
  max-width: 480px;
  margin-top: 0;
`;

export const ContainerBannerArrows = styled.div`
  display: flex;
`;

export const ContainerBannerArrowsLeft = styled.div`
  width: 45px;
  height: 45px;
  background-color: #666c6f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  margin-right: 10px;
  cursor: pointer;
`;

export const ContainerBannerArrowsRight = styled.div`
  width: 45px;
  height: 45px;
  background-color: #666c6f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
`;
