import React, { Component } from "react";

class Counter extends Component {
  /* constructor(props) {
    super(props);
    this.state = {
        number: 0,
      };
  }*/

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render(props) {
    const { number, fixedNumber } = this.state; //state를 조회할때는 this.state로 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number + 1,
              };
            },()=>{
                console.log("방금 state가 호출되었습니다.");
                console.log(this.state);
            });

          }
        }
        >
          +1
        </button>
        <h1>변하지 않는 값:{fixedNumber}</h1>
      </div>
    );
  }
}

export default Counter;
