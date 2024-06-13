import React from 'react';
import PropTypes from 'prop-types';
// import editIcon from './src/assets/editIcon.png';

export const Card = ({ title, notecontent }) => {
  // const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div className="relative box h-[240px] w-[180px] bg-[#D9D9D9] p-3 m-4 mt-8 rounded-lg">
      <div className="font-jura flex flex-col tracking-[0] leading-[normal] h-full">
        <div className="flex flex-row items-center justify-between mb-2">
          <div className="text-black text-[26px]">
            {title}
          </div>
          <div className="h-[20px] w-[20px]">
            <button>
              <img src="./src/assets/editIcon.png" alt="Edit Icon" />
            </button>
          </div>
        </div>
        <div className="border-t  border-gray-950 mb-2 w-3/4"> </div>
        <div className="text-[18px] overflow-hidden text-ellipsis whitespace-normal flex-grow mb-2">
          {notecontent}
        </div>
        <div className="flex flex-row items-center justify-between mt-auto">
          <div className="text-[16px]">
            {/* {formattedDate} */}
            12/08/2022
          </div>
          <div className="h-[24px] w-[24px]">
            <img src="./src/assets/trashIcon.png" alt="Trash Icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  notecontent: PropTypes.string.isRequired,
};

export default Card;
