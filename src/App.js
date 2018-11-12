import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "./Header";

//Presentational / Container
import CarListContainer from "./components/Presentational/CarListContainer";
import StarWarsContainer from "./components/Presentational/StarWarsContainer";

// HOC's
import CarsList from "./components/HOC/CarsList";
import StarWars from "./components/HOC/StarWars";

// Render Props
import DataFetcher from "./components/RenderProps/DataFetcher";
import StarWarsRender from "./components/RenderProps/StarWarsRender";
import CarListRender from "./components/RenderProps/CarsListRender";

// Children

import Parent from "./components/Children/Parent";

import "./App.css";
import CarsListRender from "./components/RenderProps/CarsListRender";

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="content">
					<Switch>
						{/* Presentational */}
						<Route path='/starwars_presentational/' component={StarWarsContainer}/>
						{/* HOC */}
						<Route path='/starwars' component={StarWars}/>
						{/* Render Props */}
						<Route 
							path='/cars_list_renderprops' 
							render={() => {
								return <div>
									<DataFetcher
									url="/api/cars_List/1"
									render={(data) => {
										return <CarListRender data={data} />
									}} />
								</div>
							}} 
						/>

						
						<Route path="/starwars_renderprops" component={StarWarsRender} />

						<Route path="/children_example" component={Parent} />
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;
