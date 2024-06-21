import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http://3.17.156.116:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
