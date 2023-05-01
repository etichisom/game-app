import { Game} from "../model/gameModel";
import useData from "./useData";

const useGames=(genres:string = 'puzzle',platformId:string = '1' )=>useData<Game>('/games?genres='+genres+"&platforms="+platformId)

export default useGames