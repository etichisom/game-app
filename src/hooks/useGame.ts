import { Game} from "../model/gameModel";
import useData from "./useData";

const useGames=(genres:string = 'puzzle')=>useData<Game>('/games?genres='+genres)

export default useGames