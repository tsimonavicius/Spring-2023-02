import React, {useState} from "react";

const ButtonWithTextWithHooks = (props) => {

    const veryPriceyCalculations = () => {
        console.log("Init reiksmes skaiciavimas")

        return 0
    }

    const [counter, setCounter] = useState(() => veryPriceyCalculations())

    console.log("Rendering component")

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