import React from 'react'
import FilterContainer from '../containers/FilterContainer';

const FilterOptions = () => {

  return (
    <div className='filters'>
      {/* Contenedores de filtros */}
      <FilterContainer filter='SHOW_ALL'>Todos</FilterContainer><br/>
      <FilterContainer filter='SHOW_ACTIVE'>Activos</FilterContainer><br/>
      <FilterContainer filter='SHOW_COMPLETED'>Completados</FilterContainer>
    </div>
  );
};

export default FilterOptions
