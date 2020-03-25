import axios from "axios";

let PERSONAL_ACCESS_TOKEN = "49b2e1c194745fe878bfe5a4e2c28227da3eaa39";

export default axios.create({
 // baseURL: "https://api.github.com/organizations/62528634/",
   baseURL: "https://api.github.com/orgs/github-JavaSpring/",
  headers: {
    Authorization: "token " + PERSONAL_ACCESS_TOKEN,
    Accept: "*/*"
  }
});
