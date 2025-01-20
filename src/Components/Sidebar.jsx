import React, { useContext } from 'react'
import profilepic from "../assets/profilepic.png"
import { RiTodoLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { CiMap } from "react-icons/ci";
import { MdAssignmentInd } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { CiCircleAlert } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
import { Context } from './Context/Context';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const glasstheme = (lightclass,darkclass)=> theme ==="light" ? lightclass : darkclass;
  const {theme,tasks} = useContext(Context)
  const tasklist = [
    {
      "icon": <RiTodoLine/>,
      "name": "All Tasks" ,
      "path" : "/",
    },
    {
      "icon": <SlCalender/>,
      "name" :"Today",
      "path" : "/",
    },
    {
      "icon":<CiStar onClick={()=>navigate("/impo")}/>,
      "name": "Important",
      "path": "/impo"
    },
    {
      "icon": <CiMap/>,
      "name": "Planned",
      "path" : "/",
    },
    {
      "icon": <MdAssignmentInd/>,
      "name": "Assigneed to me",
      "path":"/",
    }
  ]
  return (
    <div>
   <div className="ml-[48px] border w-[280px] h-[500px] hidden sm:block ">
  <div className={` ${glasstheme("bg-[#EEF6EF]", "bg-[#1a202c] text-white")} mt-[95px] h-full flex flex-col`}>
    <div className="flex items-center flex-col">
      <img
        src={profilepic}
        alt="profileimage"
        className="w-[118px] h-[118px] mt-[-50px]"
      />
      <p className="font-semibold">Hey Pankaj</p>
    </div>
    <div className="flex justify-center items-center flex-col h-full">
      <div className={`${glasstheme("bg-[#EEF6EF]", "bg-[#1a202c] text-white")} w-[240px] h-[248px] flex flex-col`}>
        <div className="h-full">
          {tasklist.map((item, index) => (
            <div
              key={index}
              onClick={()=>navigate(item.path)}
              className="justify-start items-center w-full flex flex-col gap-4 grow"
            >
              <div className="flex gap-4 justify-start items-center w-full -mx-4 px-4 py-2 cursor-pointer hover:bg-[#EEF6EF] hover:text-green-400">
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={` ${glasstheme("bg-[#EEF6EF]", "bg-[#1a202c] text-white")} flex justify-start items-start w-[240px] mt-2`}>
        <div className='flex -mx-4 px-4 py-2 gap-2'>
          <div className=' flex justify-center items-center pl-2 cursor-pointer'>
          <IoAddOutline/>
          </div>
          <p> Add List</p>
        </div>
      </div>
      <div className= {`${glasstheme("bg-[#EEF6EF]", "bg-[#1a202c] text-white")} flex  w-[240px] mt-2`}>
        <div className='flex w-full justify-between'>
         <div className='flex flex-col pl-3'> 
           <h3>Today Task</h3>
           <p className='text-2xl'>{tasks.length}</p>
         </div>
         <div className='pr-3  py-2 cursor-pointer'>
         <CiCircleAlert/>
         </div>
        </div>
      </div>
      <div className={`${glasstheme("bg-[#EEF6EF]", "bg-[#1a202c] text-white")} w-[240px]`}>
       <div className=' mt-2 flex justify-center items-center'>
          <div className='h-[150px] w-[150px] rounded-[50%] bg-green-600 flex justify-center items-center'>
          <div className='h-[85px] w-[85px] rounded-[50%] bg-white'>
            </div>
          </div>
       </div>
       <div className='flex gap-5 '>
        <div className='flex  justify-center items-center'>
          <LuDot className='w-8 h-8 text-[#3F9142]'/>
         <p className='text-[#3F9142] text-sm '> Pending</p>
        </div>
        <div className='flex justify-center items-center '>
          <LuDot className='w-8 h-8 text-[#142E15] '/>
        <p className={` ${glasstheme("text-[#1a202c]" ,"text-[#EEF6EF]")} text-sm`}> Complete</p>
        </div>
       </div>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Sidebar
