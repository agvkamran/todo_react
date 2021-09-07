import './App.css';
import React from 'react';
import Task from './components/task/task';

class App extends React.Component {

  state = {
    tasks: [],
    taskValue: ''
  };

  onChangeInputText = (e) => {
    let taskText = e.target.value;
    this.setState({
      taskValue: taskText
    })
  }

  identificator = 0;

  addTask = () => {
    let textObject = {
      id: this.identificator++,
      taskValue: this.state.taskValue
    };

    this.setState({
      tasks: [...this.state.tasks, textObject]
    });
  }


  render() {
    return (
      <main className='main'>
        <div className='todo_wrapper'>
          <header className='todo_header'></header>
          <section className='todo_inputs_section'>
            <input type='text' className='todo_input' onChange={this.onChangeInputText} value={this.state.taskValue} placeholder='Write your task' />
            <button className='todo_button' onClick={this.addTask}><i className="fas fa-plus"></i></button>
          </section>
          <section>
            {this.state.tasks.map((task) => {
              return <Task taskValue={task.taskValue} />
            })}
          </section>
          <footer className='todo_footer'>
            <a className='soc_wrappers soc_first' href="https://github.com/agvkamran/" target='_blank'>
              <i className="fab fa-github soc"></i>
            </a>
            <a className='soc_wrappers' href="https://bitbucket.org/agvkamran/" target='_blank'>
              <i className="fab fa-bitbucket soc"></i>
            </a>
            <a className='soc_wrappers soc_third' href="https://www.linkedin.com/" target='_blank'>
              <i className="fab fa-linkedin-in soc"></i>
            </a>
          </footer>
        </div>
      </main>
    );
  }
}

export default App;
