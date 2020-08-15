import React, { Component } from "react";

export class Item extends Component {
    render() {
        const { value } = this.props;
        return (
            <>
                <div
                    style={{
                        backgroundColor: value ? "blue" : "yellow",
                        float: "left",
                        width: "50px",
                        textAlign: "center",
                    }}
                    className="mr-2"
                >
                    {value ? value : "Zero"}
                </div>
                <button
                    className="btn btn-sm btn-secondary mr-2"
                    onClick={() => {
                        this.props.change(value + 1);
                    }}
                >
                    incerement
                </button>
                <button
                    className="btn btn-sm btn-secondary mr-2"
                    onClick={() => {
                        if (value) {
                            this.props.change(value - 1);
                        }
                    }}
                >
                    decerement
                </button>
                <button
                    className="btn btn-sm btn-danger mr-2"
                    onClick={() => {
                        this.props.delete(this.props.id);
                    }}
                >
                    delete
                </button>
            </>
        );
    }
}

export default Item;
