import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team.jsx';
import Services from './Components/Services.jsx';
import Contact from './Components/Contact';
import ErrorPage from './error-page';

const history = createBrowserHistory();

const Router = () => {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/service" element={<Services />} />
                <Route path="/content" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
