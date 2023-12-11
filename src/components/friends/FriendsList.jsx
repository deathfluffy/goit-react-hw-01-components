import FriendListItem from './FriendsListItem';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
export default function FriendsList ({ friends })  {
  return (
    <div className={css.friends}>
    <ul className={css.friendlist}>
        {friends.map(friend => (
          <FriendListItem 
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
           /> 
          ))}
      </ul>
     </div>
    );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};