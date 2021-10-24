import React from "react";
import { useDispatch } from "react-redux";
import { deleteNoteAC } from "../../redux/actions";
import './task.css';

const Task = ({ note }) => {
    const dispatch = useDispatch();
    // console.log(this.props)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isDisabled: true,
    //         name: this.props.task.taskName,
    //         about: this.props.task.aboutTask
    //     }
    // }

    // updateTask = () => {
    //     this.setState({ isDisabled: true });

    //     let task = {
    //         id: this.props.task.id,
    //         taskName: this.state.name,
    //         aboutTask: this.state.about
    //     };

    //     this.props.updateTask(task);
    // }

    // deleteTask = (id) => {
    //     this.props.deleteTask(id);
    // }

    const onTitleChange = (e) => {

    }

    const onDescriptionChange = (e) => {
        // this.setState({
        //     about: e.target.value
        // })
    }

    const delNote = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: note.id})
        };

        console.log(requestOptions);

        await fetch('http://localhost:8080/note', requestOptions)
            .then(response => response.text())
            .then(response => console.log(response));
    }

    const deleteNote = () => {
        console.log('note id', note.id)
        delNote();
        dispatch(deleteNoteAC(note.id));
    }

    return (
        <div className='task'>
            <div className='task_paragraph'>
                <span><i className="fas fa-paperclip task_icon"></i></span>
                <div className='tasks_info'>
                    <input className='task_name' onChange={onTitleChange} value={note.title} />
                    <input className='about_task' onChange={onDescriptionChange} value={note.description} />
                </div>
            </div>
            <div className='task_buttons'>
                <button className='trash_button' onClick={deleteNote}><i className="fas fa-trash task_icon_buttons"></i></button>
                {/* <button className='edit_button' onClick={() => this.setState({ isDisabled: false })}><i className="fas fa-pen-square task_icon_buttons"></i></button> */}
                {/* <button className='save_button' onClick={this.updateTask}><i className="fas fa-save task_icon_buttons"></i></button> */}
            </div>
        </div>
    )
}

export default Task;


