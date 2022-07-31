import styled from "styled-components";

export const Container = styled.div`
  background-color: #252b33;
  font-family: "Poppins", sans-serif;
`;

export const ContainerContent = styled.div`
  padding: 30px 0px 20px 0px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #252b33;
  display: flex;
  @media(max-width:700px){
flex-direction:column;
align-items: center;
}

`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  flex: 1;
`;

export const ContainerAdress = styled.div`
  display: flex;
  align-items: center;
  margin-top: 39px;
  margin-bottom: 30px;
  flex: 1;
  @media(max-width:500px){
flex-direction:column;
align-items: center;
}
`;

export const ContainerAdressSpan = styled.span`
  color: #fff;
  font-weight: bolder;
  font-size: 16px;
  
`;

export const Nav = styled.div`
  margin-right: 60px;

`;

export const Ul = styled.div`
 padding-bottom: 20px;`;

export const Li = styled.div`
  color: #8d8d8d;
  margin-top: 10px;
`;
export const ContainerCredits = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCreditsLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const ContainerCreditsSpan = styled.span`
  font-size: 13px;
  font-weight: normal;
  color: #897a7a;
`;
export const ContainerCreditsMore = styled.a`
  color: #ffff;
  font-weight: lighter;
  font-size: 13px;
  text-decoration: none;
`;
