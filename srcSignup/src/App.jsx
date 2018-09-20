import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import Form from './components/Form';

import './App.css';

class App extends Component {
  state = {
    mounted: true
  };

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ mounted: false });
  };

  render() {
      return (
        <div className="app">
          <CSSTransitionGroup
            transitionName='fade'
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={true}
            transitionLeaveTimeout={500}
            >
            { this.state.mounted &&  <Form onSubmit={this.handleSubmit}/>}
          </CSSTransitionGroup>
        </div>
      );
    }
}

export default App;
