import React, {useState} from "react";

const SayMyNameWithStateWithHooks = () => {

    const [name, setName] = useState("Tadas")

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <input value={name} onChange={onChangeName}/>
            <h3>
                Hello, {name}!!!
            </h3>
        </>
    )
}

export default SayMyNameWithStateWithHooks