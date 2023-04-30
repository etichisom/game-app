import { AxiosError, CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Game, GameModel } from "../model/gameModel";
import apiClient from "../services/api-client";

const useGames=()=>{
    const [game, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const controller = new AbortController()
  
    useEffect(() => {
      setLoading(true);
      apiClient
        .get<GameModel>("/games",{signal:controller.signal})
        .then((e) => {
          setGames(e.data.results);
          setLoading(false);
        })
        .catch((e: AxiosError) => {
            if(e instanceof CanceledError){
                return;
            }
            setLoading(false);
          setError(e.message);
        });
       // return controller.abort()
    }, []);

    return {game,error, loading}
}

export default useGames