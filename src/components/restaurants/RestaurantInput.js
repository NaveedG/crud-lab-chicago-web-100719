import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({ text: event.target.value })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            value={this.state.text}
            placeholder='add restaurant'
            onChange={(event) => this.handleOnChange(event)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
