import axios from "axios";

//url로 영화 정보를 데이터베이스에서 가져오는거

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;