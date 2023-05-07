import { Game} from "../model/gameModel";
import useData from "./useData";

const useGames=(genres:string = 'puzzle',platformId:string = '1',sortBy:string="name",search:string )=>useData<Game>('/games?genres='+genres+"&platforms="+platformId+"&ordering="+sortBy+"&search="+search)

export default useGames