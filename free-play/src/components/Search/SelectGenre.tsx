import * as C from "./stylesSelectGenre";
import { useEffect, useState } from "react";
import IconDrop from "../../assets/Img/iconDrop.png";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/reducers/userReducer";

export const SelectGenre = () => {
  const dispatch = useDispatch();

  const [showGenre, setShowGenre] = useState(false);
  const [menuGenre, setMenuGenre] = useState("Todos");
  useEffect(()=> {

    let selectGenrelowercase = menuGenre.toLowerCase();
 
    dispatch(setCategory(selectGenrelowercase));
  }, [menuGenre, dispatch])

  const handleShowGenre = () => {
    setShowGenre(!showGenre);
  };
  return (
    <C.Container>
      <C.ContainerSelectFilterGenre>
        <C.ContainerContentSelectFilterGenre>
          <C.ContainerClick onClick={handleShowGenre}>
            <C.ContainerSelectSpanTitle>Gênero:</C.ContainerSelectSpanTitle>
            <C.ContainerSelectSpanAll>{menuGenre}</C.ContainerSelectSpanAll>
            <img src={IconDrop} alt="" />
          </C.ContainerClick>
          {showGenre && (
            <nav>
              <C.UlGenre>
                <C.Li onClick={(e) => setMenuGenre('Todos')}>Todos</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Mmorpg")}>Mmorpg</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Shooter")}>Shooter</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Strategy")}>Strategy</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Racing")}>Racing</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Sports")}>Sports</C.Li>
                <C.Li onClick={(e) => setMenuGenre("Survival")}>Survival</C.Li>
              </C.UlGenre>
            </nav>
          )}
        </C.ContainerContentSelectFilterGenre>
      </C.ContainerSelectFilterGenre>
    </C.Container>
  );
};
