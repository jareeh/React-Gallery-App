import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

//App Components
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import NotFound from './Components/NotFound'
import apiKey from './config';
import PhotoList from './Components/PhotoList';


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
  }

  //Search handling method
  performSearch = (query = 'landscape') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => console.log(response))
      // .then(response => {

      //   if(query === 'landscapes'){
      //     this.setState({
      //       landscapes: response.data.photos.photo,
      //       loading: false
      //     });

      //   } else if (query === 'forests'){
      //     this.setState({
      //       forests: response.data.photos.photo,
      //       loading: false
      //     })

      //   } else if (query === 'beaches'){
      //     this.setState({
      //       forests: response.data.photos.photo,
      //       loading: false
      //     })

      //   } else {
      //     this.setState({
      //       photos: response.data.photos.photo,
      //       loading: false
      //     })
      //   }
      // })
      // .catch(error => {
      //   console.log('Error with axios fetching data', error)
      // })
  }
  
  render(){
    return (
      <BrowserRouter>
        <div>
          <h1>Jeff's React Gallery App</h1>
          <SearchForm />
          <Nav />
          {/* <PhotoList /> */}
            <Switch>
              <Route exact path="/" render={ () => <Redirect to ="/landscapes" /> } />
              <Route path="/landscapes" render={ () => <PhotoList /> } />
              <Route path="/forests" render={ () => <PhotoList /> } />
              <Route path="/beaches" render={ () => <PhotoList /> } />
              <Route />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;