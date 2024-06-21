import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://10.0.20.105:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
