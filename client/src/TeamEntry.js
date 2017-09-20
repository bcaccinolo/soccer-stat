import React, { Component } from 'react';

export default class TeamEntry extends Component {

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



