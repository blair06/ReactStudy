import React, {useState} from 'react';

const EventPractice = ()=> {
    const[message,setMessage] = useState('');
    const[username, setUsername] = useState('');
    const onChangeMessage = (e)=>{setMessage(e.target.value)};
    const onChangeUsername = (e) => {setUsername(e.target.value)};
    const onClick = () => {
        alert(username+ ':' +message);
        setUsername('');
        setMessage('');
    }
    const onEnter = (e) => {
        if(e.key = 'Enter'){
            onClick();
        }
    }
    return(
        <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          placeholder="username"
          name="message"
          onChange={onChangeUsername}/* this는 component */
          value={username}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={onChangeMessage}/* this는 component */
          value={message}
        />
        <button onClick={onClick}>입력</button>{" "}
        {/* this는 component */}
      </div>
    )
}

export default EventPractice;