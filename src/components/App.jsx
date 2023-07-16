// import user from 'C:/Users/lex/Documents/GitHub/goit-react-hw-01-components/src/user.json';
import user from '../'
import { Profile } from './Profile';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <></>
    </div>
  );
};
