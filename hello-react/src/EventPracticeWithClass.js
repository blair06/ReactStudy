import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };
  handleClick = () => {
    alert(this.state.message);// this는 component
    this.setState({ message: "" });/* this는 component */
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          placeholder="아무거나 입력해보세요"
          name="message"
          onChange={this.handleChange}/* this는 component */
          value={this.state.message}
        />
        <button onClick={this.handleClick}>입력</button>{" "}
        {/* this는 component */}
      </div>
    );
  }
}

export default EventPractice;
