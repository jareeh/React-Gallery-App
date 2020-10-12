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
        let searchQuery = this.state.searchText.value;
        let path = `search/${searchQuery}`;
        
        e.currentTarget.reset();
    }

    render(){
        return(
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search"
                        onChange={this.onSearchChange}
                        name="search"
                        placeholder="Search flikr...."
                        ref={ (input) => this.state.searchQuery = input} />
                <button type="submit" id="submit" className="search-button">Search</button>
            </form>
        );
    }
}

export default SearchForm;