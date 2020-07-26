import React, {useState} from 'react';

const IterationSample = () => {
    const[names, setNames] = useState([
        {id:1, text:'눈사람'},
        {id:2, text:'얼음'},
        {id:3, text:'눈'},
        {id:4, text:'바람'},
    ]);

    const [input, setInput] = useState('');
    const [nextId, setNextId] = useState(5);//새로운값은 5부터 부여받음

    const onChange = (e) => {
        setInput(
            e.target.value
        );
    }
    const onClick = ()=>{
        const nextName = names.concat({
            id: nextId,
            text: input
        });
        setNextId(nextId + 1);
        setNames(nextName); // 다음에 들어올 값을 위해서 1증가
        setInput('');
    }
    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namelist = names.map(name => <li key = {name.id} onDoubleClick={()=>onRemove(name.id)}>{name.text}</li>);
    return(
        <>
            <input type='text' value = {input} onChange = {onChange}></input>
            <button onClick={onClick}> 추가하기</button>
            <ul>
                {namelist}
            </ul>
        </>
        
    )
}

export default IterationSample;