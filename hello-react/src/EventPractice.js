import React, {useState} from 'react';

const EventPractice = ()=> {
    const[form, setForm] = useState({
        username: '',
        message: ''
    });
    const {username,message} = form;
    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value
        }
        setForm(nextForm);
    }
    // const[username, setUsername] = useState('');
    // const onChangeMessage = (e)=>{setMessage(e.target.value)};
    // const onChangeUsername = (e) => {setUsername(e.target.value)};
    const onClick = () => {
        alert(username+ ':' +message);
        setForm({
            username:'',
            message: ''
        });
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
          name="username"
          onChange={onChange}/* this는 component */
          value={username}
        />
        <input
          type="text"
          placeholder="Message"
          name="message"
          onChange={onChange}/* this는 component */
          value={message}
        />
        <button onClick={onClick}>입력</button>{" "}
        {/* this는 component */}
      </div>
    )
}

export default EventPractice;