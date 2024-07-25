import React, {useState, useEffect} from "react";

 export default function MyComponent(){
        const [count, setCount] = useState(0);
        const [color, setColor] = useState("green")

        useEffect(() => {
            document.title = `count: ${count} ${color}`;

            return() => {
                // some cleanup code
            }
        }, [count]);

        function addCount(){
            setCount(c => c + 1)
        }
        function substractCount(){
            setCount(c => c - 1)
        }
        function changeColor(){
            setColor(c => c === "green" ? "red" : "green");
        }

    return(
        <>
            <p style={{color:color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={substractCount}>Substract</button>
            <button onClick={changeColor}>Change color</button>
        </>
    )
}