import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./config/reducers/todoslice";

const App = () => {
  const todoRef = useRef();

  //dispatch
  const dispatch = useDispatch()

  const addTodoReducer = (event) => {
    event.preventDefault();
    console.log(todoRef.current.value);
    dispatch(addTodo)
  };
  return (
    <>
    <h1>Hello User </h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder="Add todo" ref={todoRef} />
        <button type="submit">Addtodo</button>
      </form>
    </>
  );
};

export default App;
