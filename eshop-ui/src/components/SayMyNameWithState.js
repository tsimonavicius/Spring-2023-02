import React from "react"

class SayMyNameWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Tadas"}
    }

    render() {
        return (
            <>
                <input onChange={(e) => {
                    console.log(e.target.value)
                    this.setState({name: e.target.value})
                }
                }/>
                <h3>
                    Hello, {this.state.name}!!!
                </h3>
            </>
        )
    }
}

export default SayMyNameWithState