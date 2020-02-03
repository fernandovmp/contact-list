import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ContactPage from './pages/ContactsPage';
import EditPage from './pages/EditPage';
import { ApiService } from './services/ApiService';
import { initializeIcons } from 'office-ui-fabric-react';
import './App.css';

initializeIcons();
const apiService = new ApiService('https://localhost:5001');

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact={true} >
                <ContactPage apiService={apiService}/>
            </Route>
            <Route path="/edit/:id">
                <EditPage apiService={apiService}/>
            </Route>
        </BrowserRouter>
    );
};

export default App;
