import React from 'react';

import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import InboxIcon from '@mui/icons-material/Inbox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import DiamondIcon from '@mui/icons-material/Diamond';

const Header = () => {
  return (
    <div class='flex h-14 bg-[#18181b] border-b border-black  text-white justify-between font-semibold'>
      <div className='flex p-3 items-center space-x-7'>
        <img
          class='max-h-9 hover:scale-105 transform transition ease-in-out'
          src='https://www.freepnglogos.com/uploads/twitch-logo-vector-png-2.png'
          alt=''
        />
        <p className='hover:scale-105 transform transition ease-in-out hover:text-purple-400'>
          Following
        </p>
        <p className='hover:scale-105 transform transition ease-in-out hover:text-purple-400'>
          Browser
        </p>
        <MoreVertIcon className='hover:scale-105 transform transition ease-in-out hover:text-purple-400' />
      </div>
      <div className='flex items-center invisible md:visible leading-8 w-96'>
        <input
          className='font-normal bg-black text-white border-2 m-1 w-full rounded-l-lg border-[#4a4a4d] focus:outline-none pl-1
          focus:border-purple-400  shadow-sm focus:border-4
          '
          type='text'
          placeholder='Search'
        />
        <SearchIcon className=' rounded-r-lg bg-[#2f2f35] h-full' />
      </div>
      <div className='flex items-center mr-3 space-x-7'>
        <InboxIcon />
        <ChatBubbleOutlineIcon />
        <DiamondIcon />
        <img
          class='max-h-9 '
          src='https://www.freepnglogos.com/uploads/twitch-logo-vector-png-2.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Header;
