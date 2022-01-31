import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {authSelectors} from './redux/auth';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import Loader from './components/Loader';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import AddMovie from './components/AddMovie/AddMovie';
import MoviesList from './components/MoviesList/MoviesList';
import Navigation from './components/Navigation/Navigation';
import Specify from './components/Specify/Specify';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const getToken = useSelector(authSelectors.getToken)
  console.log(isLoggedIn)

  useEffect(() => {

    console.log(`useEffect:`, isLoggedIn)
    if (isLoggedIn) {
      navigate('/userPage');

    }
  }, [isLoggedIn])


  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/userPage" element={isLoggedIn ? <UserPage /> : <Navigate replace to="/home" /> } />
      <Route path="/addMovie" element={isLoggedIn ? <AddMovie /> : <Navigate replace to="/home" />} />
      <Route path="/listOfMovies" element={isLoggedIn ? <MoviesList /> : <Navigate replace to="/home" />} />
      <Route path="/specify" element={isLoggedIn ? <Specify /> : <Navigate replace to="/home" />} />
    </Routes>
    </>
  );
}

export default App;
