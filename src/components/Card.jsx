import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (
    

      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className=" relative w-60 h-72 flex-shrink-0 bg-zinc-900 overflow-hidden rounded-[50px]  text-white text-sm p-4">
        <FaRegFileAlt />
        <p className='text-sm mt-3 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute left-0 w-full bottom-0  '> 
        <div className=' flex items-center justify-between px-3 py-8 mb-3 '> 
          <button>{data.filesize}</button>
       {data.close ? < IoMdCloseCircle/> :<HiOutlineDownload/> }
       
        </div>

{
  data.tag.isOpen && (
    <div className={`tag py-4  w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
    <button assName='text-black font-bold ' >{data.tag.tagTitle}</button>
    </div>
  ) 
}
     

        </div>
      </motion.div>
     
  )
}

export default Card
