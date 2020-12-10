import React, { Component } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(results => { this.setState({students:results.data})})
  }

  render() {
    const students = this.state.students.map((element, i) => (
      <Link to={`/student/${element.id}`} key={i}>

        <h3 key={ i }>{element.first_name} {element.last_name}</h3>
      </Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students}

      </div>
    )
  }
}