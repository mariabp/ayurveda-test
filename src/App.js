import React from 'react';
import { Grommet } from 'grommet';
import './App.css';
import Layout from './components/Layout';

const myTheme = {
	global: {
	  font: {
		family: 'Poppins',
	  },
	},
  };

function App() {
	return (
		<Grommet theme={myTheme}>
				<Layout/>
		</Grommet>
	);
}

export default App;
