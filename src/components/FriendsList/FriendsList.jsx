import { FriendItems } from 'components/FriendsItems/FriendsItems';
import css from './FriendsList.module.css'
// export function FriendsList({ friends }) {
//   return friends.map(({ avatar, name, isOnline, id }) => {
//     return (
//       <FriendItems key={id} avatar={avatar} isOnline={isOnline} name={name} />
//     );
//   });
// }
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
