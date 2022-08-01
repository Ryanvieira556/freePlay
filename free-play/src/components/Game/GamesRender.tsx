import * as C from "./styles";
import IconWindows from "../../assets/Img/iconWindows.png";
import IconBrowser from "../../assets/Img/iconBrowser.png";
import { useEffect, useState } from "react";
import { dataGames, getGames } from "../../data/api"
import { TypeGame } from "../types/typeGame";
import { TypeGamesFilter } from "../types/TypesCarousel";

export const GameRender = ({ value, platform, genre }: TypeGamesFilter) => {
  const [state, setState] = useState<TypeGame[]>([]);
  const [stateResult, setStateResult] = useState<TypeGame[]>([]);
  const [data, setData] = useState<TypeGame[]>([]);

  useEffect(() => {
    getGames(platform, genre).then((result) => {
      setStateResult(result);
    });
    renderGame();
  }, [platform, genre, stateResult]);

  useEffect(() => {
    if (value.length < 1 && stateResult.length < 1) {
      setData(state);
      return;
    }
    if (value.length > 0 && stateResult.length > 0) {
      const filterData = stateResult.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      setData(filterData);
      return;
    }
    if (stateResult.length > 0) {
      setData(stateResult);
      return;
    }

    const filterData = state.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setData(filterData);
  }, [state, value, stateResult]);
  const renderGame = async () => {
    const json = await dataGames;
    return setState(json);
  };

  function WhatThisPlataform(platform: string) {
    if (platform === "PC (Windows)") {
      return IconWindows;
    } else {
      return IconBrowser;
    }
  }


  return (
    <C.Container>
      <C.ContainerContent>
        {data.map((item, index) => (
          <div key={index}>
            <C.ContainerLink
              href={item.game_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <C.ContainerCard>
                <C.ContainerCardImg>
                <C.ContainerImg src={item.thumbnail} />
                </C.ContainerCardImg>
                <C.ContainerCardTitle>{item.title}</C.ContainerCardTitle>
                <C.ContainerCardDesc>
                  {item.short_description.substring(0, 55) + "..."}
                </C.ContainerCardDesc>
                <C.ContainerCardGenre>
                  <C.ContainerCardGenreSpan>
                    {item.genre}
                  </C.ContainerCardGenreSpan>
                  <C.ContainerCardGenreImg
                    src={WhatThisPlataform(item.platform)}
                  />
                </C.ContainerCardGenre>
              </C.ContainerCard>
            </C.ContainerLink>
          </div>
        ))}
      </C.ContainerContent>
    </C.Container>
  );
};
