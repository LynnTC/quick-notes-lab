import React, { Component } from 'react';

export default class NoteForm extends Component {
    state = {
        note: '',
    };

    handleChange = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        console.log('hi')
    };

    render() {
        return (
            <div className="form-container">
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <label>Note:</label>
                    <input
                        type="text"
                        name="note"  // Corrected attribute from 'note' to 'name'
                        value={this.state.note}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}
