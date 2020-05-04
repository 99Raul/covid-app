import React, { useState, useEffect } from 'react';
// Hou comment: Really impressed that you were able to integrate Google Maps into your app!
import GoogleMapReact from 'google-map-react';

// Hou comment: Why did you pick axios over the built-in fetch() calls? What are the pros and cons?
import axios from 'axios';

// Hou comment: make sure to clean up and delete any unused code from your files. I'd also move this file into the src/components folder
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
// Hou comment: great job using functional components and hooks throughout your app!
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
				// Hou comment: consider applying styles with a class selector rather than inlining the styles, to be consistent with the rest of the app
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
