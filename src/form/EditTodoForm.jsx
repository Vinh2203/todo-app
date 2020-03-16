import React, {useState,useEffect} from 'react';

const EditTodoForm = (props) => {

  const initTodo = props.todo;
  const [todo,setTodo] = useState(initTodo);

  const handleChange = e => {
    const {name, value} = e.target;
    setTodo({
      ...todo,
      [name]: value
    });
  }

  const handleCick = (e) =>{
    e.preventDefault();
    props.valideEdit(todo);
  }

  return(
    <div className="row">
      <div className="nine columns">
        <input className="u-full-width" type="text" name="name" value={todo.name} onChange={handleChange} placeholder="toto..." id="todo" />
      </div>
      <div className="three columns">
        <input className="button-primary" type="submit" onClick={handleCick} value="Valide" />
      </div>
    </div>
  )
}

export default EditTodoForm;
