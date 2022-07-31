import styled from "styled-components";

export const Container = styled.div`
  background-color: #171b1f;
`;
export const ContainerContent = styled.div`
  max-width: 1200px;
  margin: auto;
  padding-top: 90px;
  padding-bottom: 100px;
`;
export const ContainerImg = styled.div``;
export const CommunityImg = styled.img`
  max-width: 90%;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const CommunityImgMobile = styled.img`
  max-width: 90%;
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
