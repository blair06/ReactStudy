import React, {useState, useCallback } from 'react';
import './TodoInsert.scss';
import {MdAdd} from 'react-icons/md';
const TodoInsert = ({onInsert}) => {
    const[value,setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit =useCallback(e=>{
        onInsert(value);
        setValue('');
        e.preventDefault(); //새로고침 방지

    },[onInsert,value]);
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할일을 입력하세요" value={value} onChange={onChange}></input>
            <button type="submit">
                <MdAdd/>
            </button>

        </form>
    );
};

export default TodoInsert;