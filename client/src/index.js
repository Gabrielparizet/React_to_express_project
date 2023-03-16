import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const requestAPI = async () => {
	try {
		const res = await axios.get(`http://localhost:9000/connectMySql`, {
			headers: {},
			params: {}
		});
        console.log(res)
	} catch (err) {
		console.log(err);
	}
};
requestAPI();
root.render(
  <React.StrictMode>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
