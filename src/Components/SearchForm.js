import React, { Component } from 'react';


class SearchForm extends Component {
    
    state = {
        searchText: ''
    };

    onSearchChange = (e) => {
        this.setState({ searchText: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        e.currentTarget.reset();
    }

    render(){
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        placeholder="Search flikr...." />
                <button type="submit" id="submit" className="search-button">Search</button>
            </form>
        );
    }
}

export default SearchForm;