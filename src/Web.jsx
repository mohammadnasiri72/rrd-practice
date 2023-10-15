import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export default function Web() {
    const myColor = useSelector((store)=> store.textColor.color )
    const mybColor = useSelector((store)=> store.textColor.bColor )
    const mybgColor = useSelector((store)=> store.textColor.bgColor )
    const styleTheme1 = useSelector((store)=> store.textColor.styleTheme )
    console.log(styleTheme1);
    return (
        <>
            <div style={{color: myColor , border: `${mybColor} 2px solid` , backgroundColor: mybgColor , styleTheme1 }} className="d-flex">
                <div>
                    <Link style={{color: myColor , border: `${mybColor} 2px solid`}} className='d-block p-3 test m-2' to="/">Home</Link>
                    <Link style={{color: myColor , border: `${mybColor} 2px solid`}} className='d-block p-3 test m-2' to="/About">About</Link>
                    <Link style={{color: myColor , border: `${mybColor} 2px solid`}} className='d-block p-3 test m-2' to="/User">User</Link>
                    <Link style={{color: myColor , border: `${mybColor} 2px solid`}} className='d-block p-3 test m-2' to="/options">options</Link>
                    
                </div>
                <Outlet></Outlet>
            </div>
        </>
    )
}
