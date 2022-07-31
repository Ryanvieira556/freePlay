import * as C from "./styles";
import FooterLogo from "../../assets/Img/logo.svg";

export const Footer = () => {
  return (
    <C.Container>
      <C.ContainerContent>
        <C.ContainerLogo>
          <img src={FooterLogo} alt="" />
        </C.ContainerLogo>
        <C.ContainerAdress>
          <C.Nav>
            <C.ContainerAdressSpan>Contatos</C.ContainerAdressSpan>
            <C.Ul>
              <C.Li>História</C.Li>
              <C.Li>Sobre</C.Li>
              <C.Li>Notícias</C.Li>
            </C.Ul>
          </C.Nav>
          <C.Nav>
            <C.ContainerAdressSpan>Informações</C.ContainerAdressSpan>
            <C.Ul>
              <C.Li>Contato</C.Li>
              <C.Li>Termos e Condições</C.Li>
              <C.Li>Política de privacidade</C.Li>
            </C.Ul>
          </C.Nav>
          <C.Nav>
            <C.ContainerAdressSpan>Redes Sociais</C.ContainerAdressSpan>
            <C.Ul>
              <C.Li>Instagram</C.Li>
              <C.Li>Facebook</C.Li>
              <C.Li>Twitter</C.Li>
            </C.Ul>
          </C.Nav>
        </C.ContainerAdress>
      </C.ContainerContent>
      <C.ContainerCredits>
        <C.ContainerCreditsLinks>
          <C.ContainerCreditsSpan>
            Design desenvolvido por
            <C.ContainerCreditsMore href="https://davidaugusto.tech/">
              {" "}
              David Augusto
            </C.ContainerCreditsMore>
          </C.ContainerCreditsSpan>
          <C.ContainerCreditsSpan>
            Sistema desenvolvido por
            <C.ContainerCreditsMore href="www.linkedin.com/in/Ryan-Front">
              {" "}
              Ryan Vieira
            </C.ContainerCreditsMore>
          </C.ContainerCreditsSpan>
        </C.ContainerCreditsLinks>
      </C.ContainerCredits>
    </C.Container>
  );
};
