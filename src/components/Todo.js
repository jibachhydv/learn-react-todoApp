import React, { Component } from "react";

// import Title Component
import Title from "./Title";

// import Show Task Componen
import ShowTask from "./ShowTask";

// import Form for adding task
import Form from "./Form";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };

    // this.deleteTask = this.deleteTask.bind(this);
  }

  addTask = (task) => {
    this.setState({
      todos: [...this.state.todos, task]
    });
  };

  deleteTask = (ids) => {
    const remainder = this.state.todos.filter((todo, id) => {
      if (id !== ids) return todo;
    });
    // Update state with filter
    this.setState({ todos: remainder });
  };

  editTask = (ids, newName) => {
    console.log("Editing ...");
    console.log(this.state.todos);
  };

  render() {
    return (
      <>
        <Title />
        <Form addTask={this.addTask} todos={this.state.todos} />
        <ShowTask
          todos={this.state.todos}
          deleteTask={this.deleteTask}
          editTask={this.editTask}
        />
      </>
    );
  }
}

export default Todo;
