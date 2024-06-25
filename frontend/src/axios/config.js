import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://18.227.111.194:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
