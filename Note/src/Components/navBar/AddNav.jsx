import React from 'react'

function AddNav({btnText}) {
  return (
    <div className='box h-[6%] w-[90%] bg-[#8E8E8E] rounded-lg m-2 flex justify-center items-center font-jura text-[#000] text-ellipsis text-[200%] min-h-9'>
      <button>
        {/* <img src='./src/assets/addBtn.png'/> */}
        {btnText}
      </button>
    </div>
  )
}

export default AddNav
