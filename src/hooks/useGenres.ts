
import { Genres} from "../model/genresModel";
import useData from "./useData";

const useGenres=()=>useData<Genres>("/genres")

export default useGenres