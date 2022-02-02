import React, { useEffect, useState, useRef } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';

const modalRoot = document.querySelector("#modal-root");
function Modal({ idToSearch, onCloseModalWindow, edit }) {

  const [newTitle, setNewTitle] = useState('')
  const [newYear, setNewYear] = useState('')
  const [newFormat, setNewFormat] = useState('')
  const [newActors, setNewActors] = useState('')

  const newTitleRef = useRef(null)
  const newYearRef = useRef(null)
  const newFormatRef = useRef(null)
  const newActorsRef = useRef(null)

  const filmInfo = useSelector(authSelectors.getOneFilm)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getFilm(idToSearch))

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onCloseModalWindow(e);
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onCloseModalWindow(e);
    }
  };

  const newChangeHandler = e => {
    switch(e.target.name) {
        case 'newTitle':
           return setNewTitle(e.target.value)
        case 'newYear':
            return setNewYear(e.target.value)
        // case 'newFormat':
        //     return setNewFormat(e.target.value)
        case 'newActors':
            return setNewActors(e.target.value)              
        default: 
           return
    }
}

const validationNewData = (data, refs) => {
  console.log(data);
  if(data.title && data.title === 0) {
    alert('title field is empty')
    return refs.newTitleRef.current.focus()
  }
  if(data.title && data.title.length < 2) {
    alert('title is too short')
    return refs.newTitleRef.current.focus()
    }
  if(data.year && isNaN(data.year)) {
    alert('year field is empty or year is not a number')
    return refs.newYearRef.current.focus()
    }
  if(data.actors && data.actors[0].length === 0) {
    alert('A movie should contain at least one actor')
    return refs.newActorsRef.current.focus()
  }
  return true
}

const onNewSubmitHandler = async e => {
  e.preventDefault()
  const dataToPatch = {}
  if(newTitle) dataToPatch.title = newTitle;
  if(newYear) dataToPatch.year = newYear;
  if(newFormat) dataToPatch.format = newFormat;
  if(newActors)  dataToPatch.actors = newActors.trim().split(',');

  const permission = validationNewData(dataToPatch, {newTitleRef, newYearRef, newActorsRef})
  if(!permission) return
  dispatch(authOperations.patchFilm({id: idToSearch, dataToPatch}))
}

  return !edit ? createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
      {filmInfo && <>
      <h3>{filmInfo.title}</h3>
        <ul className={s.list}>
        <li>Year: {filmInfo.year}</li>
        <li>Format: {filmInfo.format}</li>
        <li>Actors:
          <ul className={s.innerList}>
          {filmInfo.actors.map(actor => <li>{actor.name}</li>)}
          </ul>
        </li>
       </ul>
       </>}
      </div>
    </div>,
    modalRoot
  ) : createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modalSecond}>
        <div className={s.leftDiv}>
        {filmInfo && <>
        <h3>{filmInfo.title}</h3>
           <ul className={s.list}>
            <li>Year: {filmInfo.year}</li>
            <li>Format: {filmInfo.format}</li>
            <li>Actors:
              <ul className={s.innerList}>
              {filmInfo.actors.map(actor => <li>{actor.name}</li>)}
              </ul>
            </li>
          </ul>
          </>}
       </div>
       <div className={s.rightDiv}>
       Edit movie's info
        <form onSubmit={onNewSubmitHandler} className={s.form}>
            Title
            <input value={newTitle} ref={newTitleRef} onChange={newChangeHandler} name="newTitle"></input>
            year
            <input value={newYear} ref={newYearRef} onChange={newChangeHandler} name="newYear"></input>
            format 
            <select defaultValue="" onChange={(e) => {setNewFormat(e.target.value)}} className={s.select}>
            <option value="">don't change</option>
              <option value="DVD">DVD</option>
              <option value="VHS">VHS</option>
              <option value="Blu-Ray">Blu-Ray</option>
          </select>
            actors
            <input value={newActors} ref={newActorsRef} onChange={newChangeHandler} name="newActors"></input>
            <button type="submit" className={s.btn}>patch film</button>
        </form>
       </div>
      </div>
    </div>,
    modalRoot
  ) 
}

export default Modal;
