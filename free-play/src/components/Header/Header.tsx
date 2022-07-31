import * as C from "./styles";
import Logo from "../../assets/Img/logo.svg";
import IconMenuMobile from "../../assets/Img/menuIcon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderContent>
          <C.HeaderLogo>
            <img src={Logo} alt="" />
          </C.HeaderLogo>

          <C.IconMobile onClick={handleShow}>
            <img src={IconMenuMobile} alt="" width={50} />
          </C.IconMobile>

          <C.HeaderMenu>
            <C.Nav>
              <C.Ul>
              <Link to='/' > <C.Li>Home</C.Li></Link>
              <Link to='/games'>  <C.Li>Jogos</C.Li></Link>
                <C.Li>Contatos</C.Li>
                <C.Li>Sobre</C.Li>
              </C.Ul>
            </C.Nav>
          </C.HeaderMenu>
        </C.HeaderContent>
      </C.Header>
      {show && (
        <C.ContainerMenuMobile>
          <C.UlMobile>
        <Link to='/' >  <C.LiMobile>Home</C.LiMobile></Link>
            <C.LiMobile>Sobre</C.LiMobile>
           <Link to='/games'><C.LiMobile>Jogos</C.LiMobile></Link> 
            <C.LiMobile>Contatos</C.LiMobile>
          </C.UlMobile>
        </C.ContainerMenuMobile>
      )}
    </C.Container>
  );
};
