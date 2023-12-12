import React, { useState } from 'react'
import PostData from './PostData';

const Listpost = () => {
    const [postArray, setPostArray] = useState(PostData);

    const addlike =(index)=>{
        const temp =postArray;
        temp[index].like++;
        setPostArray([...temp]);
    }

    const addcomment =(index)=>{
          const temp =postArray;
          temp[index].comment++;
          setPostArray([...temp]);    
    }

    const addshare =(index)=>{
        const temp =postArray;
        temp[index].share++;
        setPostArray([...temp]);    
    }
  return (
    <div>
        <div className='col-md-6 mx-auto'>
            {
                PostData.map((post,index)=>{return <div className='card mb-4'>
                    <div className='card-header'>
                       <h4 className='m-0'>{post.author}</h4>
                       <p className='m-0'>{post.postedOn.toLocaleDateString(undefined,{day:'numeric',month:'long',year:'numeric'})}
                       &nbsp;{post.postedOn.toLocaleTimeString()}</p> 
                    </div>
                    <div className='card-body'>
                        <p className='m-0'>{post.content}</p>
                    </div>
                    <img className='img-fluid' src={post.image} alt=""/>
                    <div className='p-3'>
                        <span>{post.like}Likes</span>&nbsp;&middot;&nbsp;
                        <span>{post.comment}Comment</span>&nbsp;&middot;&nbsp;
                        <span>{post.share}Shares</span>&nbsp;
                    </div>
                    <div className='card-footer'>
                        <div className='row'>
                            <div className='col-4'>
                                <button className='btn w-100 ' onClick={() => {addlike(index)}}><i class="fa-solid fa-thumbs-up"></i>Like</button>
                            </div> 
                            <div className='col-4'>
                                <button className='btn w-100 rounded-pill' onClick={() => {addcomment(index)}}><i class="fa-solid fa-comment"></i>Comment</button>
                            </div> 
                            <div className='col-4'>
                                <button className='btn w-100 rounded-pill' onClick={() => {addshare(index)}}><i class="fa-solid fa-share"></i>Share</button>
                            </div> 
                        </div> 
                    </div>         
                </div> })
            }
        </div>
    </div>
  )
}

export default Listpost