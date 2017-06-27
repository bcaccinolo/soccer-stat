import React, { Component } from 'react';

class TeamsTable extends Component {

  state = {
    teams:[]
  }

  componentDidMount() {
    fetch('/teams').then(res => res.json())
                   .then(data => this.setState({teams: data}));

  }

  showList(teams) {
    if(teams.length === 0){
      return (   <h3>
                  <span className="label label-info">
                    <i className="fa fa-spinner fa-spin" ></i>  Loading teams
                  </span>
                 </h3>)
    } else {
      return ( <table className='table table-striped' >
            <thead>
             <tr>
                <th>Rank</th>
                <th>Logo</th>
                <th>Team</th>
                <th>Points</th>
             </tr>
            </thead>
            <tbody>
              { teams.map((team, index) => <TeamEntry key={team.rank} data={team} /> ) }
            </tbody>
          </table> )

    }
  }

  render() {

    const {teams} = this.state;

    return( <div> { this.showList(teams) } </div> )
  }
}

class TeamEntry extends Component {

  constructor(props) {
    super();
    this.state = props.data;
  }

  render () {

    const {rank, logo, team, points} = this.state;
    const logo_path = "images/logos/" + logo + ".gif";

    return(
      <tr key={rank} >
        <td>{rank}</td>
        <td><img src={logo_path} /></td>
        <td>{team}</td>
        <td>{points}</td>
      </tr>
    )
  }

}

export default TeamsTable;

