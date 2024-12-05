import React from 'react';
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import {Application} from './application/application';
import {Login} from './login/login';
import {Database} from './database/database';
import {Websocket} from './websocket/websocket';

export default function App() {
    return (
      <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Simon<sup>&reg;</sup>
            </div>
            <menu className='navbar-nav'>
              <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='application'>
                  Application
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='database'>
                  Database
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='websocket'>
                  Websocket
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>
       
        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/application' element={<Application />} />
          <Route path='/database' element={<Database />} />
          <Route path='/websocket' element={<Websocket />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <main>App components go here</main>
  
        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Cadence Potter)</span>
            <NavLink className='text-reset' to='https://github.com/webprogramming260/simon-react'>
              Source
            </NavLink>
          </div>
        </footer>
      </div>
      </BrowserRouter>
    );
  }