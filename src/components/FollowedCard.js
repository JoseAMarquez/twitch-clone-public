import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';

import { clientId } from '../twitch';

const FollowedCard = ({
  isOpen,
  user_login,
  game_name,
  viewer_count,
  user_id,
  token,
}) => {
  const [imageURL, setImageUrl] = useState('');

  useEffect(() => {
    fetch(`https://api.twitch.tv/helix/users?id=${user_id}`, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Client-ID': clientId,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (dataObject) {
        setImageUrl(dataObject.data[0].profile_image_url);
      });
  }, [user_id, token]);

  return (
    <div>
      {isOpen && (
        <div className='flex justify-between pt-1  '>
          <div className='flex flex-row items-center  '>
            <img
              class='max-h-9 align-middle rounded-full '
              src={imageURL}
              alt=''
            />
            <div className='pl-2'>
              <h1>
                {user_login.length > 14
                  ? user_login.substring(0, 14) + '...'
                  : user_login}
              </h1>
              <p className='font-thin text-gray-400'>
                {game_name.length > 10
                  ? game_name.substring(0, 10) + '...'
                  : game_name}
              </p>
            </div>
          </div>
          <div className='flex items-center text-center'>
            <CircleIcon className='text-red-500 max-h-3' />
            <p className='pr-1'>
              {viewer_count > 1000
                ? Math.round(viewer_count / 100) / 10 + 'K'
                : viewer_count}
            </p>
          </div>
        </div>
      )}
      {!isOpen && (
        <img
          class='h-11 align-middle  pt-3 rounded-full '
          src={imageURL}
          alt=''
        />
      )}
    </div>
  );
};

export default FollowedCard;
