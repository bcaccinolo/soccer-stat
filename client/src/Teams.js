import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class TeamsTable extends Component {

  state = {
    teams:[]
  }

  componentDidMount() {
    fetch('/teams').then(res => res.json())
                   .then(data => this.setState({teams: data}))
                   .then(state => this.displayGraph(1));

  }

  displayGraph(i){
    console.log('display graph');
    console.log(i);
    console.log(this.state.teams[i]);

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
              { teams.map((team, index) => <TeamEntry key={team.rank}
                                                      onClick={() => this.displayGraph(index) }
                                                      data={team} /> ) }
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

  handleClick(e){
    console.log('click on a team entry');
  }

  render () {

    const {rank, logo, team, points} = this.state;
    const logo_path = "images/logos/" + logo + ".gif";

    return(
      <tr key={rank} onClick={this.props.onClick} >
        <td>{rank}</td>
        <td><img src={logo_path} alt='' /></td>
        <td>{team}</td>
        <td>{points}</td>
      </tr>
    )
  }
}

class TeamGraph extends Component {

  constructor(props){
    super();
    this.state = props.data;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data);
  }

  render(){
    const {rank, logo, team, points} = this.state;
    const logo_path = "images/logos/" + logo + ".gif";

    return( <div className="panel panel-default">
              <div className="panel-heading">
                  <h3 className="panel-title">
                    <img src={logo_path} alt='' /> {this.state.team}
                  </h3>
                </div>
              <div className="panel-body">
                Basic panel example
              </div>
            </div>
    )
  }
}

export default TeamsTable;

