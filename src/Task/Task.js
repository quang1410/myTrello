import React from 'react'

import './Task.scss'

const Task = (props) => {
    const {card} = props
    return (
        <li className="task-item">
            { card.cover && <img
              alt="ngoc-quang"
              className="task-item__img"
              src={card.cover}
            />
            }
            {card.title}
        </li>
    )
}

export default Task