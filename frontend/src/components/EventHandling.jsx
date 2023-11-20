import React from 'react'

const EventHandling = () => {
  return (
    <div >
      <h1 className='text-center'>Event Handling</h1>
      <hr/>
      <button className='btn btn-primary'onClick={() => {prompt('Nice Alert!!')}}>My Button</button>
     
      {/* <button className='btn btn-primary'onClick={() => {console.log('nice')}}>My Button</button> */}
      {/* by clicking on inspect we can se number of times it is clicked */}

      <input type="text" className='form-control mt-4' onChange={(e)=>{console.log(e.target.value)}}/>
      
      <input type="color" onChange={(e)=>{console.log(e.target.value);}}/>
      <input type="color" onChange={(e)=> {document.body.style.backgroundColor=e.target.value; }}/>

    </div>
  )
}

export default EventHandling