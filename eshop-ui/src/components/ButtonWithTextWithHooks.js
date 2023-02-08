import React, {useState} from "react";

const ButtonWithTextWithHooks = (props) => {

    const [counter, setCounter] = useState(0)

    const count = (e) => {
        setCounter(prevCounter => prevCounter + 1)
    }

    return (
        <>
            <p>{counter ? counter : props.text }</p>
            <button onClick={count}>Paspausk</button>
        </>
    )
}

export default ButtonWithTextWithHooks