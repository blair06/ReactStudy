import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
const App = () => {
  const [todos, setTodos] =useState([{
    id:1,
    text:'리액트 기초 알아보기',
    checked:true,
  }, {
    id:2,
    text:'리액트 알듯말듯하다..',
    checked:true,
  }, {
    id:3,
    text:'지금은 새벽3시',
    checked:false,
  }]
  )

  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text: text,
      checked:false
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos],); //두번째 파라미터엔 어떤값이 바뀌었을때 함수를 실행할지 배열로 지정
 
 const onRemove = useCallback(id=>{
   setTodos(todos.filter(todo=> todo !== id ));
 },[todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove}/>
    </TodoTemplate>
    
  );
};

export default App;