import { FriendItems } from 'components/FriendsItems/FriendsItems';
import css from './FriendsList.module.css'
import PropTypes from 'prop-types';


export function FriendsList({ friends }) {
  return (
    <section className={css.section}>
      <ul>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <FriendItems
              key={id}
              avatar={avatar}
              isOnline={isOnline}
              name={name}
            />
          );
        })}
      </ul>
    </section>
  );
}
FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
