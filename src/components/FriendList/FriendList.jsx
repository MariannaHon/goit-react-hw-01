
import './FriendList.css'

import FriendListItem from '../FriendListItem/FriendListItem';



const FriendList = ({ friends }) => {
    return (
        <ul className='friends-list'>
            {friends.map(friend => {
                return <li className='friends-item' key={friend.id}>
                    <FriendListItem {...friend} />
                </li>
            })}
        </ul>
    );
}

export default FriendList;