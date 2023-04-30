import axios from "axios";

export default  axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"6027e1ea6e584bbea569efd2111f4be1"
    }
})