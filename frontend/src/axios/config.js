import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://3.137.187.188:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
