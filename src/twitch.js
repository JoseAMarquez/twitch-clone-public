export const authEndpoint = 'https://id.twitch.tv/oauth2/authorize';

//redirect url
const redirectUri = '';

//ClientID from twitch devs
export const clientId = '';

const scopes = 'user%3Aread%3Afollows';

const response_type = 'token';

export const getTokenFromUrl = () => {
  const url = window.location.hash;
  const start = url.indexOf('access_token=') + 'access_token='.length;
  const end = url.indexOf('&', start);
  const accessToken = url.substring(start, end);
  return accessToken;
};

export const loginUrl = `${authEndpoint}?response_type=${response_type}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}`;
