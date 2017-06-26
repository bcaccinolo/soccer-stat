// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
  },
}

class App extends Component {
  constructor(){
    super();
    const resp = this.fetch('/');
    console.log(resp);
  }

  render() {
    return (
      <div style={styles.app}>
        Welcome to React! coucou
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
