import user from '../data/user.json';
import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
    </>
  );
};
