import React, { useContext } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Context } from './Context/Context'

const Important = () => {
  const {impotask} = useContext(Context)
  console.log(impotask);
  return (
    <div>
      <Navbar/>
      <div className='flex gap-[30px]'>
     <Sidebar/>
     <div className='flex flex-col'>
      {impotask.length>0 ? (
        <> 
            <div  className='p-2 text-2xl'> Tasks List </div>
        {impotask.map((item,index)=>(
          <div key={index} className='p-2'>
              { item ? <ul className='p-2'> 
                <li>{item.text} </li>  
                </ul> : <p> No Important Task  </p>} 
                </div>
       ))}
        </>
    
      )
       :(
        <p className='p-2 text-2xl'> No Important Task</p>
       )
      }

        </div>
    </div>
    </div>
  )
}

export default Important
