import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import TeamEntry from './TeamEntry'
import TeamGraph from './TeamGraph'
import TeamSelector from './TeamSelector'

export default class TeamsTable extends Component {

  state = {
    selectedTeam: 'ligue1',
    teams: []
  };

  fetchChampionShip() {
    fetch('/team/' + this.state.selectedTeam).then(res => res.json())
      .then(data => this.setState({ teams: data }))
      .then(state => this.displayGraph(1));
  }

  componentDidMount() {
    this.fetchChampionShip();
    ReactDOM.render(<TeamSelector onChange={this.selectionModified.bind(this)} />, document.getElementById('team-selector'));
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.teams.length === 0) {
      this.fetchChampionShip();
    }
  }

  selectionModified(teamId) {
    console.log('team selection modified', teamId);
    this.setState({ selectedTeam: teamId, teams: [] });
  }

  displayGraph(i){
    const team = this.state.teams[i];
    ReactDOM.render(<TeamGraph data={team} />, document.getElementById('teamgraph'));
  }

  showList(teams) {
    if(teams.length === 0){
      return (   <h3>
                  <span className="label label-info">
                    <i className="fa fa-spinner fa-spin" ></i>  Loading teams
                  </span>
                 </h3>)
    } else {
      return (
        <table className='table table-striped' >
            <thead>
             <tr>
                <th>Rank</th>
                <th>Logo</th>
                <th>Team</th>
                <th>Points</th>
             </tr>
            </thead>
            <tbody>
              { teams.map((team, index) => <TeamEntry key={team.rank}
                                                      onClick={() => this.displayGraph(index) }
                                                      data={team} /> ) }
            </tbody>
          </table>
      )

    }
  }

  render() {
    const {teams} = this.state;
    return( <div> { this.showList(teams) } </div> )
  }
}
