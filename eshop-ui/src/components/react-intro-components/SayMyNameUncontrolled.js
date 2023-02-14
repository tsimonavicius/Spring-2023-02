import React from "react"
import './SayMyNameWithStateStyle.css'

class SayMyNameUncontrolled extends React.Component {
    constructor(props) {
        super(props)
        this.nameInputRef = React.createRef()
    }

    updateName = (e) => {
        console.log("ref objektas", this.nameInputRef.current)
        this.setState({})
    }

    render() {
        return (
            <>
                <input id="nameInput" ref={this.nameInputRef}/>
                <button onClick={this.updateName}>Update name</button>
                <h3 className="red">
                    Hello, {this.nameInputRef.current ? this.nameInputRef.current.value : ""}!!!
                </h3>
            </>
        )
    }
}

export default SayMyNameUncontrolled