import { useSelector } from "react-redux"

export default function Home() {
    const mybColor = useSelector((store)=> store.textColor.bColor )
    return (
      
            <div style={{border: `${mybColor} 2px solid`}} className="w-75 m-2 test2">
                <h1>Home page</h1>
                <p>this is home page</p>
            </div>
        
    )
}