import React, { useState } from 'react';
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
  return (
    <TodoTemplate>
      <TodoInsert/>
      <TodoList todos={todos}/>
    </TodoTemplate>
    
  );
};

export default App;