import React, { useEffect, useState } from "react";
import s from "./Specify.module.css";
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import Modal from "../Modal";
import {useLocation} from 'react-router-dom';


function Specify() {
    const [selection, setSelection] = useState('byTitle')
    const [input, setInput] = useState('')
    const [filmInfoModal, setFilmInfoModal] = useState(false)
    const [modalNeeded, setModalNeeded] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [filmInfoData, setFilmInfoData] = useState()
    const foundFilms = useSelector(authSelectors.getFoundFilms)
    const dispatch = useDispatch();
    const {pathname} = useLocation()

    useEffect(() => {
        localStorage.setItem('navigateTo', pathname)
        return dispatch(authOperations.clearLocalData())
    }, [])

    const onSelectHandlerSecond = e => {
        setSelection(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(authOperations.searchFilms({criteria: selection, input}))
    }

    const onDeleteHandler = async e => {
        e.stopPropagation()
        dispatch(authOperations.deleteFilm(e.target.id))
        alert('reload the page to see effect')
    }

    const onEditClick = e => {
        e.stopPropagation()
        setFilmInfoData(e.target.id)
        setEditModal(true)
        setFilmInfoModal(false)
        setModalNeeded(true)
    }

    const onDetailsClick = e => {
        setFilmInfoData(e.target.id)
        setFilmInfoModal(true)
        setEditModal(false)
        setModalNeeded(true)
    }

    const onCloseModalWindow = () => {
        setModalNeeded(false)
    }
  return <div className={s.mainDiv}>
      <form onSubmit={onSubmit} className={s.form}>
        <select onChange={onSelectHandlerSecond} defaultValue="byTitle" className={s.select} >
            <option value="byTitle">by title</option>
            <option value="byActor">by actor</option>
        </select>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className={s.btn}></input>
        <button type="submit" className={s.btn}>search</button>
      </form>
      {foundFilms.length > 0 && <>
      <ul className={s.list}>
          {foundFilms.map(el => <li key={el.title} className={s.listItem}>
            <div id={el.id} onClick={onDetailsClick} >
                <h3 id={el.id} onClick={onDetailsClick}>Title: {el.title}</h3>
                <button type="button" id={el.id}  onClick={onDeleteHandler} className={s.btn}>delete</button>
                <button type="button" id={el.id}  onClick={onEditClick} className={s.btn}>edit info</button>
            </div>
          </li>)}
        </ul>

      </>}
      {modalNeeded && filmInfoModal && <Modal idToSearch={filmInfoData} edit={editModal} onCloseModalWindow={onCloseModalWindow}/>}
      {modalNeeded && editModal && <Modal idToSearch={filmInfoData} edit={editModal} onCloseModalWindow={onCloseModalWindow}/>}
  </div>;
}

export default Specify;
