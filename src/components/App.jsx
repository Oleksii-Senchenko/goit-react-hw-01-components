import user from 'data/user.json';
import data from 'data/data.json';
import friend from 'data/friends.json';

import { Profile } from './Profile/Profile';
import { StatisticsList } from './StatisticsList/StatisticsList';
import { FriendsList } from './FriendsList/FriendsList';

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
      <StatisticsList stats={data} />
      <FriendsList friends={friend} />
    </>
  );
};
