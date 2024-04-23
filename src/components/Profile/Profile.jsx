import './Profile.css'

import { IoIosAt } from "react-icons/io";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className="profile-container">
            <div className='img-profile-wrapper'>
                <img
                    className='profile-avatar'
                    src={image}
                    alt="User avatar"
                />
                <p className='profile-name'>{name}</p>
                <p className='profile-text'> <IoIosAt />{tag}</p>
                <p className='profile-text'>{location}</p>
            </div>

            <ul className='profile-stats-container'>
                <li className='profile-stats-item'>
                    <span>Followers</span>
                    <span className='profile-stats'>{stats.followers}</span>
                </li>
                <li className='profile-stats-item'>
                    <span>Views</span>
                    <span className='profile-stats'>{stats.views}</span>
                </li>
                <li className='profile-stats-item'>
                    <span>Likes</span>
                    <span className='profile-stats'>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}

export default Profile;