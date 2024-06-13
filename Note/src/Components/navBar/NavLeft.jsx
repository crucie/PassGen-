import React from 'react'
import NavBtn from './NavBtn'
import AddNav from './AddNav'


function NavLeft() {
  return (
    <div>
        <div className="box bg-[#D9D9D9] w-[135px] h-screen top-0 left-0 text-gray-900 font-jura flex flex-col items-center justify-center">
                <NavBtn btnName='All'/>
                <NavBtn btnName="Important"/>
                <AddNav btnText='+'/>
        </div>
        
    </div>
  )
}

export default NavLeft
