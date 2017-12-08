import React, { Component } from 'react';
import './Header.css';
import ToDoContainer from '../../containers/ToDoContainer.js';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitText = this.submitText.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitText(e) {
    e.preventDefault()
    const newIdea = Object.assign({}, this.state, { id: Date.now()})
    this.setState({ title: '', body: '' }, () => this.props.addToDo(newIdea))
  }

  render() {
    const { title, body } = this.state;

    return (
      <header>
        <form>
          <input 
            type='text' 
            name='title'
            value={ title }
            className='form-input title-input'
            onChange={ this.handleChange } />
          <textarea 
            type='text'
            name='body'
            value={ body }
            className='form-input' 
            onChange={ this.handleChange} />
          <button 
            type='submit' 
            className='form-submit'
            onClick={ this.submitText }
              >submit</button>
        </form>
      </header>
    )
  }
}

export default ToDoContainer(Header);