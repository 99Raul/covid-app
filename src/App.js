import React, { Component } from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api/api';

import Maps from './Maps';
import covidImage from './images/covid.png';

export default class App extends Component {
	state = {
		data: {},
		country: '',
	};

	async componentDidMount() {
		const fetchedData = await fetchData();

		this.setState({ data: fetchedData });
	}

	handleCountryChange = async (country) => {
		//fetch the data
		//set the state
		const fetchedData = await fetchData(country);

		this.setState({ data: fetchedData, country: country });

		console.log(fetchedData);
	};

	render() {
		const { data, country } = this.state;

		return (
			<div className={styles.container}>
				<img className={styles.image} src={covidImage} alt='Covid-19' />
				<Cards data={data} />
				<Maps />
				<CountryPicker handleCountryChange={this.handleCountryChange} />
				<Chart data={data} country={country} />
			</div>
		);
	}
}
