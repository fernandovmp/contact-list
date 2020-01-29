import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApiService } from './services/ApiService';

const apiService = new ApiService('https://localhost:5001');

ReactDOM.render(<App apiService={apiService} />, document.getElementById('root'));
