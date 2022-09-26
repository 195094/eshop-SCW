//https://api.unsplash.com/search/photos?query=women
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/search/photos?query=clothes",
  headers: {
    Authorization: "Client-ID _10eZkUBXPMc4aX1dPQkE_bgzKrR1YYICUtueWVjrGs",
  },
});
