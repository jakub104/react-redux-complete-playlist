import React, {Component} from 'react';
import Ninjas from "./Ninjas"

class App extends Component {
	state = {
		ninjas: [
			{name: "Jakub", age: "17", belt: "transparent", id: 1},
			{name: "Sabina", age: "45", belt: "transparent", id: 2},
			{name: "Paulina", age: "21", belt: "transparent", id: 3}
		]
	}
	render() {
		return (
			<div className="App">
				<h1>My first React App!</h1>
				<p>Welcome :o</p>
				<Ninjas ninjas={this.state.ninjas} />
			</div>
		)
	}
}

export default App;