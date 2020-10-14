import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export default class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form className="search" onSubmit={this.onSubmit}>
        <input
          className="search-bar"
          type="text"
          value={this.state.title}
          name="title"
          placeholder="Add Todo ..."
          onChange={this.onChange}
        />
        <FontAwesomeIcon icon={faPlus} type="submit" value="Submit" className="btn" onClick={this.onSubmit} />
      </form>
    );
  }
}
