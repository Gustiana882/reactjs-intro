import React, { Component } from 'react';
import './search.css'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.state.value)
        e.preventDefault();
    }

    callback = () => {
        return this.state.value
    }

    render() {
        return (
            <div className="input-group">
                <form onSubmit={this.handleSubmit}>
                <input
                    className="form-control form-control-sm rounded-pill px-3"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={this.handleChange}
                    callback={this.callback}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-search icon-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                </form>
            </div>
        )
    }

}

export default Search;