import React from 'react'
import Task from '../Task/Task'

import './Column.scss'
import { mapOrder } from './../utils/sort';

const Column = (props) => {
    const {column} = props
    return (
      <div className="column">
        <header className="">{column.title}</header>
        <ul>
          {
            mapOrder(column.cards,column.cardOrder,'id').map((card, index) => <Task key={index} card={card} />)
          }
        </ul>
        <footer>Add another your work</footer>
      </div>
    );
}

export default Column
