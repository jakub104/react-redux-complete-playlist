import React, {Component} from 'react';
import Ninjas from "./Ninjas"
import AddNinja from './AddNinja'

class App extends Component {
	state = {
		ninjas: [
			{name: "Jakub", age: "17", belt: "transparent", id: 1},
			{name: "Sabina", age: "45", belt: "transparent", id: 2},
			{name: "Paulina", age: "21", belt: "transparent", id: 3}
		]
	}

	addNinja = (ninja) => {
		ninja.id = Math.random();
		let ninjas = [...this.state.ninjas, ninja]
		this.setState({
			ninjas: ninjas
		})
	}

	deleteNinja = (id) => {
		let ninjas = this.state.ninjas.filter(ninja => {
			return ninja.id !== id
		});
		this.setState({
			ninjas: ninjas
		})
	}
	// Komponent został załadowany
	componentDidMount() {
		console.log('component mounted')
	}

	// Komponent został zmieniony / zaktualizowany
	componentDidUpdate(prevProps, prevState) {
		console.log('component updated');
		console.log(prevProps, prevState);
	}

	render() {
		return (
			<div className="App">
				<h1>My first React App!</h1>
				<p>Welcome :D</p>
				<Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
				<AddNinja addNinja={this.addNinja} />
			</div>
		)
	}
}

export default App;