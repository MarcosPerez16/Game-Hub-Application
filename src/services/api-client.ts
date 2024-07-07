import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "c7d311696b5a4ed5ba6d188259fbca0c"
    }
})