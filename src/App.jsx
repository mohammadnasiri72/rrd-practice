import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, Outlet } from 'react-router-dom'

export default function App() {


    return (
       
            
                    <div className="d-flex">
                        <div>
                        <Link className='d-block border p-3 test m-2' to="/">Home</Link>
                        <Link className='d-block border p-3 test m-2' to="/About">About</Link>
                        <Link className='d-block border p-3 test m-2' to="/User">User</Link>
                        </div>
                        <Outlet></Outlet>
                    </div>
                    
              
       
    )
}

