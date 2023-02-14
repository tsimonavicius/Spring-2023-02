import React from "react";

class ButtonWithText extends React.Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }

    count = (e) => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        return (
            <>
                <p>{this.state.counter ? this.state.counter : this.props.text }</p>
                <button onClick={this.count} className="btn btn-primary">Paspausk</button>
            </>
        )
    }
}

export default ButtonWithText