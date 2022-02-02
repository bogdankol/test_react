import {useState, useEffect} from 'react';
import axios from 'axios';
import {authOperations} from '../../redux/auth';
import {useDispatch} from 'react-redux';
import s from './UserPage.module.css';
import {useLocation} from 'react-router-dom';

function UserPage() {
    const {pathname} = useLocation()

    useEffect(() => {
        localStorage.setItem('navigateTo', pathname)
      })
    // const [file, setFile] = useState(null);

    // const onFileSubmit = async e => {
    //     e.preventDefault();
    //     const movies = new FormData()
    //     movies.append("movies", file, "movies.txt")
    //     const result = await axios.post(`http://localhost:8000/api/v1/movies/import`, movies)
    // }

  return <div className={s.mainDiv}>
     
      <h2>Choose what do you want to do</h2>
      {/* <form onSubmit={onFileSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
          <button type="submit">send file</button>
      </form> */}
  </div>;
}

export default UserPage;
