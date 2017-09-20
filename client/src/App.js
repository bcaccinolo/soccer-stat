import React, { Component } from 'react';
import TeamsTable from './TeamsTable';

export default class App extends Component {

    render() {
        return (
            <div className="container theme-showcase" role="main">

                <div className="page-header">
                    <div className="row">

                        <div className="col-md-10">
                            <h1>Teams</h1>
                        </div>

                        <div className="col-md-2">
                            <div id="team-selector" />
                        </div>

                    </div>
                </div>

                <div className="row">

                    <div className="col-md-6">
                        <TeamsTable />
                    </div>

                    <div className="col-md-6">
                        <div id='teamgraph'></div>
                    </div>

                </div>

            </div>

        )
    }
}
