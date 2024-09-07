import React, { useState ,useRef } from 'react'
import Card from './Card'


function foreground() {

    const ref =useRef(null);
   const data = [ 
    {desc:"This is the card in the document i created and this is my first project of react+vite using tailwind ",
     filesize :"0.25mb",
      close:true,
     tag: { isOpen: true,tagTitle: "Download Now", tagColor:"green"},
    },

    {desc:"This is the card in the document i created and this is my first project of react+vite using tailwind ",
        filesize :"0.9mb",
         close:true,
        tag: { isOpen: true,tagTitle: "Download Now", tagColor:"blue"},
       },

       {desc:"This is the card in the document i created and this is my first project of react+vite using tailwind ",
        filesize :"0.3mb",
         close:true,
        tag: { isOpen: true,tagTitle: "Upload", tagColor:"green"},
       },
   ]; 

   
        
  return (
    <div ref={ref} className=' h-full w-full left-0 fixed flex gap-10 top-3 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref} /> 
      ))}
    </div>
  )
}

export default foreground
