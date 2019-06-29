import React, { Component } from 'react';

export default class Nav extends Component {

    render() {

        return (
            <nav>
                <ul>
                    {this.props.options.map(x => <li className={"nav-item".concat(this.props.options.indexOf(x) === this.props.active ? " active" : "")} onClick={() => this.props.changeDay(this.props.options.indexOf(x))}>{x}</li>)}
                </ul>
            </nav>
        );
    }
}