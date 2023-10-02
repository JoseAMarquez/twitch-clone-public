import React from 'react';

const RowChannels = ({ streams }) => {
  return (
    <div className='inline-flex p-5  mr-3 w-full overflow-auto whitespace-nowrap no-scrollbar'>
      {streams.map((stream, index) => (
        <div className='flex flex-col '>
          <img
            className=' max-h-[180px] min-h-[180px] min-w-[315px] mr-3 object-contain '
            src={stream.thumbnail_url
              .replace(/{width}/g, '530')
              .replace(/{height}/g, '300')}
            alt=''
          />
          <h3 className='text-white'>
            {stream.title.length > 22
              ? stream.title.substring(0, 22) + '...'
              : stream.title}
          </h3>
          <p className='text-white text-sm'>{stream.user_name} </p>
          <div className='mr-3 '>
            {stream.tags?.slice(0, 1).map((tag, index) => {
              return (
                <p
                  key={index}
                  className='inline-flex text-[#9c9ca6] bg-[#2f2f35] rounded-full px-2'
                >
                  {tag}
                </p>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RowChannels;
