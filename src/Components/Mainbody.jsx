import React, { useContext, useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { RxLoop } from "react-icons/rx";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { Context } from './Context/Context';
const Mainbody = () => {
  const {theme,tasks,setTasks,impotask,setimpotask} = useContext(Context);

  const[task,settask] = useState("");
  // const [isClicked, setIsClicked] = useState(false);

  const glasstheme = (lightclass,darkclass)=> theme ==="light" ? lightclass : darkclass;

  // const toggleClass = () => {
  //   setIsClicked(!isClicked);
  // };

  const addtask =()=>{
    if(task.trim()){  
      // here .trim is used to trim the remove the whitespaces in the String.
      setTasks([...tasks,{text:task, completed:false, importanttask: false}]);
      settask("");
    }
  }

  const toggleCompletion = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const toggleimportant = (index) => {
    setTasks((prevTasks) => {
      const updatetasks = prevTasks.map((task, i) => 
        i === index ? { ...task, importanttask: !task.importanttask } : task
      );
      setimpotask(updatetasks.filter((item)=> item.importanttask));
      return updatetasks; 
    });
  };

  const deletetask = (index)=>{
    setTasks((prevtask)=>{
      const updatevalue =prevtask.filter((_,i) => i != index )
      setimpotask(updatevalue.filter((item)=> item.importanttask));
      return updatevalue;  
  });  // its means it return array except the current index element
   
  }
  return (
    <div className='p-2'>
      <div className='flex'>
       <p> To Do</p>
       <div className='flex justify-center items-center'>
       <IoMdArrowDropdown className=' cursor-pointer'/>
       </div>
      </div>
        <div className={glasstheme('border-t-2 border-b-2 border-gray-400  flex justify-center items-center w-[1098px] h-[210px] mt-2 bg-[#EEF6EF] flex-col' , 'bg-[#1a202c] text-white border-t-2 border-b-2 border-gray-400  flex justify-center items-center w-[1098px] h-[210px] mt-2 flex-col' )}>
          <input type='text'placeholder='Add a Task' className={`w-full border-none outline-none ${ glasstheme ('bg-[#EEF6EF]', 'bg-[#1a202c] text-white')}  pl-2`} value={task} onChange={(e)=> settask(e.target.value)} />
          <div className='w-full pl-2 justify-between flex mt-[100px]'>
           <div className='flex gap-4  cursor-pointer'>
           <GoBell/>
           <RxLoop/>
           <FaRegCalendarAlt onClick={<input type='date'/>}/>
           </div>
           <button className='w-[104px] h-[36px] text-[#357937] rounded-[8px] bg-gray-300 mr-2' onClick={addtask}> Add task</button>
          </div>
        </div>
        <div className='w-[1098px] mt-4'>
          {tasks.filter((val)=> !val.completed).map((val)=>(
          <div  key ={tasks.indexOf(val)} className='flex justify-between mt-6'>
                <div className='flex gap-2'>
                <input type='checkbox' onChange={() => toggleCompletion(tasks.indexOf(val))}/>
                <span>{val.text}</span>
             </div>
              <CiStar onClick={()=>{ toggleimportant(tasks.indexOf(val))}} className={` cursor-pointer ${val.importanttask? "text-[#357937]" :""}`}/>
             </div>
          ))}
        </div>


        {/* completed secton.... */}


        <div className='w-[1098px] mt-4'>
        <h2 className="font-bold">Completed Tasks</h2>
      {tasks.filter((value)=>value.completed).map((value)=>(
        <div key={tasks.indexOf(value)} className=' line-through mt-6 flex justify-between w-full'>
          {value.text}
          <MdDeleteOutline onClick={()=>deletetask(tasks.indexOf(value))} className=' cursor-pointer'/>
        </div>
      ))}
        </div>
    </div>
  )
}

export default Mainbody
