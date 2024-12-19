import React from 'react'

 const PlayerTern = ({current_player}) => {
  return (
    
    <div className='player-tern'>{`tern--> player${current_player + 1}`}</div>
  )
}
 export default PlayerTern;