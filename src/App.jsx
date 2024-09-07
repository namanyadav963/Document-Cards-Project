import React from 'react'

import Foreground from './components/foreground'

export default function App() {
  return (
    <>
    <div className='w-full h-screen  text-9xl relative bg-black '>
      <h1 className=' absolute text-zinc-900 font-extrabold  decoration-slate-200 tracking-tight leading-tight  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>Docs.</h1>
      <Foreground />
    </div>
    
      
    </>
  )
}
