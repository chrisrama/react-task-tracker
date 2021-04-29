import React from 'react';
import TodoList from './TodoList.js'

class TodoItem extends React.Component{
  constructor() {
    super()
    this.state = {
      Todos: TodoList
    }
       this.handleclick = this.handleclick.bind(this);

  }
  handleclick (id) {
  
  }

  render(){
     const Todolist = this.state.Todos.map((Todo)=> {
          return (  
        <div key={Todo.id}>
        <input 
          type="checkbox" 
          key={Todo.id} 
          checked={Todo.completed} 
          onChange={() => {alert('Boutton was Changes')}}
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