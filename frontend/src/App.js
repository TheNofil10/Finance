// Import React
import React from "react";

// Import Bootstrap
import './App.css';
import Login from './pages/login';
import { BrowserRouter as Router, Routes,
	Route, useRoutes } from "react-router-dom";
import Home from './pages/home';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import other React Component
// App Component
const App = () => {
	return (
		<>
		<Toaster position='bottom-right' toastOptions={{duration: 2000}} />
		<Router>
		<Routes>
		  <Route>
			<Route path='/login' element={<Login />} />
			<Route path='/home' element={<Home />} />
		  </Route>
		</Routes>
		</Router>
		</>
	  )
	
};

export default App;
