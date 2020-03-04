import React from 'react';

class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        try{
            this.setState(({counter}) => ({
                counter: counter + 1
            }));
            throw new Error('asdf')
        } catch(e){
            console.log('!!!!!!!', e);
        }

    }

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }
        return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
    }
}

export default BuggyCounter