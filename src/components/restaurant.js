import React, { Component } from 'react';

export default class Restaurant extends Component {

    render() {
        console.log(this.props.active);
        const keys = Object.keys(this.props.data).slice(1, 7);
        return (
            <div>
                <h3>{this.props.data.title}</h3>
                <ul>
                    {this.props.data[keys[this.props.active]] ? this.props.data[keys[this.props.active]].map(x => <li>{x}</li>) : <li>Ruokalistaa ei kyetty noutamaan</li>}
                </ul>
            </div>
        );
    }
}