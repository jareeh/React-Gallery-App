import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//App Components
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import Error from './Components/Error';

import apiKey from './config';


class App extends Component {
  state = {
      loading: true,
      photos: [],
      landscapes: [],
      forests: [],
      rivers: [],
    };

  componentDidMount(){
    this.performSearch()
    this.performSearch('forests')
    this.performSearch('rivers')
  }

  //Search handling method
  performSearch = (query = 'landscapes') => {
    this.setState({ loading:true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=25&format=json&nojsoncallback=1`)
      .then(response => {

        if(query === 'landscapes'){
          this.setState({
            landscapes: response.data.photos.photo,
            loading: false
          });

        } else if (query === 'forests'){
          this.setState({
            forests: response.data.photos.photo,
            loading: false
          })

        } else if (query === 'rivers'){
          this.setState({
            rivers: response.data.photos.photo,
            loading: false
          })

        } else {
          this.setState({
            photos: response.data.photos.photo,
            loading: false
          })
        }
      })
      .catch(error => {
        console.log('Error with axios fetching data', error)
      })
  }
  
  render(){
    return (
      <BrowserRouter basename="/react-gallery-app-V2">
        <div>
          <h1>Jeff's React Gallery App</h1>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : <Switch>
                <Route exact path="/" render={ () => <Redirect to ="/landscapes" /> } />
                <Route path="/landscapes" render={ () => <PhotoList data={this.state.landscapes}/> } />
                <Route path="/forests" render={ () => <PhotoList data={this.state.forests}/> } />
                <Route path="/rivers" render={ () => <PhotoList data={this.state.rivers}/> } />
                <Route path="/search/landscapes" render={ () => <Redirect to ="/landscapes" /> } />
                <Route path="/search/forests" render={ () => <Redirect to ="/forests" /> } />
                <Route path="/search/rivers" render={ () => <Redirect to ="/rivers" /> } />
                <Route path="/search/:query" render={ () => <PhotoList data={this.state.photos}/> } />
                <Route component={Error}/>
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
