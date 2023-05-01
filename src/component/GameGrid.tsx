import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useGames from "../hooks/useGame";
import { Game, GameModel } from "../model/gameModel";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import GameCardSkeleTon from "./GameCardSkelton";
import PlatFormSelector from "./PlatFormSelector";
interface Props{
  genres:string,
  platformId:string
}
const GameGrid = (props:Props) => {
  const { data, error, loading } = useGames(props.genres,props.platformId);
  const load = [1, 2, 3, 3, 3,4];
  return (
    <>
   {error.length > 0 && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="300px" spacing="40px" padding={"20px"}>
        {loading && load.map((e,index)=>(
          <GameCardSkeleTon key={index}/>
        ))}
        {loading ==false&&data.map((e, index) => (
          <GameCard game={e} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
