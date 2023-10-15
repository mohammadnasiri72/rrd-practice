import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import User from './content/user'
import Users from './content/Users'
import About from './content/About'
import Home from './content/Home'
import Option from './content/option'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Web from './Web'
import { Provider } from 'react-redux'
import { store } from './utils/store'
export default function App() {

    return (

        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Web></Web>}>
                            <Route path='/' element={<Home></Home>}></Route>
                            <Route path='/About' element={<About></About>}></Route>
                            <Route path='/User' element={<User></User>}></Route>
                            <Route path='/User/:username' element={<Users></Users>}></Route>
                            <Route path='/options' element={<Option></Option>}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </Provider>


        </>







    )
}

