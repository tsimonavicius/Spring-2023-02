import React from "react"
import './SayMyNameWithStateStyle.css'

class SayMyNameWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Tadas"}
        // this.setName = this.setName.bind(this)
    }

    setName = (e) => {
        console.log("this", this)
        console.log("e", e)
        this.setState({name: e.target.value})
    }

    render() {
        return (
            <>
                <input onChange={this.setName} value={this.state.name}/>
                <h3 className="red">
                    Hello, {this.state.name}!!!
                </h3>
            </>
        )
    }
}

export default SayMyNameWithState