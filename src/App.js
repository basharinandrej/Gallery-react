import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'



import ListAuthor from './components/ListAuthors'
import ListAlbums from './components/ListAlbums/ListAlbums'
import Gallery from './components/Gallery/Gallery'
import Layout from './hoc/layout/layout'


function App() {
  	return (

		<Layout>
			<Switch>
				<Route path="/"  exact component={ListAuthor} />
				<Route path="/album/:id" component={ListAlbums}/>
				<Route path="/gallery/:id" component={Gallery}/>
			</Switch>
		</Layout>
  );
}

export default App;
