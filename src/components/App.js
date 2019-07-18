import React, { Component } from 'react';
import { Route, BrowserRouter as Router  } from 'react-router-dom'

import styled from 'styled-components';



import Startup from '../containers/Startup';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import NavigationBar from '../containers/NavigationBar';


const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100vh;
	font-family: 'Open Sans', sans-serif;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	width: 500px;
	height: 40%;
`;

const Title = styled.h1`
	color: black;
	font-size: 2.5rem;
	font-weight: 700;
`;

const Paragraph = styled.p`
	color: black;
	font-size: 1rem;
`;

const Link = styled.a`
	color: #00a8e8;
`;

const App = () => (
	<div>
		
		<Router>
			<NavigationBar />
		 
		</Router>
	</div>
);

export default App;
