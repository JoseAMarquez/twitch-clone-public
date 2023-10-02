import React, { useEffect, useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FollowedCard from './FollowedCard';
import { useDataLayerValue } from '../DataLayer';

import { clientId } from '../twitch';

const SideBar = ({ recommendedChannels }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [followedChannels, setFollowedChannels] = useState([]);
  const [{ token }] = useDataLayerValue();
  const [userID, setUserID] = useState('');

  const handleResize = () => {
    if (window.innerWidth < 1500) {
      setIsOpen(false);
    } else if (window.innerWidth > 1500) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleResize);
    };
  }, []);

  useEffect(() => {
    fetch('https://api.twitch.tv/helix/users', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Client-ID': clientId,
      },
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (dataObject) {
        setUserID(dataObject.data[0].id);
      });
  }, [token]);

  useEffect(() => {
    if (userID) {
      fetch(`https://api.twitch.tv/helix/streams/followed?user_id=${userID}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Client-ID': clientId,
        },
      })
        .then(function (res) {
          return res.json();
        })
        .then(function (dataObject) {
          setFollowedChannels(dataObject.data);
        });
    }
  }, [token, userID]);

  return (
    <div
      className={`flex flex-col bg-[#1f1f23]  min-h-screen  overflow-auto text-white  ${
        isOpen ? 'min-w-[12%]' : 'min-w-[50px]'
      } `}
    >
      <div
        className='flex flex-row py-1.5 pl-3 text-xl 
      text-center items-center font-semibold
      justify-between'
      >
        {isOpen && <h1>For You </h1>}
        <KeyboardArrowRightIcon
          onClick={() => setIsOpen(!isOpen)}
          className={`${isOpen && 'rotate-180'}`}
        />
      </div>
      <div className='flex-row pl-3 pt-1'>
        {isOpen && (
          <>
            <h2>FOLLOWED CHANNELS</h2>
            <p className='font-thin text-gray-400'>Viewers</p>
          </>
        )}
      </div>
      <div className='flex-row pl-3 pt-1'>
        {followedChannels.map((channel, index) => {
          return (
            <FollowedCard
              isOpen={isOpen}
              key={index}
              user_login={channel.user_login}
              game_name={channel.game_name}
              viewer_count={channel.viewer_count}
              user_id={channel.user_id}
              token={token}
            />
          );
        })}
      </div>

      <div className='flex-row pl-3 pt-10'>
        {isOpen && (
          <>
            <h2>RECOMMENDED CHANNELS</h2>
            {recommendedChannels.slice(0, 5).map((channel, index) => {
              return (
                <FollowedCard
                  isOpen={isOpen}
                  key={index}
                  user_login={channel.user_login}
                  game_name={channel.game_name}
                  viewer_count={channel.viewer_count}
                  user_id={channel.user_id}
                  token={token}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default SideBar;
