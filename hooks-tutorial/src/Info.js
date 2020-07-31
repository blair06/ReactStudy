import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');

  const changeNick = (e) => {
    setNick(e.target.value);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  return (
      <div>
          <div>
              <input value = {name} onChange={changeName}></input>
              <input value = {nick} onChange={changeNick}></input>
          </div>
          <div>
              <b>이름:</b> {name}
              <b>닉네임:</b> {nick}
          </div>
      </div>
  );

};

export default Info;
