import styled from "styled-components";

export const Container = styled.div`
  font-family: "Poppins", sans-serif;
`;

export const Header = styled.header`
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  width: 100%;
`;

export const HeaderLogo = styled.div``;
export const HeaderMenu = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  padding-top: 40px;
  justify-content: space-between;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export const Li = styled.li`
  color: #fff;
  margin-left: 60px;
  font-weight: 600;
  border-bottom: 3px solid transparent;
  transition: all 0.3s;
  cursor: pointer;
  :hover {
    border-bottom: 3px solid #1991eb;
  }
`;
export const UlMobile = styled.ul`
  list-style: none;
`;

export const LiMobile = styled.li`
  color: #fff;
  margin-top: 20px;
  font-size: 17px;
  cursor: pointer;
`;

export const ContainerMenuMobile = styled.div``;
export const IconMobile = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  }
`;
