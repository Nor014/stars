import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stars from './Stars';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.count = 5;
  }

  render() {

    return (
      <>{typeof (this.count) === 'number' && ((this.count >= 1) && (this.count <= 5))
        ? <Stars count={this.count} />
        : <h2>Error</h2>}</>
    )
  }
}

export default App;
