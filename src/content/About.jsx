import { useSelector } from "react-redux"

export default function About() {
    const mybColor = useSelector((store)=> store.textColor.bColor )

    return (
        <div style={{border: `${mybColor} 2px solid`}} className="w-75 m-2 test2">
            <h1>About page </h1>
            <p>this is about page</p>
        </div>

    )
}