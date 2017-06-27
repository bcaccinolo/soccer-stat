import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} = require('rumble-charts');

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
    const {rank, logo, team, points, played, win, draw, lost,
            goalsFor, goalsAgainst, goalDifference} = this.state;
    const logo_path = "images/logos/" + logo + ".gif";

    const series = [{
      data: [parseInt(points, 10),
             parseInt(played, 10),
             parseInt(win, 10),
             parseInt(draw, 10),
             parseInt(lost, 10),
             parseInt(goalsFor, 10),
             parseInt(goalsAgainst, 10),
             parseInt(goalDifference, 10)]
    }];

    return( <div className="panel panel-default">
              <div className="panel-heading">
                  <h3 className="panel-title">
                    <img src={logo_path} alt='' /> {this.state.team}
                  </h3>
                </div>
              <div className="panel-body">

                <Chart width={400} height={250} series={series} minY={0}>
                  <Bars />
                </Chart>

              </div>
            </div>
    )
  }
}

export default TeamsTable;

