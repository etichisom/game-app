import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useGames from "../hooks/useGame";
import { Game, GameModel } from "../model/gameModel";
import apiClient from "../services/api-client";
import GameCard from "./GameCard";
import GameCardSkeleTon from "./GameCardSkelton";

const GameGrid = () => {
  const { game, error, loading } = useGames();
  const load = [1, 2, 3, 3, 3];
  return (
    <>
      {error.length > 0 && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="300px" spacing="40px" padding={"20px"}>
        {loading && <Spinner size={"lg"} />}
        {game.map((e, index) => (
          <GameCard game={e} key={index} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
