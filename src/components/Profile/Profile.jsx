import css from '../Profile/Profile.module.css';
import PropTypes from 'prop-types';
export function Profile({ avatar, username, tag }) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>Salvador, Brasil</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css.label}>Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li className={css.item}>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li className={css.item}>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
