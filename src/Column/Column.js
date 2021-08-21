import React from 'react'
import Task from '../Task/Task'

import './Column.scss'

const Column = () => {
    return (
      <div className="column">
        <header className="">BrainStore</header>
        <ul>
          <Task/>
          <Task/>
          <Task/>
          <Task/>
        </ul>
        <footer>Add another your work</footer>
      </div>
    );
}

export default Column
