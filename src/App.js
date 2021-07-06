import React, { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      newTask: "",
      list: []
    }
  }

  updateInput(key, value){
    this.setState({
      [key]: value
    });
  }

  addTask(){
    const newTask={
      id: 1 + Math.random(),
      value: this.state.newTask.slice()
    };

    const list = [...this.state.list];

    list.push(newTask);

    this.setState({
      list,
      newTask:""
    });
  }

  deleteTask(id){
    const list = [...this.state.list];
    const updatedList = list.filter(task => task.id !== id);
    this.setState({list: updatedList});
  }

  render(){
    return(
      <div className="To Do List">
        <div>
          Add a task:
          <br/>
          <input
            type="text"
            placeholder="Type an task here..."
            value={this.state.newTask}
            onChange={e => this.updateInput("newTask", e.target.value)}
          />
          <button onClick = {() => this.addTask}>
            Add
          </button>
          <br/>
          <ul>
          {this.state.list.map(task => {
            return(
              <li key = {task.id}>
                {task.value}
                <button onClick = {() => this.deleteTask(task.id)}>
                X
                </button>
              </li>
            )
          })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;