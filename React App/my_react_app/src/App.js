import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
import CarouSel from './components/CarouSel'
import List_page_1 from './components/List_page_1'
import List_page_2 from './components/List_page_2'

var rempx = document.documentElement.clientWidth / 4.2;
document.getElementsByTagName('html')[0].style.fontSize = rempx + "px";



class App extends Component {
	
  render() {	
  	return(
	  	<Router>
	  		<div>
		  		<Route exact path="/" component={CarouSel} />
		  		<Route path="/list" component={List_page_1} />
		  		<Route path="/list2/:fid" component={List_page_2} />
		  	</div>	
	  	</Router>
	  )	
	}
 } 

export default App;