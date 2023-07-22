import css from './Friends.module.css';
import PropTypes from 'prop-types';
export function FriendItems({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={`${css.status}  ${isOnline ? css.online : css.offline}`}>
        {isOnline}
      </span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendItems.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline:PropTypes.bool.isRequired
};
