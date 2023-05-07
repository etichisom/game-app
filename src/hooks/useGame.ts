import { Game} from "../model/gameModel";
import useData from "./useData";

const useGames=(genres:string = 'puzzle',platformId:string = '1',sortBy:string="name" )=>useData<Game>('/games?genres='+genres+"&platforms="+platformId+"&ordering="+sortBy)

export default useGames