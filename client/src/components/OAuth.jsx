import React from 'react'

export default function OAuth() {

    const  handleOauthClick = async () => {
        try {
            
        } catch (error) {
            console.log('could not sign in with google', error)
        }
    }


  return (
    <button type='button' onClick={handleOauthClick} className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
    Continue with google</button>
  )
}
