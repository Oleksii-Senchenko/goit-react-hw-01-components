import css from './Friends.module.css';

export function FriendItems({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={`${css.status}  ${isOnline ? css.online : css.offline}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src="" alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
