
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.friends__item}>
            <span className={css.friends__status}
                style={{
                backgroundColor:  isOnline ? 'green' : 'red',
                }}
            >
            </span>
            <img className={css.avatar} src={avatar} alt="User Avatar" width="48" />
            <p className={css.friends__name}>{name}</p>
        </li>
    )
}
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

