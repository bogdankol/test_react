import './App.css';
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authOperations, authSelectors} from './redux/auth';
import {
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import HomePage from './views/HomePage';
import UserPage from './views/UserPage';
import AddMovie from './components/AddMovie/AddMovie';
import MoviesList from './components/MoviesList/MoviesList';
import Navigation from './components/Navigation/Navigation';
import Specify from './components/Specify/Specify';

function App() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const dispatch = useDispatch();
  // const getToken = useSelector(authSelectors.getToken)

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
    if (isLoggedIn && localStorage.getItem('navigateTo')) {
      navigate(localStorage.getItem('navigateTo'));
      console.log(localStorage.getItem('navigateTo'))
    }
  }, [isLoggedIn])


  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={isLoggedIn ? <Navigate replace to='/userPage' /> : <HomePage />} />
      <Route path="/userPage" element={isLoggedIn ? <UserPage /> : <Navigate replace to="/home" /> } />
      <Route path="/addMovie" element={isLoggedIn ? <AddMovie /> : <Navigate replace to="/home" />} />
      <Route path="/listOfMovies" element={isLoggedIn ? <MoviesList /> : <Navigate replace to="/home" />} />
      <Route path="/specify" element={isLoggedIn ? <Specify /> : <Navigate replace to="/home" />} />
    </Routes>
    </>
  );
}

export default App;
