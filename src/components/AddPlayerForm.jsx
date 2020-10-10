import React, {Component} from 'react';

class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    constructor() {
        super();
        this.formRef = React.createRef();
        this.textRef = React.createRef();
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const form = this.formRef.current; // form node
        //const player = this.textRef.current; // input node

        console.log(form.checkValidity());
        //console.log(player.validity.valid);

        if (!form.checkValidity()) {
            return;
        }
        this.props.addPlayer(this.state.value);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <form ref={this.formRef} className="form" onSubmit={this.handleSubmit} noValidate>
                <input className="input" type="text" placeholder="enter a player's name"
                value={this.state.value} onChange={this.handleValueChange} required></input>
                <input className="input" type="submit" value="Add Player"></input>
            </form>
        )
    }
}

export default AddPlayerForm;