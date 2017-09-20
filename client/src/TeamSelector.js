import React, { Component } from 'react';

export default class TeamSelector extends Component {

  state = {
    championships: [
      {name: 'Ligue 1', id: 'ligue1'},
      {name: 'Bundes Liga', id: 'bundesliga'},
      {name: 'Premier League', id: 'premierleague'},
    ]
  }

  render() {
    const {championships} = this.state;
    const list = championships.map((cs, i) => <li key={i} >
                                              <a onClick={() => this.props.onChange(cs.id)}>
                                                {cs.name}
                                              </a>
                                           </li>);
    return(
      <div className="btn-group">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
            Change Championship <span className="caret"></span>
          </button>
        <ul className="dropdown-menu">
          {list}
        </ul>
      </div>
    );
  }
}

 

