import React, { Component } from "react";
import axios from "axios";

export default class DataFetcher extends Component {
	constructor() {
		super()
		this.state = {
			data: null
		}
	}

	fetchData = () => {
		axios.get(this.props.url).then( stuff => {
			this.setState({
				data: stuff.data
			})
		})
	}

	render() {
		return <div>
			{this.state.data ?
			this.props.render(this.state.data)
			: this.fetchData()}
		</div>;
	}
}


