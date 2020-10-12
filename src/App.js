import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//App Components
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound'
import PhotoList from './Components/PhotoList';

import apiKey from './config';


class App extends Component {
  state = {
      loading: true,
      photos: [],
      landscapes: [],
      forests: [],
      beaches: [],
    };

  componentDidMount(){
    this.performSearch()
    this.performSearch('forests')
    this.performSearch('beaches')
  }

  //Search handling method
  performSearch = (query = 'landscapes') => {
    this.setState({ loading:true });
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
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

        } else if (query === 'beaches'){
          this.setState({
            beaches: response.data.photos.photo,
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
      <BrowserRouter>
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
                <Route path="/beaches" render={ () => <PhotoList data={this.state.beaches}/> } />
                <Route path="/search/landscapes" render={ () => <Redirect to ="/landscapes" /> } />
                <Route path="/search/forests" render={ () => <Redirect to ="/forests" /> } />
                <Route path="/search/beaches" render={ () => <Redirect to ="/beaches" /> } />
                <Route path="/search/:query" render={ () => <PhotoList data={this.state.photos}/> } />
                <Route component={NotFound}/>
              </Switch>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
