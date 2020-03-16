import React,{useState} from 'react';
import AddTodoForm from './form/AddTodoForm';
import TodoView from './view/TodoView';
import EditTodoForm from './form/EditTodoForm';


const App = () =>{

  const listTodo = [];
  const [isEditing, setModeEdit] = useState(false);
  const [todoSelect,setTodoSelect] = useState({});
  const [todos,setTodo] = useState(listTodo);

  const addTodo = (todo) =>{
    todo.id = todos.length+1
    setTodo([...todos,todo]);
  }

  const deleteTodo = (id) =>{
    setTodo(todos.filter(todo => todo.id !== id));
  }

  const changeTodoSelect = (todo) =>{
    setTodoSelect(todo);
    setModeEdit(true);
  }

  const valideEdit = (todo) =>{
    setTodo(todos.map(item => item.id === todo.id? todo : item));
    setModeEdit(false);
  }

  return(
    <div className="container">
    {(isEditing == false)?<AddTodoForm addTodo={addTodo}/>:
    <EditTodoForm todo={todoSelect} valideEdit={valideEdit}/>}
  <TodoView listTodo={todos} deleteTodo={deleteTodo} changeTodoSelect={changeTodoSelect}/>
    </div>
  );
}

export default App;
