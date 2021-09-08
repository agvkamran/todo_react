import './App.css';
import React from 'react';
import Header from './components/header/header';
import Task from './components/task/task';
import Footer from './components/footer/footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: '',
      aboutTask: '',
      id: 0,
      tasks: []
    };
  }

  onChangeTaskName = (e) => {
    let taskText = e.target.value;
    this.setState({
      taskName: taskText
    })
  }

  onChangeAboutTask = (e) => {
    let aboutTaskText = e.target.value;
    this.setState({
      aboutTask: aboutTaskText
    })
  }

  addTask = () => {
    let textObject = {
      id: this.state.id++,
      taskName: this.state.taskName,
      aboutTask: this.state.aboutTask
    };

    if (textObject.taskName.length !== 0 && textObject.aboutTask.length !== 0) {
      this.setState({
        tasks: [...this.state.tasks, textObject]
      });
      this.state.taskName = '';
      this.state.aboutTask = '';
    }
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.id !== id
      })
    })
  }

  updateTask = (task) => {
    let idx = this.state.tasks.findIndex(t => t.id === task.id);

    this.setState({
      tasks: [...this.state.tasks.slice(0, idx), task, ...this.state.tasks.slice(idx + 1, this.state.tasks.length)]
    });
  }

  render() {
    return (
      <main className='main'>
        <div className='todo_wrapper'>
          <Header />
          <section className='todo_inputs_section'>
            <div className='inputs_wrapper'>
              <input maxLength="30" type='text' className='todo_input task_name_input' onChange={this.onChangeTaskName} value={this.state.taskName} placeholder='Write your task name' />
              <textarea maxLength="70" type='text' className='todo_input about_task_input' onChange={this.onChangeAboutTask} value={this.state.aboutTask} placeholder='Write about your task' />
            </div>
            <button className='todo_button' onClick={this.addTask}><i className="fas fa-plus"></i></button>
          </section>
          <section>
            {this.state.tasks.map((task, index) => {
              return <Task task={task} key={index} onChangeTaskName={this.onChangeTaskName} deleteTask={this.deleteTask} updateTask={this.updateTask} />
            })}
          </section>
          <Footer />
        </div>
      </main>
    );
  }
}

export default App;

