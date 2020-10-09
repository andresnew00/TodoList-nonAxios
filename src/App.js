import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/layout/Header";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import About from "./Components/pages/About";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with Wife",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  //Toggle Completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteItem = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  markComplete={this.markComplete}
                  todos={this.state.todos}
                  deleteItem={this.deleteItem}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}
export default App;
