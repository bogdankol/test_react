import { useEffect, useState } from "react";
import s from "./DeleteModal.module.css";
import { createPortal } from "react-dom";
import {authOperations} from '../../redux/auth';
import {useDispatch} from 'react-redux';
const modalRoot = document.querySelector("#modal-root");

function DeleteModal({idToSearch, setModalOnDeleteNeeded, onDeleteHandler, onCloseModalWindow}) {
    const [deleteMovie, setDeleteMovie] = useState(false);
    const dispatch = useDispatch()

    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
          onCloseModalWindow(e);
        }
      };

    useEffect(() => {
        if(deleteMovie) {
            (async function () {
                dispatch(authOperations.getFilms())
            })()
        }
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
    }
    }, [deleteMovie])

    const deleteModalClick = e => {
        e.stopPropagation()
        setDeleteMovie(true)
        console.log(idToSearch)
        dispatch(authOperations.deleteFilm(idToSearch))
        onDeleteHandler()
        setDeleteMovie(false)
    }

    const handleBackdropClick = (e) => {
        if (e.currentTarget === e.target) {
          onCloseModalWindow(e);
        }
      };
    
  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
    <div className={s.modal}>
      <h3>Are you sure?</h3>
      <div className={s.btnDiv}>
      <button type="button" onClick={deleteModalClick} className={s.btn}>Yes</button>
      <button type="button" onClick={() => setModalOnDeleteNeeded(false)} className={s.btn}>No</button>
      </div>
      
  </div>
  </div>
  , modalRoot)
}

export default DeleteModal;
