import { useDispatch, useSelector } from "react-redux";
import { changTextColor, changBorderColor, changBackgroundColor } from "../utils/slice/textColor";

export default function Option() {
    const mybColor = useSelector((store)=> store.textColor.bColor )

    const dispach = useDispatch()

    return (
        <>
            <div style={{border: `${mybColor} 2px solid`}} className="w-75 m-2 test2">
                <h1>{`Options`}</h1>
                <p>this is options page</p>
                <p><span>Text Color : </span> <input onChange={(e) => dispach(changTextColor(e.target.value))} type="color" /></p>
                <p><span>Border Color : </span> <input onChange={(e) => dispach(changBorderColor(e.target.value))} type="color" /></p>
                <p><span>BackgroundColor : </span> <input onChange={(e) => dispach(changBackgroundColor(e.target.value))} type="color" /></p>
                <p>select theme :
                    <button onClick={()=>{
                        dispach(changTextColor("red"))
                        dispach(changBorderColor("blue"))
                        dispach(changBackgroundColor("yellow"))
                    }}>theme 1</button>
                    <button onClick={()=>{
                        dispach(changTextColor("blue"))
                        dispach(changBorderColor("yellow"))
                        dispach(changBackgroundColor("red"))
                    }}>theme2</button>
                    <button onClick={()=>{
                        dispach(changTextColor("yellow"))
                        dispach(changBorderColor("red"))
                        dispach(changBackgroundColor("blue"))
                    }}>theme3</button>
                </p>
            </div>
        </>
    )
}

