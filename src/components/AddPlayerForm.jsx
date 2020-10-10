import React, {Component} from 'react';

class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.value);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <input className="input" type="text" placeholder="enter a player's name"
                value={this.state.value} onChange={this.handleValueChange}></input>
                <input className="input" type="submit" value="Add Player"></input>
            </form>
        )
    }
}

export default AddPlayerForm;