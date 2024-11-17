import React, { useContext } from 'react'
import Sidebar from './Components/Sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { PlayerContext } from './context/PlayerContext'


const App = () => {
  const {audioRef, track} = useContext(PlayerContext);

  return (
  <div className='h-screen bg-black'>
   <div className="h-[90%] flex">
    <Sidebar />
    <Display />
   </div>
   <Player />
   <audio src={track.file} ref={audioRef} preload='auto'></audio>

  </div>
  )
}

export default App