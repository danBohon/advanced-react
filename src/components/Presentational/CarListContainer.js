import React, { Component } from "react";
import axios from 'axios';
import CarsListDisplay from "./CarListDisplay";

export default class CarsListContainer extends Component {
	constructor() {
		super();
		this.state = {
			cars: []
		}
	}

	componentDidMount() {
		axios.get('/api/cars_List/1').then(cars => {
			this.setState( {
				cars: cars.data.carsList
			})
		})
	}

	render() {
		return <CarsListDisplay cars={this.state.cars}/>;
	}
}
