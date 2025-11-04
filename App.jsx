import { Component } from "react";

class App extends Component {
    render() {
        return (
            <div id="parent">
                <h1>In parent div</h1>
                <div id="child">
                    <h3>In child div</h3>
                </div>
            </div>
        )
    }
}

export default App;