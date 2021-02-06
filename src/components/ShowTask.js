import React, { Component } from "react";

class ShowTask extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.length > 0 ? (
          <SmallTask
            todos={this.props.todos}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
          />
        ) : (
          <h1>No Task</h1>
        )}
      </div>
    );
  }
}

class SmallTask extends React.Component {
  render() {
    return (
      <>
        {this.props.todos.map((todo, i) => (
          <SingleTaskComponent
            i={i}
            todo={todo}
            deleteTask={this.props.deleteTask}
            editTask={this.props.editTask}
          />
        ))}
      </>
    );
  }
}

class SingleTaskComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    };
  }

  switchToEdit = () => {
    console.log("Switch To Edit Button Clicked!!!");
    this.setState({
      isEditing: true
    });
  };

  cancelEditing = () => {
    this.setState({
      isEditing: false
    });
  };

  render() {
    return (
      <>
        {this.state.isEditing ? (
          <TaskEdit
            i={this.props.i}
            todo={this.props.todo}
            cancelEditing={this.cancelEditing}
            editTask={this.props.editTask}
          />
        ) : (
          <SingleTask
            i={this.props.i}
            todo={this.props.todo}
            deleteTask={this.props.deleteTask}
            switchToEdit={this.switchToEdit}
          />
        )}
      </>
    );
  }
}

class SingleTask extends React.Component {
  render() {
    return (
      <>
        <h4 key={this.props.i}>
          <li>{this.props.todo}</li>
          <button value={this.props.i} onClick={this.props.switchToEdit}>
            Edit
          </button>
          <button
            value={this.props.i}
            onClick={this.props.deleteTask.bind(this, this.props.i)}
          >
            Delete
          </button>
        </h4>
      </>
    );
  }
}

class TaskEdit extends React.Component {
  constructor(props) {
    super();
    this.state = {
      editFormTaskName: props.todo
    };
  }

  handleOnChange = (e) => {
    this.setState({
      editFormTaskName: e.target.value
    });
  };

  render() {
    return (
      <form
        onSubmit={this.props.editTask.bind(
          this,
          this.props.i,
          this.state.editFormTaskName
        )}
      >
        <input
          type="text"
          value={this.state.editFormTaskName}
          onChange={this.handleOnChange}
        />
        <button
          onClick={this.props.editTask.bind(
            this,
            this.props.i,
            this.state.editFormTaskName
          )}
        >
          Save
        </button>
        <button onClick={this.props.cancelEditing}>Cancel</button>
      </form>
    );
  }
}
export default ShowTask;
