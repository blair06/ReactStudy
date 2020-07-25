import React, { Component } from "react";

class ScrollBox extends Component {
  render() {
    const style = {
      border: "1px solid black",
      height: "300px",
      width: "300px",
      overflow: "auto",
      position: "relative",
    };

    const innerStyle = {
      width: "100%",
      height: "650px",
      background: "linear-gradient(white,black)",
    };

    scrollToBottom = () =>{
      const{scrollHeight, clientHeight} = this.scroll;
      this.scroll.scrollTop = scrollHeight - clientHeight;
    }
    return (
      <div
        style={style}
        ref={(ref) => {
          this.scroll = ref;
        }}
      >
        <div style={innerStyle}></div>
      </div>
    );
  }
}
export default ScrollBox;