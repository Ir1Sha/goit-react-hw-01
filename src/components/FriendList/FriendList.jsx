import FriendListItem from "./FriendListItem";
import styles from './FriendListItem.module.css';

const FriendList = ({ friends }) => {
    return (
      <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className={styles.item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    );
  };

export default FriendList;