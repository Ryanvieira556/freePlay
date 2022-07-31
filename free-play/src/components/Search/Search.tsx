import * as C from "./styles";
import IconDrop from "../../assets/Img/iconDrop.png";
import React, { useEffect, useState } from "react";
import { GameRender } from "../Game/GamesRender";
import { SelectGenre } from "./SelectGenre";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
export const Search = () => {
  const [show, setShow] = useState(false);

  const [value, setValue] = useState("");
  const [menuPlataform, setMenuPlataform] = useState("Todos");
  const [menuPlataformProps, setMenuPlataformProps] = useState("");
  const data = useSelector((state: RootState) => state.user);
 
  const dataResult = data.category;


  useEffect(() => {
    switch (menuPlataform) {
      case "Todos":
        setMenuPlataformProps("");
        break;
      case "Windows":
        setMenuPlataformProps("pc");
        break;
      case "Navegador":
        setMenuPlataformProps("browser");
        break;
    }
  }, [menuPlataform, dataResult]);

  const handleShow = () => {
    setShow(!show);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <C.Container>
      <C.ContainerContent>
        <C.ContainerBarSearch>
          <C.ContainerInput
            placeholder="Pesquise Jogos"
            onChange={handleInput}
          />
        </C.ContainerBarSearch>
        <C.ContainerSelectFilter>
          <C.ContainerClick onClick={handleShow}>
            <C.ContainerSelectSpanTitle>Plataforma:</C.ContainerSelectSpanTitle>
            <C.ContainerSelectSpanAll>{menuPlataform}</C.ContainerSelectSpanAll>
            <img src={IconDrop} alt="" />
          </C.ContainerClick>
          <C.ContainerContentSelectFilter>
            {show && (
              <nav>
                <C.Ul>
                  <C.Li onClick={(e) => setMenuPlataform("Todos")}>Todos</C.Li>
                  <C.Li onClick={(e) => setMenuPlataform("Windows")}>
                    Windows
                  </C.Li>
                  <C.Li onClick={(e) => setMenuPlataform("Navegador")}>
                    Navegador
                  </C.Li>
                </C.Ul>
              </nav>
            )}
          </C.ContainerContentSelectFilter>
        </C.ContainerSelectFilter>
        <SelectGenre />
      </C.ContainerContent>

      <GameRender
        value={value}
        platform={menuPlataformProps}
        genre={dataResult}
      />
    </C.Container>
  );
};
