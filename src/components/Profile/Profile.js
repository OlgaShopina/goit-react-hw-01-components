import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={styles.profile}>
  <div className={styles.description}>
    <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
    />
        <p className={styles.name}>{name}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>

      <ul className={styles.stats}>
    <li className={styles.item}>
          <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.item}>
          <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.arrayOf(
        PropTypes.shape({
          followers: PropTypes.number,
          views: PropTypes.number,
          likes: PropTypes.number,
        }),
      ),
 
};