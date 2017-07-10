import React, { Component } from 'react';

const { Chart, Bars, Dots, Labels, Ticks, Layer, Animate } = require('rumble-charts');


export default class TeamGraph extends Component {

  constructor(props){
    super();
    this.state = props.data;
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data);
  }

  render(){
    const {rank, logo, team, points, win, draw, lost, goalsFor} = this.state;
    const logo_path = "images/logos/" + logo + ".gif";

    const labels = ['rank', 'points', 'win', 'draw', 'lost', 'goals'];
    const series = [ {data:[parseInt(rank, 10),
                            parseInt(points, 10),
                            parseInt(win, 10),
                            parseInt(draw, 10),
                            parseInt(lost, 10),
                            parseInt(goalsFor, 10)
                          ]}];

    return( <div className="panel panel-default">
              <div className="panel-heading">
                  <h3 className="panel-title">
                    <img src={logo_path} alt='' /> {team}
                  </h3>
                </div>
              <div className="panel-body">


<Chart width={400} height={400} series={series} minY={0}>
      <Layer width='80%' height='80%' position='middle center'>
        <Animate ease='bounce' _ease='elastic'>
        <Ticks
          axis='y'
          ticks={{maxTicks: 6}}
          tickVisible={({tick}) => tick.y > 0}
          lineLength='100%'
          lineVisible={true}
          lineStyle={{stroke:'lightgray'}}
          labelStyle={{textAnchor:'end',alignmentBaseline:'middle',fontSize:'0.85em',fontFamily:'sans-serif',fill:'lightgray'}}
          labelAttributes={{x: -5}}
        />
        <Ticks
          axis='x'
          label={({index,props}) => labels[index] }
          labelStyle={{textAnchor:'middle',alignmentBaseline:'before-edge',fontSize:'0.85em',fontFamily:'sans-serif',fill:'black'}}
          labelAttributes={{y: 10}}
        />
        <Bars
          groupPadding='3%'
          innerPadding='0.5%'
        />

        <Dots />
        <Labels
          label={({point}) => Math.round(point.y)}
          dotStyle={{
            alignmentBaseline:'after-edge',
            textAnchor:'middle',
            fontFamily:'sans-serif'
          }}
          labelAttributes={{y: -4}}
        />
        </Animate>
      </Layer>
    </Chart>

              </div>
            </div>
    )
  }
}
