import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { setDescriptionAC, setNoteAC, setNotesAC, setTitleAC } from './redux/actions';
import Task from './components/task/task';

const App = () => {

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);

  const getNotes = async () => {
    const response = await fetch('http://localhost:8080/note', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .catch(e => console.log('getNotes', e));
    console.log(response);
    // return response;

    dispatch(setNotesAC(response))
  }

  useEffect(() => {
    getNotes();
  }, [])


  const onChangeTitle = (e) => {
    const title = e.target.value;
    dispatch(setTitleAC(title))
  }

  const onChangeDescription = (e) => {
    const description = e.target.value;
    dispatch(setDescriptionAC(description));
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: state.taskPage.title, description: state.taskPage.description })
  };

  const setNote = async () => {
    await fetch('http://localhost:8080/note', requestOptions);
    await getNotes();
  }

  const addNote = () => {
    setNote();
    dispatch(setTitleAC(""));
    dispatch(setDescriptionAC(""));
  }

  return (
    <main className='main'>
      <div className='todo_wrapper'>
        <Header />
        <section className='todo_inputs_section'>
          <div className='inputs_wrapper'>
            <input maxLength="30" type='text' className='todo_input task_name_input' onChange={onChangeTitle} value={state.taskPage.title} placeholder='Write title' />
            <textarea maxLength="70" type='text' className='todo_input about_task_input' onChange={onChangeDescription} value={state.taskPage.description} placeholder='Write description' />
          </div>
          <button className='todo_button' onClick={addNote}><i className="fas fa-plus"></i></button>
        </section>
        <section className='section_app'>
            {state.taskPage.notes?.map((note, index) => {
              return <Task note={note} key={index}
              // onChangeTitle={onChangeTitle} 
              //  deleteNote={deleteNote} updateNote={updateNote}
              />
            })}
        </section>
        <Footer />
      </div>
    </main>
  );
}

export default App;

