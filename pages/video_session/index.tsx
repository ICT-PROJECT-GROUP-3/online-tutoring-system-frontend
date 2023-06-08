
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Room = () => {
  const router = useRouter()
  const [RoomCode, setRoomCode] = useState('')
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(RoomCode)
    router.push(`./video_session/${RoomCode}`);  }
  return (
    <div>
      <h1>Room</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
        <input
          type='text'
          placeholder='Enter Room Code'
          value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          required
        />
        </div>
        <button type='submit'>Join Room</button>
      </form>
       
    </div>
  )
}

export default Room