import React from "react";
import "./styles.css";
import axios from "./axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    var Teams = [];
    this.state = { Teams };
    this.getTeams();
  }

  getTeams = (teamId, userNmae) => {
    return axios
      .get(`teams`)
      .then(result => {
        const fetchedTeams = [];
        result.data.forEach(team => {
          fetchedTeams.push(team);
          console.log("FETCHED TEAM: " + team.name);
        });

        this.setState({ Teams: fetchedTeams });
      })
      .catch(function(error) {
        if (error.response && error.response.status === 404) {
          console.error(`No results fetching Account list.`);
        } else {
          console.error(`ERROR fetching Account list ${JSON.stringify(error)}`);
        }
      });
  };

  render() {
    const { Teams } = this.state;

    return (
      <div className="App">
        <h1>GitHub Team Manager</h1>
        <button onClick={this.getTeams}>Click me!</button>
        THERE ARE {Teams.length} TEAMS
        <input type="text" id="username" placeholder="enter git user name" />
        {Teams.map((team, index) => (
          <button key={index}>add me to the {team.name} team </button>
        ))}
      </div>
    );
  }
}

//don't bother with the OATH code for this

//implement with personal access token,

//At the end you can do this with Java Spring Oath

//copy in JS React methods, no need for components

// sample code for using axios

export default App;
