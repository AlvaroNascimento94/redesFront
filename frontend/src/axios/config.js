import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://3.145.94.146:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
