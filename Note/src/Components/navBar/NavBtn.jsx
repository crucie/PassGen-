import React from 'react'

function NavBtn({btnName, activeBtn}) {
  return (
    // if (activeBtn===true){
    <div className='box h-[6%] w-[90%] bg-[#8E8E8E] rounded-lg m-2 flex justify-center items-center font-jura text-[#fff] text-ellipsis text-[120%] min-h-9'>
      {btnName}
    </div>
    // }
  )
}

export default NavBtn
