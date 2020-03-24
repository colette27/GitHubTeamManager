import axios from "axios";

let PERSONAL_ACCESS_TOKEN = "43ae2dec7580d3a9f14471a82efd33a1549e32ab";

export default axios.create({
  baseURL: "https://api.github.com/organizations/62528634/",
  headers: {
    Authorization: "token " + PERSONAL_ACCESS_TOKEN,
    Accept: "*/*"
  }
});
