import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Mainbody from './Mainbody'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
      <div className='flex gap-[30px]'>
      <Sidebar/>
      <Mainbody/>
    </div>
    </>
  
  )
}

export default Dashboard
