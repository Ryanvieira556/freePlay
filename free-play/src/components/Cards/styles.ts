import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
  background-color: #171b1f;
`;

export const ContainerContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 90px;
  @media (max-width: 830px) {
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 100px;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  background-color: #252b33;
  border-radius: 10px;
  margin-bottom: 100px;
  @media (max-width: 830px) {
    width: 90%;

    margin-bottom: 0px;
    display: flex;
    margin: auto;
    justify-content: center;
  }
`;

export const CardIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  margin-right: 20px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CardTitle = styled.span`
  color: #fff;
  font-weight: 600;
  margin-top: 20px;
`;

export const CardSpan = styled.span`
  color: #8d8d8d;
  font-size: 15px;
  max-width: 220px;
`;
