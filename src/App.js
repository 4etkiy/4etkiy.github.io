import React from 'react';
import './App.css';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import MoviePage from './pages/MoviePage/MoviePage';
import { Route, HashRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <HashRouter>
      <Route exact path='/' component={MovieListPage} />

      <Route path='/movie/:movieId' component={MoviePage} />
    </HashRouter>
  )
}

export default App;