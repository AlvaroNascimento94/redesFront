import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://18.117.148.17:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
