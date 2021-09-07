import React from "react";
import './task.css';

class Task extends React.Component {
    render() {
        return (
            <div className='task'>
                {console.log('task props', this.props)}
                <div className='task_paragraph'>
                    <span><i class="fas fa-check-circle task_icon"></i></span>
                    <p className='paragraph'>{this.props.taskValue}</p>
                </div>
                <div className='task_buttons'>
                    <i class="fas fa-trash task_icon_buttons"></i>
                    <i class="fas fa-pen-square task_icon_buttons"></i>
                    <i class="fas fa-save task_icon_buttons"></i>
                </div>
            </div>
        )
    }
}

export default Task;


