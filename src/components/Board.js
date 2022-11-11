import React from 'react'
import Square from './Square'

export default function Board() {
  return (
    <div className='board'>
      <div>
        <Square
        value={props.squares[0]}
        onClick={() => {
          props.onClick(0);
          }}
        />
      </div>
    </div>
  )
}
