import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import User from './content/user'
import Users from './content/Users'
import About from './content/About'
import Home from './content/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
         <React.StrictMode>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<App></App>}>
                    <Route path='/' element={<Home></Home>}></Route>
                    <Route path='/About' element={<About></About>}></Route>
                    <Route path='/User' element={<User></User>}></Route>
                    <Route path='/User/:username' element={<Users></Users>}></Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </>
);


