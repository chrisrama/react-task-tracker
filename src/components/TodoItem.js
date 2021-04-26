import React from 'react';
import TodoList from './TodoList.js'

class TodoItem extends React.Component{
  constructor() {
    super()
    this.state = {
      Todos: TodoList
    }
  }

  

  render(){
     const Todolist = this.state.Todos.map((Todo)=> {
          return (  
        <div key={Todo.id}>
        <input 
          type="checkbox" 
          key={Todo.id} 
          checked={Todo.completed} 
          onChange={() => {alert('Changes')}}
         />
          <h4 key={Todo.id} > {Todo.task}</h4>
        </div>  
        )
     })
  return (
      <div className="todo-item">
    <span className="todo-list">{Todolist}</span>  
      </div>
  )
  }
}


export default TodoItem;