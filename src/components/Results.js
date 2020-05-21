import React, { Fragment } from 'react';
import { Box, Button, Meter, Stack, Text } from 'grommet';

const Results = ({ results, restart }) => {

	let mappedResults = results.map((result, index) => {

		return (
			<Fragment key={index} >
				<Stack anchor="center">
					<Meter size="small" type="circle" values={[{value: result.percentage, color: result.color}]}/>
					<Box direction="row" align="center" pad={{ bottom: "xsmall" }}>
						<Text>{result.dosha}</Text>
						<Text size="xlarge" weight="bold">{result.percentage}</Text>
						<Text size="small">%</Text>
					</Box>
				</Stack>
			</Fragment>
		)
	});


	return  (
		<Box align="center" responsive gap="medium" width="100%">
			<h1 className="result-title">Resultados</h1>
			{mappedResults}
		<Button primary color="neutral-2" label="Empezar de nuevo" onClick={restart}></Button>

		</Box>
	)
}

export default Results;
