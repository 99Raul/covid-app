import React, { useEffect, useState } from 'react';
// Hou comment: really impressed that you were able to learn and apply material ui so quickly in your project
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

// Hou comment: nice job using functional components and hooks throughout your codebase!
// Also nice job destructuring your props on line 11!
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return <p>Loading...</p>;
	}

	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify='center'>
				{/* Hou comment: consider creating a reusable Card component for lines 20-93 */}
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.infected)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Infected
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>Number of active Cases</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.recovered)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Recovered
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>Number of recoveries cases</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.deaths)}>
					<CardContent>
						<Typography color='textSecondary' gutterBottom>
							Deaths
						</Typography>
						<Typography variant='h5'>
							<CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator=','
							/>
						</Typography>
						<Typography color='textSecondary'>
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography variant='body2'>
							Number of deaths caused by covid
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
