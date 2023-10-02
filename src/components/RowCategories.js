import React from 'react';

const RowCategories = ({ categories }) => {
  return (
    <div className='inline-flex  p-5 mr-3 w-full overflow-auto no-scrollbar whitespace-nowrap  '>
      {categories.map((categories, index) => (
        <div className='flex flex-col  '>
          <img
            className=' max-h-[180px] min-h-[204px] mr-3 object-contain min-w-[153px] '
            src={categories.box_art_url
              .replace(/{width}/g, '153')
              .replace(/{height}/g, '204')}
            alt=''
          />
          <h1 className='text-white font-semibold'>{categories.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default RowCategories;
