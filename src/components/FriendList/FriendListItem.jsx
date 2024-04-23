
import './FriendsListItem.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img
                className='friend-picture'
                src={avatar}
                alt="Avatar"
                width="48"
            />
            <p className='friend-name'>{name}</p>
            {
                isOnline === true ? (<p className='is-online'>Online</p>) : (<p className='is-offline'>Offline</p>)
            }
        </div>
    );
}

export default FriendListItem;