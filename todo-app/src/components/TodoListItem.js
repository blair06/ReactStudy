import React from "react";
import "./TodoListItem.scss";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";
const TodoListItem = ({todo, onRemove}) => { //컴포넌트는 props 매개변수를 한개만 받기때문에 객체형으로 받는다.
    const{id,text, checked} = todo;
  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', {checked})}>
          {checked ? <MdCheckBox/>:<MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={()=> onRemove(id)}>
          <MdRemoveCircleOutline/>
      </div>
    </div>
  );
};

export default TodoListItem;
