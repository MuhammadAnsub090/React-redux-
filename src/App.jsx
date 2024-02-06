import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, editTodo } from "./config/reducers/todoslice";

const App = () => {
  const todoRef = useRef();
  const editRef = useRef();
  const [editingIndex, setEditingIndex] = useState(null);
  //useDispatch
  const dispatch = useDispatch();
  //useselector
  const todos = useSelector(state => state.todos);

  const addTodoReducer = (event) => {
    event.preventDefault();
    dispatch(addTodo({
      title: todoRef.current.value
    }));
    todoRef.current.value = '';
  };

  const deleteTodo = (index) => {
    dispatch(removeTodo({
      index: index
    }));
  };

  const startEditing = (index, title) => {
    setEditingIndex(index);
    editRef.current.value = title;
  };

  const saveEdit = () => {
    dispatch(editTodo({
      index: editingIndex,
      title: editRef.current.value
    }));
    setEditingIndex(null);
  };

  return (
    <>
    <div className="container">
    <div className="formInput">
      <h1>Hello User</h1>
      <form onSubmit={addTodoReducer}>
        <input type="text" placeholder="Add todo" ref={todoRef} />
        <button type="submit">Add todo</button>
      </form>
      </div>

      <ul>
        {todos.map((item, index) => (
          <li key={item.id}>
            {editingIndex === index ? (
              <>
                <input type="text" defaultValue={item.title} ref={editRef} />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {item.title}
                <button onClick={() => startEditing(index, item.title)}>Edit</button>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </>
  );
};

export default App;
