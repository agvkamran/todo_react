import React from "react";
import './task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: true,
            name: this.props.task.taskName,
            about: this.props.task.aboutTask
        }
    }

    updateTask = () => {
        this.setState({ isDisabled: true });

        let task = {
            id: this.props.task.id,
            taskName: this.state.name,
            aboutTask: this.state.about
        };

        this.props.updateTask(task);
    }

    deleteTask = (id) => {
        this.props.deleteTask(id);
    }

    onNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onAboutChange = (e) => {
        this.setState({
            about: e.target.value
        })
    }

    render() {
        return (
            <div className='task'>
                <div className='task_paragraph'>
                    <span><i className="fas fa-paperclip task_icon"></i></span>
                    <div className='tasks_info'>
                        <input className='task_name' onChange={this.onNameChange} value={this.state.name} disabled={this.state.isDisabled} />
                        <input className='about_task' onChange={this.onAboutChange} value={this.state.about} disabled={this.state.isDisabled} />
                    </div>
                </div>
                <div className='task_buttons'>
                    <button className='trash_button' onClick={() => this.deleteTask(this.props.task.id)}><i className="fas fa-trash task_icon_buttons"></i></button>
                    <button className='edit_button' onClick={() => this.setState({ isDisabled: false })}><i className="fas fa-pen-square task_icon_buttons"></i></button>
                    <button className='save_button' onClick={this.updateTask}><i className="fas fa-save task_icon_buttons"></i></button>
                </div>
            </div>
        )
    }
}

export default Task;


