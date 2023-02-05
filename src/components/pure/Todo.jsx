import React from 'react';
import PropTypes from 'prop-types';

/**
 * El componente de Tarea, cuyo estilo cambia al hacerle click.
 * @param {func} alClick  
 * @param {bool} completed  
 * @param {string} text  
 * @returns componente
 */
const Todo = ({id, alClick, completed, text}) => {
  return (
    <li onClick={alClick}
        style={
                {
                  textDecoration: completed ? 'line-through' : 'none',
                  textDecorationColor: completed ? 'green' : 'none',
                  color: completed ? 'green' : 'white'
                } 
            }>
              {id} - {text}
    </li>
  );
}

Todo.propTypes = {
  alClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export default Todo;
