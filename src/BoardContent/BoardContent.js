import React,{ useState,useEffect } from 'react'

import Column from '../Column/Column'
import './BoardContent.scss'
import { initialData } from '../actions/initialData'
import { mapOrder } from './../utils/sort';

const BoardContent = () => {
    const [board,setBoard]=useState({})
    const [columns,setColumns]=useState([])

    useEffect(() => {
      const boardFormDB = initialData.boards.find(board => board.id === 'board-1')
      if(boardFormDB) {
        setBoard(boardFormDB)
        setColumns(mapOrder(boardFormDB.columns,boardFormDB.columnOrder,'id'))
      }
    },[])

    if(Object.keys(board).length === 0 && board.constructor === Object){
      return (
        <div>Not Found</div>
      )
    }

    return (
      <div className="board-columns">
        {columns.map((column,index) => <Column key={index} column={column}/>)}
      </div>
    )
}

export default BoardContent
