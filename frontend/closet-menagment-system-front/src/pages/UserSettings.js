import React from 'react'
import Settings from '../components/Settings'

const UserSettings = () => {
  return (
    <div className='user-settings'>
      <Settings
        dateJoined={"2022-02-22"} 
        login={"user1"} 
        email={"user1@mail.com"}
        location={"Poznan"}
        />
    </div>
  )
}

export default UserSettings