import React from 'react'
import { IoReorderThree } from "react-icons/io5";
import {menu} from './SidebarConfig';

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
            <img className="w-40" src="https://tse1.mm.bing.net/th?id=OIP.vDOq6L5PbY7XrDGK5TjNLAHaC7&pid=Api&P=0&h=180" alt=''/>
        </div>
        <div className='mt-10'>
            {menu.map((item)=>  <div className='flex items-center mb-5 cursor-pointer text-lg'>
                <p>{item.title}</p>
                {item.icon}

            </div>)}
           
        </div>
      </div>
      <div className='flex items-center cursor-pointer'>
      <IoReorderThree />
      <p className='ml-5'>more</p>
      </div>
    </div>
  )
}

export default Sidebar
