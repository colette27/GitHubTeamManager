import React from "react";
import "./styles.css";
import axios from "./axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    var Teams = [];
    this.state = { Teams };
  }

  getTeams = () => {
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
          console.error(`No results fetching TEAM list.`);
        } else {
          console.error(
            `ERROR ${error.message} fetching TEAM list ${JSON.stringify(error)}`
          );
        }
      });
  };

  handleNameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  // PUT /orgs/:org/teams/:team_slug/memberships/:username
  // NEXT STEP IS TO PARAMETERIZE THE TEAM, alerady done is the USERNAME
  // 3719543
  addMemberToTeam = (username, teamId) => {
    return axios
      .put("team/" + teamId + "/memberships/" + username)
      .then(result => {
        console.log("success");
      });
  };

  render() {
    const { Teams, username } = this.state;

    return (
      <div className="App">
        <h1>GitHub Team Manager</h1>
        <button onClick={this.getTeams}>Click me!</button>
        THERE ARE {Teams.length} TEAMS
        <input
          onChange={this.handleNameChange}
          type="text"
          id="username"
          placeholder="enter git user name"
        />
        {Teams.map((team, index) => (
          <button
            onClick={() => this.addMemberToTeam(username, team.id)}
            key={index}
          >
            add to {team.name} team{" "}
          </button>
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
