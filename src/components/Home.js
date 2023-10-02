import React, { useState } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import Body from './Body';

export const Home = () => {
  const [recommendedChannels, setRecommendedChannels] = useState([]);

  return (
    <div>
      <Header />
      <div className='flex max-w-full'>
        <SideBar recommendedChannels={recommendedChannels} />
        <Body setRecommendedChannels={setRecommendedChannels} />
      </div>
    </div>
  );
};
