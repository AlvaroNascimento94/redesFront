import axios from "axios";

const partyFetch = axios.create({
  baseURL: "http//:ec2-18-224-51-237.us-east-2.compute.amazonaws.com:3000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default partyFetch;
