import React, { useEffect, useState } from "react";
import s from "./Modal.module.css";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import axios from "axios";
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';

const modalRoot = document.querySelector("#modal-root");
function Modal({ idToSearch, onCloseModalWindow, edit }) {

  const [newTitle, setNewTitle] = useState('')
  const [newYear, setNewYear] = useState('')
  const [newFormat, setNewFormat] = useState('')
  const [newActors, setNewActors] = useState('')
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
  if(newFormat && newFormat === "dvd" || newFormat === "VHS" || newFormat === "vhs" || newFormat === "DVD") dataToPatch.format = newFormat.toUpperCase();
  if(newActors)  dataToPatch.actors = newActors.trim().split(',');

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
            <input value={newTitle} onChange={newChangeHandler} name="newTitle"></input>
            year
            <input value={newYear} onChange={newChangeHandler} name="newYear"></input>
            format 
            <input value={newFormat} onChange={newChangeHandler} name="newFormat"></input>
            actors
            <input value={newActors} onChange={newChangeHandler} name="newActors"></input>
            <button type="submit" className={s.btn}>patch film</button>
        </form>
       </div>
      </div>
    </div>,
    modalRoot
  ) 
}

export default Modal;
