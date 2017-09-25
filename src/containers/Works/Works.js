import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Works.css';

class Works extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyNav);
  }

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/contact');
    }

    if (e.keyCode === 37) {
      history.push('/about');
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
  }
  render() {
    return (
      <div className="container-works">
        <h1 className="wip-text">
          Aww.. I'm still building this :(
          <br />
          Get back to <Link to="/">home</Link> instead
        </h1>
      </div>
    );
  }
}

export default Works;
