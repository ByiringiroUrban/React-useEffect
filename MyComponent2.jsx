
import React,{ useState, useEffect} from "react";

export default (MyComponent2) => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(()=> {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed")
        }
    }, []); 

    useEffect(() => {
        document.title = `size: ${width} ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
    

    return(
        <div>
           <p>Window width : {width} px</p>
           <p>Window height : {height} px</p>
        </div>
    )
}
