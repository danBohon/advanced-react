import React, { Component } from "react";
import DataFetcher from './DataFetcher';
import CarListRender from './CarsListRender';

class StarWarsRender extends Component {
	render() {
		return (
			<DataFetcher
			url="/api/cars_List/1"
			render={(data) => {
				return <CarListRender data={data} />
			}} />
		);
	}
}
export default StarWarsRender;
