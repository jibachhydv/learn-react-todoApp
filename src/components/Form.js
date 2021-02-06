import React, { Component } from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      taskName: ""
    };
  }

  handleOnChange = (e) => {
    this.setState({
      taskName: e.target.value
    });
  };

  handleButtonOnClick = (e) => {
    e.preventDefault();

    if (this.state.taskName.length <= 0 || this.props.todos.indexOf(this.state.taskName) !== -1) {
      console.log("disabled" + this.state.taskName.length);
      alert("error")
    } else {
      const taskName = this.state.taskName;
      this.props.addTask(taskName);
      this.setState({
        taskName: ""
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleButtonOnClick}>
        <input
          type="text"
          value={this.state.taskName}
          onChange={this.handleOnChange}
        />
        <input type="submit" value="Add Task" />
      </form>
    );
  }
}

export default Form;
