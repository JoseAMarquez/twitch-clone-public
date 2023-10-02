import { useEffect } from 'react';
import { useDataLayerValue } from './DataLayer';
import Login from './components/Login';
import { getTokenFromUrl } from './twitch';
import { Home } from './components/Home';

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const userToken = getTokenFromUrl();
    window.location.hash = '';

    if (userToken) {
      dispatch({
        type: 'SET_TOKEN',
        token: userToken,
      });
    }
  }, [user, dispatch]);

  return <div>{token ? <Home /> : <Login />}</div>;
}

export default App;
