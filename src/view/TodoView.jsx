import React from 'react';

const TodoView = (props) =>{

  return(
    <table className="u-full-width">
      <thead>
        <tr>
          <th>Todo</th>
          <th>Date</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.listTodo.map(todo => {
          const {id,name,date} = todo;
          return (<tr key={id}>
            <td>{name}</td>
          <td>{date}</td>
        <td><input className="button-primary" type="button" onClick={() => props.deleteTodo(id)} value="Delete" /></td>
      <td><input className="button-primary" type="button" value="Edit" onClick={() => props.changeTodoSelect(todo)}/></td>
          </tr>)
        })}
      </tbody>
    </table>
  )
}

export default TodoView;
