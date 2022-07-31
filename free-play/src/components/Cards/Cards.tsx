import * as C from "./styles";
import IconCrown from "../../assets/Img/cardCrown.png";
import IconControler from "../../assets/Img/cardControler.png";
import IconSword from "../../assets/Img/cardSword.png";
export const Cards = () => {
  return (
    <C.Container>
      <C.ContainerContent>
        <C.Card>
          <C.CardIcon>
            <img src={IconControler} alt="" />
          </C.CardIcon>
          <C.CardInfo>
            <C.CardTitle>JOGOS GRATUITOS</C.CardTitle>
            <C.CardSpan>
              Melhores jogos gratuitos para jogar com seus amigos
            </C.CardSpan>
          </C.CardInfo>
        </C.Card>
        <C.Card>
          <C.CardIcon>
            <img src={IconSword} alt="" />
          </C.CardIcon>
          <C.CardInfo>
            <C.CardTitle>DIVERSAS CATEGORIAS</C.CardTitle>
            <C.CardSpan>Reunimos diferentes categorias de jogos</C.CardSpan>
          </C.CardInfo>
        </C.Card>
        <C.Card>
          <C.CardIcon>
            <img src={IconCrown} alt="" />
          </C.CardIcon>
          <C.CardInfo>
            <C.CardTitle>POPULARES DO MOMENTO</C.CardTitle>
            <C.CardSpan>Encontre os jogos mais jogados do momento</C.CardSpan>
          </C.CardInfo>
        </C.Card>
      </C.ContainerContent>
    </C.Container>
  );
};
