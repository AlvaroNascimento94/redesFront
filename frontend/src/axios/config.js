import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://3.142.130.20:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
