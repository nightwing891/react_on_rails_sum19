import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class TodoForm extends Component {
  state = { name: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  // handleChangePhone = (e) => {
  //   const { name, value } = e.target
  //   this.setState({ phone: value })
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    // add the item
    this.props.add(this.state.name)
    // reset to default value in the state
    this.setState({ name: '' })
  }

  render() {
    // const name
    // name = this.state.name
    // const { name, phone, complete } = this.state
    const { name } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label='Todo'
          placeholder="Add a todo"
          required
          name='name'
          value={name}
          onChange={this.handleChange}
        />
        {/* <Form.Input 
          label='phone'
          placeholder="Add a phone"
          required
          name='phone'
          value={phone}
          onChange={this.handleChange}
        /> */}
        <Form.Button>Submit</Form.Button>
      </Form>    
    )
  }
}

export default TodoForm;