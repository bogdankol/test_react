import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import s from './AddMovie.module.css';

function AddMovie() {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [format, setFormat] = useState('')
  const [actors, setActors] = useState('')
  const dispatch = useDispatch();
  const createdFilm = useSelector(authSelectors.getCreatedFilm)

  const titleRef = useRef(null)
  const yearRef = useRef(null)
  const formatRef = useRef(null)
  const actorsRef = useRef(null)

  const validationData = (data, refs) => {
    if(!data.title) return refs.titleRef.current.focus()
    if(!data.year || isNaN(data.year)) return refs.yearRef.current.focus()
    if(!data.format) return refs.formatRef.current.focus()
    if(data.actors.length === 0) return refs.actorsRef.current.focus()
    return true
  }

  const onChangeHandler = e => {
    switch(e.target.name) {
        case 'title':
          return setTitle(e.target.value)
        case 'year':
            return setYear(e.target.value)
        case 'format':
            return setFormat(e.target.value)
        case 'actors':
            return setActors(e.target.value)              
        default: 
          return
    }
  }

  const onSubmitHandler = async e => {
    e.preventDefault()
    const data = {
        title, year, format: format.toUpperCase(), actors: actors.trim().split(',')
    }
    const result = validationData(data, {titleRef, yearRef, formatRef, actorsRef})
    if(!result) return
    dispatch(authOperations.createFilm(data))
  }

  return <div className={s.mainDiv}> 
    CREATE NEW FILM FORM
      <form onSubmit={onSubmitHandler} className={s.form}>
        title
        <input ref={titleRef} name="title" value={title} onChange={onChangeHandler}></input>
        year
        <input ref={yearRef} name="year" value={year} onChange={onChangeHandler}></input>
        format
        <input ref={formatRef} name="format" value={format} onChange={onChangeHandler}></input>
        actors
        <input ref={actorsRef} name="actors" value={actors} onChange={onChangeHandler}></input>
        <button type="submit" className={s.btn}>create</button>
      </form>
      {createdFilm && 
      <div className={s.newFilmDiv}>
        <h4>Created film:</h4>
      <ul className={s.list}>
        <li className={s.listItem}>Title: <h4>{createdFilm.title}</h4></li>
        <li className={s.listItem}>Year: {createdFilm.year}</li>
        <li className={s.listItem}>Format: {createdFilm.format}</li>
        <li> Actors:
          <ul>
          {createdFilm.actors.map(el => <li>{el.name}</li>)}
          </ul>
        </li>
      </ul>
      </div>
      }
  </div>;
}

export default AddMovie;
