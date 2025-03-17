import React, { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John Doe',
            profession: 'Software Engineer'
        };
    }

    render() {
        const luckyNumber = Math.floor(Math.random() * 100) + 1;

        return (
            <div>
                <h2>User Information</h2>
                <p>Name: {this.state.name}</p>
                <p>Profession: {this.state.profession}</p>
                <p>Your lucky number is {luckyNumber}</p>
                <button onClick={this.props.handleClick}>Show Alert</button>
            </div>
        );
    }
}

export default UserInfo;