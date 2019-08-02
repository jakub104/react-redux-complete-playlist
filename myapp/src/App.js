import React, {Component} from 'react';
import Ninjas from "./Ninjas"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <p>Welcome :o</p>
        <Ninjas name="Jakub" age="17" belt="transparent" />
        <Ninjas name="Kuba" age="18" belt="black" />
      </div>
    )
  }
}

export default App;