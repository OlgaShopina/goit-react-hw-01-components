import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li
            className={styles.item}
                key={id}>
             <span
            className={styles.status}
            style={{ backgroundColor: isOnline && 'green' }}
          >
            {isOnline}
          </span>
          <img className={styles.avatar} src={avatar} alt={name} width="48" />
          <p className={styles.name}>{name}</p>
          </li>
        ))}
      </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
};