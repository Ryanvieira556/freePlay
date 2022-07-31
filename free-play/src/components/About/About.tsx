import * as C from "./styles";
import AboutImg from "../../assets/Img/aboutImage.png";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <C.Container>
      <C.ContainerContent>
        <C.ContainerImg>
          <C.Image src={AboutImg} />
        </C.ContainerImg>
        <C.ContainerInfo>
          <C.ContainerTitle>
            O melhor lugar para encontrar jogos{" "}
            <span style={{ color: "#1991eb" }}>gratuitos</span>!
          </C.ContainerTitle>
          <C.ContainerDesc>
            FreePlay é uma coleção de jogos gratuitos para que você não perca
            tempo escolhendo o que vai jogar. Esta coleção foi feita
            especialmente para você, assim você pode se divertir sem pagar um
            único centavo!
          </C.ContainerDesc>
       <Link to="/games">  <C.ContainerMore>Explorar Jogos</C.ContainerMore></Link> 
        </C.ContainerInfo>
      </C.ContainerContent>
    </C.Container>
  );
};
