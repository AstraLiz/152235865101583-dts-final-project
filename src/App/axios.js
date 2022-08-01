import axios from "axios";

const sourceLink = axios.create({
    baseURL: "https://the-lazy-media-api.vercel.app/",
});

export default sourceLink;