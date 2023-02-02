import React from "react"

class SayMyNameWithState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Tadas"}
    }

    render() {
        return (
            <h3>
                Hello, {this.state.name}!!!
            </h3>
        )
    }
}

export default SayMyNameWithState