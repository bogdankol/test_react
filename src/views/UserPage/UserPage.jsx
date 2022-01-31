import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import Modal from '../../components/Modal';

function UserPage() {
    const [modalNeeded, setModalNeeded] = useState(false)
    const [idToSearch, setIdToSearch] = useState(null)
    const dispatch = useDispatch();
    const createdFilm = useSelector(authSelectors.getCreatedFilm)
    const [newTitle, setNewTitle] = useState('')
    const [newYear, setNewYear] = useState('')
    const [newFormat, setNewFormat] = useState('')
    const [newActors, setNewActors] = useState('')
    const [file, setFile] = useState(null);

    // useEffect(() => {
    //     (async function () {
    //         // const data = await axios.get(`http://localhost:8000/api/v1/movies?sort=title&order=ASC&limit=20&offset=0&title=film7`)
    //         dispatch(authOperations.getFilms())

    //     })()
    // }, [createdFilm])

    const newChangeHandler = e => {
        switch(e.target.name) {
            case 'newTitle':
               return setNewTitle(e.target.value)
            case 'newYear':
                return setNewYear(e.target.value)
            case 'newFormat':
                return setNewFormat(e.target.value)
            case 'newActors':
                return setNewActors(e.target.value)              
            default: 
               return
        }
    }


    const onNewSubmitHandler = async e => {
        e.preventDefault()
        const dataToPatch = {}
        if(newTitle) dataToPatch.title = newTitle;
        if(newYear) dataToPatch.year = newYear;
        if(newFormat) dataToPatch.format = newFormat.toUpperCase();
        if(newActors)  dataToPatch.actors = newActors.trim().split(',');
        // const {data} = await axios.patch(`http://localhost:8000/api/v1/movies/10`, dataToPatch)

        dispatch(authOperations.patchFilm({id: 10, dataToPatch}))
    }

    const onFileSubmit = async e => {
        e.preventDefault();
        const movies = new FormData()
        movies.append("movies", file, "movies.txt")
        const result = await axios.post(`http://localhost:8000/api/v1/movies/import`, movies)
        console.log(result);
    }

    const onClickHandler = e => {
        dispatch(authOperations.deleteFilm(e.target.id))
    }

    const OnMOdalBtnHandler = e => {
        setIdToSearch(e.target.id)
        setModalNeeded(true)
    }
    const onCloseModalWindow = () => {
        setModalNeeded(false)
    }

  return <div>
     
      DELETE FILM 
      <button type="button" onClick={onClickHandler} id={4}>DELETE FILM BUTTON</button>
      <br />
      <br />
      GET FILM BY ID
      <button type="button" onClick={OnMOdalBtnHandler} id={10}>modal get</button>
      {modalNeeded && <Modal idToSearch={idToSearch} onCloseModalWindow={onCloseModalWindow}/>}
      <br />
      <br />
      PATCH FILM
      <form onSubmit={onNewSubmitHandler}>
          Title
          <input value={newTitle} onChange={newChangeHandler} name="newTitle"></input>
          year
          <input value={newYear} onChange={newChangeHandler} name="newYear"></input>
          format 
          <input value={newFormat} onChange={newChangeHandler} name="newFormat"></input>
          actors
          <input value={newActors} onChange={newChangeHandler} name="newActors"></input>
          <button type="submit">patch film</button>
      </form>
      <br />
      <br />
      <form onSubmit={onFileSubmit}>
          <input type="file" onChange={(e) => setFile(e.target.files[0])}></input>
          <button type="submit">send file</button>
      </form>
  </div>;
}

export default UserPage;
