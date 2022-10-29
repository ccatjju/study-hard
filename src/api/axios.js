import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b2b868cc6442427c8eaf7c653ff7cd88",
    language: "ko-KR",
  },
});

export default instance;
