import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Maps = () => {
	const [results, setResults] = useState([]);

	useEffect(() => {
		axios
			.all([axios.get('https://corona.lmao.ninja/v2/countries')])
			.then((responseArr) => {
				setResults(responseArr[0].data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const countriesLocations = results.map((data, i) => {
		return (
			<div
				lat={data.countryInfo.lat}
				lng={data.countryInfo.long}
				style={{
					color: 'red',
					backgroundColor: 'white',
					height: '25px',
					width: '35px',
					textAlign: 'center',
					borderRadius: '30%',
				}}>
				<img height='10px' src={data.countryInfo.flag} alt='country flag' />
				{data.cases}
			</div>
		);
	});

	return (
		<div style={{ height: '100vh', width: '100%' }}>
			<GoogleMapReact
				bootstrapURLKeys={{
					key: process.env.REACT_APP_API_KEY,
				}}
				defaultCenter={{ lat: 38, lng: -97 }}
				defaultZoom={4}>
				{countriesLocations}
			</GoogleMapReact>
		</div>
	);
};

export default Maps;
