import {useState, useEffect} from 'react';
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import Modal from '../Modal';
import s from './MoviesList.module.css';

function MoviesList() {
    const dispatch = useDispatch();
    const userFilms = useSelector(authSelectors.getFilms)
    const [filmInfoModal, setFilmInfoModal] = useState(false)
    const [modalNeeded, setModalNeeded] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [filmInfoData, setFilmInfoData] = useState()
    const [deleted, setDeleted] = useState(false)

    useEffect(() => {
        (async function () {
            dispatch(authOperations.getFilms())
        })()
    }, [deleted])

    const onDeleteHandler = async e => {
        e.stopPropagation()
        dispatch(authOperations.deleteFilm(e.target.id))
        setTimeout(() => setDeleted(!deleted), 1000)
    }

    const onEditClick = e => {
        e.stopPropagation()
        setFilmInfoData(e.target.id)
        setEditModal(true)
        setFilmInfoModal(false)
        setModalNeeded(true)
    }

    const onDetailsClick = e => {
        e.stopPropagation()
        setFilmInfoData(e.target.id)
        setFilmInfoModal(true)
        setEditModal(false)
        setModalNeeded(true)
    }

    const onCloseModalWindow = () => {
        setModalNeeded(false)
    }

  return <div className={s.mainDiv}>
      <h2>Here you can see all your created movies.</h2>
      {userFilms.length > 0 && 
      <ul className={s.list}>
          {userFilms.map(el => <li key={el.title} className={s.listItem} id={el.id} onClick={onDetailsClick}>
              <h3 id={el.id} onClick={onDetailsClick}>Title: {el.title}</h3>
              <button type="button" id={el.id} onClick={onDeleteHandler} className={s.btn}>delete</button>
              <button type="button" id={el.id} onClick={onEditClick} className={s.btn}>edit info</button>
              </li>)
            }
      </ul>
      }
      {modalNeeded && filmInfoModal && <Modal idToSearch={filmInfoData} edit={editModal} onCloseModalWindow={onCloseModalWindow}/>}
      {modalNeeded && editModal && <Modal idToSearch={filmInfoData} edit={editModal} onCloseModalWindow={onCloseModalWindow}/>}
      </div>;
}

export default MoviesList;
