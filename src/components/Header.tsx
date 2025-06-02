import React from 'react'

export const Header = () => {
  return (
    <header className='mb-1px bg-[#489dba] text-[#1a1a15]  font-bold px-4 py-2 flex justify-between items-center'>
        <div className='flex items-center gap-2 '>
            <img src="./logomktraker.png" alt="loog" className='w-10 h-10 rounded'/>
            <p>ESportScout</p>
        </div>
        <ul className='flex flex-row justify-around gap-2 '>
            <li>Home</li>
            <li className='text-mainGold'>About</li>
            <li>Contact</li>
        </ul>

    </header>
  )
}
