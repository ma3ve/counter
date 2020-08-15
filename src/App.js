import React, { Component } from "react";
import Item from "./Item";

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: [0, 0, 0, 0],
        };
    }

    render() {
        const { values } = this.state;
        return (
            <div>
                <nav class="navbar navbar-dark bg-secondary">
                    <h1>Couter</h1>
                    <div style={{ float: "right" }}>
                        <i class="fa" style={{ fontSize: "40px" }}>
                            &#xf07a;
                        </i>
                        <span class="badge badge-warning" id="lblCartCount">
                            {values.reduce((a, b) => a + b)}
                        </span>
                    </div>
                </nav>

                <div className="container">
                    {values.map((item, key) => {
                        return (
                            <div className="mt-2" key={key}>
                                <Item
                                    value={item}
                                    change={(value) => {
                                        let temp_values = [...values];
                                        temp_values[key] = value;
                                        this.setState({ values: temp_values });
                                    }}
                                    id={key}
                                    delete={(key) => {
                                        let temp_values = [...values];
                                        temp_values.splice(key, 1);
                                        this.setState({ values: temp_values });
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;
