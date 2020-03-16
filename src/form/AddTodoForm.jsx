import React, {useState,useEffect} from 'react';

const AddTodoForm = (props) => {

  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  const initTodo = {id:null ,name: '', date : date+' - '+time};
  const [todo,setTodo] = useState(initTodo);
  const handleChange = e => {
    const {name, value} = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  }

  const handleCick = (e) =>{
    e.preventDefault();
    props.addTodo(todo);
    setTodo(initTodo);
  }

  return(
    <div className="row">
      <div className="nine columns">
        <input className="u-full-width" type="text" name="name" value={todo.name} onChange={handleChange} placeholder="toto..." id="todo" />
      </div>
      <div className="three columns">
        <input className="button-primary" type="submit" onClick={handleCick} value="submit input" />
      </div>
    </div>
  )
}

export default AddTodoForm;
