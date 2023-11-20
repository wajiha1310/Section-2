import React, { useState } from 'react'

const SocialMediaPost = () => {
    let count=0;
    const [likes,setLikes] = useState(0);
    const [img, setimg] = useState('');
    const [comment,setcomment] = useState()

  return (
    <div className='container'>
        <div className='card'>
           <img className='d-block' src="https://i0.wp.com/avemateiu.com/wp-content/uploads/2019/05/quote-271.png?fit=1080%2C1080&ssl=1"   alt=""/>
           <div>
           <h1>Likes:{likes}</h1>
           
        <button className='btn btn-primary' onClick={()=>{setLikes(likes+1);}}>Add like </button>
        </div>
        </div>
        
    </div>
  )
}

export default SocialMediaPost