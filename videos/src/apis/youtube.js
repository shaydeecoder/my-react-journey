import axios from "axios";

const KEY = "AIzaSyBirJgritLYuDua3Lufu7o7WrLoPIE8ZqM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
