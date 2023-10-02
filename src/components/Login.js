import React from 'react';
import { loginUrl } from '../twitch';

function Login() {
  return (
    <div class='flex flex-col justify-center items-center space-y-9 bg-black min-h-screen'>
      <div>
        <img
          class='w-screen max-h-96 '
          src='https://upload.wikimedia.org/wikipedia/commons/2/26/Twitch_logo.svg'
          alt='logo'
        />
      </div>
      <div>
        <a
          class='p-2 bg-purple-700 text-white rounded-md text-lg hover:bg-purple-950 transform transition ease-in-out'
          href={loginUrl}
        >
          Login With Twitch
        </a>
      </div>
    </div>
  );
}

export default Login;
