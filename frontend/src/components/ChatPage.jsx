import React from 'react'

const ChatPage = () => {

  return (
    <div className='container'>
        <div className='card'>
          <h3 className='text-left'>Dianne Vanham</h3>
        <div className='card-body'>
             
                 
                 
                 

        </div> 
          <i className="fa-solid fa-microphone"></i>    
          <input type="text" className='form-control mt-4'  placeholder='Write something' onChange={(e)=>{console.log(e.target.value)}}/>
             
        </div>

    </div>
  )
}

export default ChatPage