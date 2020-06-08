import React from 'react';
import './App.css';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviePage from './pages/MoviePage/MoviePage';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <Route exact path='/' component={MovieListPage} />

      <Route path='/movie/:movieId' component={MoviePage} />
    </div>
  )
}

export default App;