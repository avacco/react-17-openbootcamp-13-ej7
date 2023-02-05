import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/**
 * Componente que conecta la lista y las tareas, y las muestra.
 */
const TodoList = ({todos, onTodoClick}) => {
  return (
    <div>
      <h1>Tus tareas:</h1>
      <ul>
        {todos.map((todo, index) => 
          (
            <Todo
              key={index}
              {...todo} // id, text, completed
              alClick = {
                () => onTodoClick(todo.id)
              }
            />
          )
        )}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape( // Detalla la forma que debe tener el array de tareas
      {
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
      }
    ).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList;
