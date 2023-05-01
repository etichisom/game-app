import { PlatformGameModel } from "../model/platformModel";
import useData from "./useData";


const usePlatform =()=>useData<PlatformGameModel>('platforms/lists/parents')

export default usePlatform