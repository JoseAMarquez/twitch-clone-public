import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';

import { useDataLayerValue } from '../DataLayer';
import RowChannels from './RowChannels';
import RowCategories from './RowCategories';

import { clientId } from '../twitch';

const Body = ({ setRecommendedChannels }) => {
  const [streams, setStreams] = useState([]);
  const [{ token }] = useDataLayerValue();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/streams', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Client-ID': clientId,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (dataObject) {
        setStreams(dataObject.data);
        setRecommendedChannels(dataObject.data);
      });
  }, [token]);

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/games/top?first=20', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Client-ID': clientId,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (dataObject) {
        setCategories(dataObject.data);
      });
  }, [token]);

  return (
    <div className='flex flex-col bg-[#0e0e10] min-h-screen min-w-[87%] '>
      <Carousel streams={streams.slice(0, 5)} />
      <span className='text-white pl-7 pt-6 text-xl'>Recommended channels</span>
      <RowChannels streams={streams.slice(5, 10)} />
      <span className='text-purple-700 pl-7 pt-6 text-xl'>Drops Enabled</span>
      <RowChannels streams={streams.slice(11, 16)} />
      <span className='text-white pl-7 pt-6 text-xl'>
        <span className='text-purple-700 '>Categories</span> we think you’ll
        like
      </span>

      <RowCategories categories={categories.slice(0, 11)} />

      <span className='text-white pl-7 pt-6 text-xl'>
        <span className='text-purple-700 '>Live channels</span> we think you’ll
        like
      </span>
      <RowChannels streams={streams.slice(15, 22)} />
    </div>
  );
};

export default Body;
